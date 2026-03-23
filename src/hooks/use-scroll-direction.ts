import { type RefObject, useEffect, useRef, useState } from "react";

type UseScrollDirectionOptions = {
  /**
   * Ref to the scrollable container element.
   * If not provided, falls back to `window` scroll events.
   */
  containerRef?: RefObject<HTMLElement | null>;
  /** Minimum scroll delta (in px) before a direction change is registered. @default 10 */
  threshold?: number;
  /** Pixel value below which the user is considered "at the top". @default 10 */
  topThreshold?: number;
};

export function useScrollDirection({
  containerRef,
  threshold = 10,
  topThreshold = 10,
}: UseScrollDirectionOptions = {}) {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");
  const [isAtTop, setIsAtTop] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const container = containerRef?.current;

    // Resolve the actual scrollable target
    const target = container || window;

    const getScrollY = () => (container ? container.scrollTop : window.scrollY);

    lastScrollY.current = getScrollY();

    const onScroll = () => {
      const scrollY = getScrollY();
      const diff = scrollY - lastScrollY.current;

      if (Math.abs(diff) > threshold) {
        const direction = diff > 0 ? "down" : "up";
        setScrollDirection((prev) => (prev !== direction ? direction : prev));
        lastScrollY.current = scrollY > 0 ? scrollY : 0;
      }

      setIsAtTop(scrollY < topThreshold);
    };

    target.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      target.removeEventListener("scroll", onScroll);
    };
  }, [containerRef, threshold, topThreshold]);

  return {
    scrollDirection,
    isVisible: scrollDirection === "up",
    isAtTop,
  };
}
