import { useCallback, useEffect, useRef, useState } from "react";

interface UseCountUpOptions {
  end: number;
  duration?: number;
  start?: number;
  suffix?: string;
  prefix?: string;
  enabled?: boolean;
}

export function useCountUp({
  end,
  duration = 2000,
  start = 0,
  suffix = "",
  prefix = "",
  enabled = true,
}: UseCountUpOptions) {
  const [count, setCount] = useState(start);
  const frameRef = useRef<number>(0);
  const startTimeRef = useRef<number>(0);

  const easeOutCubic = useCallback((t: number): number => {
    return 1 - (1 - t) ** 3;
  }, []);

  useEffect(() => {
    if (!enabled) {
      setCount(start);
      return;
    }

    startTimeRef.current = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutCubic(progress);
      const currentCount = Math.round(start + (end - start) * easedProgress);

      setCount(currentCount);

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [end, duration, start, enabled, easeOutCubic]);

  const display = `${prefix}${count}${suffix}`;

  return { count, display };
}
