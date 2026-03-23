import { ScrollArea as ScrollAreaPrimitive } from "@base-ui/react/scroll-area";
import { createId } from "@paralleldrive/cuid2";
import { useDebouncedCallback } from "@tanstack/react-pacer";
import { type Ref, useCallback, useEffect, useRef, useState } from "react";
import { cn, detectAreaTheme } from "#/lib/utils";

type ScrollBarOrientation = NonNullable<ScrollAreaPrimitive.Scrollbar.Props["orientation"]>;

type ScrollAreaProps = ScrollAreaPrimitive.Root.Props & {
  /** Orientations of scrollbars to render. Defaults to vertical-only. */
  scrollbars?: ScrollBarOrientation[];
  /** Optional ref forwarded to the internal viewport element. */
  viewportRef?: Ref<HTMLElement>;
};

function ScrollArea({
  className,
  children,
  scrollbars,
  viewportRef: viewportPropRef,
  ...props
}: ScrollAreaProps) {
  const viewportRef = useRef<HTMLElement>(null);
  const setViewportRef = useCallback(
    (node: HTMLElement | null) => {
      viewportRef.current = node;

      if (!viewportPropRef) return;

      if (typeof viewportPropRef === "function") {
        viewportPropRef(node);
        return;
      }

      viewportPropRef.current = node;
    },
    [viewportPropRef],
  );
  const [backgroundTheme, setBackgroundTheme] = useState<"light" | "dark">("dark");
  const scrollbarOrientations: ScrollBarOrientation[] = scrollbars?.length
    ? scrollbars
    : ["vertical"];
  const showCorner =
    scrollbarOrientations.includes("vertical") && scrollbarOrientations.includes("horizontal");

  /** Detect the theme behind the scrollbar thumb and update state. */
  const detectTheme = useCallback(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const root = viewport.closest('[data-slot="scroll-area"]') as HTMLElement | null;
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

  /** Debounced: re-detect theme after scrolling settles. */
  const scheduleThemeDetect = useDebouncedCallback(detectTheme, { wait: 100 });

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const handleScroll = () => {
      scheduleThemeDetect();
    };

    viewport.addEventListener("scroll", handleScroll);
    return () => viewport.removeEventListener("scroll", handleScroll);
  }, [scheduleThemeDetect]);

  // Detect theme initially and whenever scrollbar composition changes
  useEffect(() => {
    const id = requestAnimationFrame(detectTheme);
    return () => cancelAnimationFrame(id);
  }, [detectTheme]);

  return (
    <ScrollAreaPrimitive.Root
      data-slot="scroll-area"
      className={cn("relative", className)}
      data-background-theme={backgroundTheme}
      {...props}
    >
      <ScrollAreaPrimitive.Viewport
        ref={setViewportRef}
        data-slot="scroll-area-viewport"
        className="size-full rounded-[inherit] outline-none transition-all focus-visible:outline focus-visible:ring-3 focus-visible:ring-ring/50"
      >
        {children}
      </ScrollAreaPrimitive.Viewport>
      {Array.from(new Set(scrollbarOrientations))
        .map((orientation) => ({ orientation, id: createId() }))
        .map(({ orientation, id }) => (
          <ScrollBar key={id} orientation={orientation} backgroundTheme={backgroundTheme} />
        ))}
      {showCorner && <ScrollAreaPrimitive.Corner />}
    </ScrollAreaPrimitive.Root>
  );
}

function ScrollBar({
  className,
  orientation = "vertical",
  backgroundTheme = "dark",
  ...props
}: ScrollAreaPrimitive.Scrollbar.Props & {
  backgroundTheme?: "light" | "dark";
}) {
  return (
    <ScrollAreaPrimitive.Scrollbar
      data-slot="scroll-area-scrollbar"
      data-orientation={orientation}
      data-background-theme={backgroundTheme}
      orientation={orientation}
      className={cn(
        "pointer-events-none flex touch-none select-none p-px opacity-0 transition-opacity duration-300 data-hovering:pointer-events-auto data-scrolling:pointer-events-auto data-[orientation=horizontal]:h-2 data-[orientation=vertical]:h-full data-[orientation=vertical]:w-2 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:border-t data-[orientation=horizontal]:border-t-transparent data-[orientation=vertical]:border-l data-[orientation=vertical]:border-l-transparent data-hovering:opacity-100 data-scrolling:opacity-100 data-scrolling:duration-0",
        className,
      )}
      {...props}
    >
      <ScrollAreaPrimitive.Thumb
        data-slot="scroll-area-thumb"
        className={cn(
          "relative z-99 grow rounded-full",
          backgroundTheme === "light"
            ? "bg-black/50 hover:bg-black/70"
            : "bg-white/50 hover:bg-white/70",
        )}
      />
    </ScrollAreaPrimitive.Scrollbar>
  );
}

export type { ScrollAreaProps, ScrollBarOrientation };
export { ScrollArea, ScrollBar };
