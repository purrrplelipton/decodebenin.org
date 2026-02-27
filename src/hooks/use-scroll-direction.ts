import { useEffect, useRef, useState } from "react";
import { useScrollContainerRef } from "#/context/scroll-container";

export function useScrollDirection() {
  const containerRef = useScrollContainerRef();
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");
  const [isAtTop, setIsAtTop] = useState(true);

  // Keep lastScrollY in a ref so it doesn't cause effect re-runs
  const lastScrollY = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    lastScrollY.current = container.scrollTop;

    const updateScrollDirection = () => {
      const scrollY = container.scrollTop;
      const diff = scrollY - lastScrollY.current;

      if (Math.abs(diff) > 10) {
        const direction = diff > 0 ? "down" : "up";
        setScrollDirection((prev) => (prev !== direction ? direction : prev));
        lastScrollY.current = scrollY > 0 ? scrollY : 0;
      }
      setIsAtTop(scrollY < 10);
    };

    container.addEventListener("scroll", updateScrollDirection, {
      passive: true,
    });
    return () => {
      container.removeEventListener("scroll", updateScrollDirection);
    };
  }, [containerRef]);

  return {
    isVisible: scrollDirection === "up",
    isAtTop,
  };
}
