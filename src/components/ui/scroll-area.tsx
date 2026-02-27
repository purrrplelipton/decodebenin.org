import { ScrollArea as ScrollAreaPrimitive } from "@base-ui/react/scroll-area";
import { useDebouncedCallback } from "@tanstack/react-pacer";
import type { RefObject } from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn, detectAreaTheme } from "#/lib/utils";

type ScrollAreaProps = ScrollAreaPrimitive.Root.Props & {
  /** Optional ref forwarded to the Viewport element (used for scroll listeners). */
  viewportRef?: RefObject<HTMLDivElement | null>;
  /** Show scrollbar by default (always visible). */
  showScrollbarByDefault?: boolean;
  /** Delay in ms before hiding scrollbar after scrolling stops. Defaults to 1000ms */
  hideScrollbarDelay?: number;
};

function ScrollArea({
  className,
  children,
  viewportRef,
  showScrollbarByDefault = false,
  hideScrollbarDelay = 1000,
  ...props
}: ScrollAreaProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [showScrollbar, setShowScrollbar] = useState(showScrollbarByDefault);
  const [backgroundTheme, setBackgroundTheme] = useState<"light" | "dark">("dark");
  const isHoveringRef = useRef(false);
  const isScrollingRef = useRef(false);

  /** Detect the theme behind the scrollbar thumb and update state. */
  const detectTheme = useCallback(() => {
    const root = rootRef.current;
    if (!root) return;

    const scrollbar = root.querySelector<HTMLElement>('[data-slot="scroll-area-scrollbar"]');
    const thumb = root.querySelector<HTMLElement>('[data-slot="scroll-area-thumb"]');
    if (!(scrollbar && thumb)) return;

    const thumbRect = thumb.getBoundingClientRect();
    if (thumbRect.width === 0 || thumbRect.height === 0) return;

    // We can sample directly beneath the thumb since `utils.ts` explicitly
    // ignores any elements with `data-slot="scroll-area-*"`
    const sampleW = thumbRect.width;
    const sampleH = thumbRect.height;
    const sampleX = thumbRect.left + sampleW / 2;
    const sampleY = thumbRect.top + sampleH / 2;

    const detected = detectAreaTheme(sampleX, sampleY, sampleW, sampleH, [
      '[data-slot^="scroll-area"]',
    ]);
    setBackgroundTheme((prev) => (prev !== detected ? detected : prev));
  }, []);

  /** Debounced: hide the scrollbar after inactivity. */
  const scheduleHide = useDebouncedCallback(
    () => {
      isScrollingRef.current = false;
      if (!isHoveringRef.current) {
        setShowScrollbar(false);
      }
    },
    { wait: hideScrollbarDelay },
  );

  /** Debounced: re-detect theme after scrolling settles. */
  const scheduleThemeDetect = useDebouncedCallback(detectTheme, { wait: 150 });

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const viewport = root.querySelector('[data-slot="scroll-area-viewport"]');
    if (!viewport) return;

    const handleMouseEnter = () => {
      isHoveringRef.current = true;
      setShowScrollbar(true);
    };

    const handleMouseLeave = () => {
      isHoveringRef.current = false;
      if (!isScrollingRef.current) {
        scheduleHide();
      }
    };

    const handleScroll = () => {
      isScrollingRef.current = true;
      setShowScrollbar(true);
      scheduleHide();
      scheduleThemeDetect();
    };

    root.addEventListener("mouseenter", handleMouseEnter);
    root.addEventListener("mouseleave", handleMouseLeave);
    viewport.addEventListener("scroll", handleScroll);

    return () => {
      root.removeEventListener("mouseenter", handleMouseEnter);
      root.removeEventListener("mouseleave", handleMouseLeave);
      viewport.removeEventListener("scroll", handleScroll);
    };
  }, [scheduleHide, scheduleThemeDetect]);

  // Detect theme every time the scrollbar becomes visible
  useEffect(() => {
    if (showScrollbar) {
      // Wait one frame for the thumb to mount / paint
      requestAnimationFrame(detectTheme);
    }
  }, [showScrollbar, detectTheme]);

  return (
    <ScrollAreaPrimitive.Root
      ref={rootRef}
      data-slot="scroll-area"
      className={cn("relative", className)}
      data-background-theme={backgroundTheme}
      {...props}
    >
      <ScrollAreaPrimitive.Viewport
        data-slot="scroll-area-viewport"
        ref={viewportRef}
        className="size-full rounded-[inherit] outline-none transition-all focus-visible:outline focus-visible:ring-3 focus-visible:ring-ring/50"
      >
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar hidden={!showScrollbar} backgroundTheme={backgroundTheme} />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  );
}

function ScrollBar({
  className,
  orientation = "vertical",
  backgroundTheme = "dark",
  hidden,
  ...props
}: ScrollAreaPrimitive.Scrollbar.Props & {
  backgroundTheme?: "light" | "dark";
  hidden?: boolean;
}) {
  return (
    <ScrollAreaPrimitive.Scrollbar
      data-slot="scroll-area-scrollbar"
      data-orientation={orientation}
      data-background-theme={backgroundTheme}
      orientation={orientation}
      className={cn(
        "flex touch-none select-none p-px transition-all duration-300 data-[orientation=horizontal]:h-2 data-[orientation=vertical]:h-full data-[orientation=vertical]:w-2 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:border-t data-[orientation=horizontal]:border-t-transparent data-[orientation=vertical]:border-l data-[orientation=vertical]:border-l-transparent",
        { "opacity-0": hidden },
        className,
      )}
      {...props}
    >
      <ScrollAreaPrimitive.Thumb
        data-slot="scroll-area-thumb"
        className={cn(
          "relative grow rounded-full transition-colors",
          backgroundTheme === "light"
            ? "bg-black/50 hover:bg-black/70"
            : "bg-white/50 hover:bg-white/70",
        )}
      />
    </ScrollAreaPrimitive.Scrollbar>
  );
}

export { ScrollArea, ScrollBar };
