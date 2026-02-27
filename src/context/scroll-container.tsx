import { createContext, type RefObject, useContext, useRef } from "react";

const ScrollContainerContext = createContext<RefObject<HTMLDivElement | null> | null>(null);

export function ScrollContainerProvider({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);
  return <ScrollContainerContext.Provider value={ref}>{children}</ScrollContainerContext.Provider>;
}

/** Returns the RefObject for the scroll viewport element. */
export function useScrollContainerRef() {
  const ctx = useContext(ScrollContainerContext);
  if (!ctx) {
    throw new Error("useScrollContainerRef must be used inside ScrollContainerProvider");
  }
  return ctx;
}

/** Returns the scroll container element (or null if not yet mounted). */
export function useScrollContainer() {
  return useScrollContainerRef().current;
}
