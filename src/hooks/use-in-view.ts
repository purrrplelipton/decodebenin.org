import { useCallback, useEffect, useRef, useState } from "react";

interface UseInViewOptions {
  threshold?: number | number[];
  rootMargin?: string;
  triggerOnce?: boolean;
  root?: Element | null;
}

export function useInView<T extends Element>(options: UseInViewOptions = {}) {
  const { threshold = 0.1, rootMargin = "0px", triggerOnce = true, root = null } = options;
  const [isInView, setIsInView] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const ref = useRef<T>(null);

  const callbackRef = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsInView(true);
        if (triggerOnce) {
          setHasTriggered(true);
        }
      } else if (!triggerOnce) {
        setIsInView(false);
      }
    },
    [triggerOnce],
  );

  useEffect(() => {
    const node = ref.current;
    if (!node || (triggerOnce && hasTriggered)) return;

    const observer = new IntersectionObserver(callbackRef, {
      threshold,
      rootMargin,
      root,
    });

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [callbackRef, threshold, rootMargin, root, triggerOnce, hasTriggered]);

  return { ref, isInView: triggerOnce ? isInView || hasTriggered : isInView };
}
