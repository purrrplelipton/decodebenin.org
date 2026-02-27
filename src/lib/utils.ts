import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Calculate the relative luminance of an RGB color
 * Using the WCAG formula for determining contrast
 * @param r Red component (0-255)
 * @param g Green component (0-255)
 * @param b Blue component (0-255)
 * @returns Luminance value (0-1)
 */
export function getRelativeLuminance(r: number, g: number, b: number) {
  const [R, G, B] = [r, g, b].map((colorValue) => {
    const sRGB = colorValue / 255;
    return sRGB <= 0.03928 ? sRGB / 12.92 : ((sRGB + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * R + 0.7152 * G + 0.0722 * B;
}

// Reusable canvas context for ultra-fast CSS color parsing
let colorParsingCtx: CanvasRenderingContext2D | null = null;

/**
 * Parse ANY valid CSS color (rgb, rgba, hex, hsl, oklch, color-mix) into [r, g, b, a] array.
 * Uses a 1x1 canvas to let the browser natively compute the color value.
 * @param cssColor Any valid CSS color string
 * @returns Array [r, g, b, alpha (0-255)] or null if parsing fails
 */
export function parseCSSColor(cssColor: string) {
  if (!cssColor || cssColor === "transparent" || cssColor === "none") return null;

  if (!colorParsingCtx) {
    const canvas = document.createElement("canvas");
    canvas.width = 1;
    canvas.height = 1;
    colorParsingCtx = canvas.getContext("2d", { willReadFrequently: true });
  }

  if (!colorParsingCtx) return null;

  // Clear previous pixel
  colorParsingCtx.clearRect(0, 0, 1, 1);

  // If the color is invalid, fillStyle remains whatever it was previously (which is why we clear)
  // But wait, if fillStyle fails to set, it ignores it. So we set a known transparent state first:
  colorParsingCtx.fillStyle = "rgba(0,0,0,0)";
  colorParsingCtx.fillStyle = cssColor;

  colorParsingCtx.fillRect(0, 0, 1, 1);
  const data = colorParsingCtx.getImageData(0, 0, 1, 1).data;

  // [r, g, b, a]
  return [data[0], data[1], data[2], data[3]] as const;
}

/**
 * Determine if a color is light or dark based on luminance
 * @param r Red component (0-255)
 * @param g Green component (0-255)
 * @param b Blue component (0-255)
 * @returns "light" if luminance >= 0.5, "dark" otherwise
 */
export function getColorTheme(r: number, g: number, b: number) {
  const luminance = getRelativeLuminance(r, g, b);
  return luminance >= 0.5 ? "light" : "dark";
}

function checkGradientLuminance(style: CSSStyleDeclaration): number | null {
  const bgImage = style.backgroundImage;
  if (!bgImage || bgImage === "none") return null;

  const gradientColors =
    bgImage.match(/(?:rgba?|oklch|hsl|#[0-9a-fA-F]{3,8}|color\(.+?\))\([^)]+\)/g) ||
    bgImage.match(/(rgb|rgba|oklch|hsl)\([^)]+\)|(?:#[0-9a-fA-F]{3,8})/g);

  if (!gradientColors?.length) return null;

  let totalR = 0;
  let totalG = 0;
  let totalB = 0;
  let count = 0;
  for (const color of gradientColors) {
    const rgba = parseCSSColor(color);
    if (rgba && rgba[3] > 0) {
      // ignore fully transparent steps
      totalR += rgba[0];
      totalG += rgba[1];
      totalB += rgba[2];
      count++;
    }
  }

  if (count > 0) {
    return getRelativeLuminance(totalR / count, totalG / count, totalB / count);
  }
  return null;
}

function checkSolidColorLuminance(style: CSSStyleDeclaration): number | null {
  const bg = style.backgroundColor;
  const rgba = parseCSSColor(bg);
  if (rgba && rgba[3] > 25) {
    // data[3] is alpha from 0-255. 0.1 opacity is ~25.
    return getRelativeLuminance(rgba[0], rgba[1], rgba[2]);
  }
  return null;
}

/**
 * Detect the theme of a single viewport point by inspecting stacked elements.
 * Returns the luminance of the first opaque background found (solid or gradient).
 *
 * @param x X coordinate in viewport
 * @param y Y coordinate in viewport
 * @param ignoreSelectors Optional array of CSS selectors to ignore during detection
 * @returns luminance value (0–1), or `null` if no opaque background is found
 */
function samplePointLuminance(x: number, y: number, ignoreSelectors?: string[]): number | null {
  const elements = document.elementsFromPoint(x, y);
  const defaultIgnores = ['[data-slot^="scroll-area"]'];
  const allIgnores = ignoreSelectors ? [...defaultIgnores, ...ignoreSelectors] : defaultIgnores;

  for (const el of elements) {
    if (!(el instanceof HTMLElement)) continue;
    if (allIgnores.some((selector) => el.matches(selector))) continue;

    const style = getComputedStyle(el);

    const gradientLuminance = checkGradientLuminance(style);
    if (gradientLuminance !== null) return gradientLuminance;

    const solidLuminance = checkSolidColorLuminance(style);
    if (solidLuminance !== null) return solidLuminance;
  }

  return null;
}

/**
 * Detect theme at a viewport point by analyzing stacked elements.
 * Uses `document.elementsFromPoint` to inspect all elements at a given
 * coordinate and checks their backgrounds (solid colors + gradients).
 *
 * @param x X coordinate in viewport
 * @param y Y coordinate in viewport
 * @param ignoreSelectors Optional array of CSS selectors to ignore
 * @returns "light" or "dark"
 */
export function detectPointTheme(
  x: number,
  y: number,
  ignoreSelectors?: string[],
): "light" | "dark" {
  const luminance = samplePointLuminance(x, y, ignoreSelectors);
  return luminance !== null && luminance >= 0.5 ? "light" : "dark";
}

/**
 * Detect the theme of a viewport area by sampling a grid of points.
 * Uses `document.elementsFromPoint` at each sample to inspect stacked
 * element backgrounds (solid colors + gradients) and averages the results.
 *
 * @param x X coordinate of area center
 * @param y Y coordinate of area center
 * @param width Width of the area to sample (default 50)
 * @param height Height of the area to sample (default 50)
 * @param ignoreSelectors Optional array of CSS selectors to ignore
 * @returns "light" or "dark"
 */
export function detectAreaTheme(
  x: number,
  y: number,
  width: number = 50,
  height: number = 50,
  ignoreSelectors?: string[],
): "light" | "dark" {
  const steps = 3; // 3×3 grid = 9 sample points
  const left = Math.max(0, x - width / 2);
  const top = Math.max(0, y - height / 2);
  const right = Math.min(window.innerWidth, x + width / 2);
  const bottom = Math.min(window.innerHeight, y + height / 2);

  let totalLuminance = 0;
  let sampleCount = 0;

  for (let row = 0; row < steps; row++) {
    for (let col = 0; col < steps; col++) {
      const sampleX = left + ((right - left) * (col + 0.5)) / steps;
      const sampleY = top + ((bottom - top) * (row + 0.5)) / steps;

      const luminance = samplePointLuminance(sampleX, sampleY, ignoreSelectors);
      if (luminance !== null) {
        totalLuminance += luminance;
        sampleCount++;
      }
    }
  }
  const avgLuminance = sampleCount > 0 ? totalLuminance / sampleCount : 0;
  return avgLuminance >= 0.5 ? "light" : "dark";
}
