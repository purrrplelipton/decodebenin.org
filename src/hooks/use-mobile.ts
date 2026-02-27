import { useSyncExternalStore } from "react";

const MOBILE_BREAKPOINT = 1024;

function subscribe(callback: () => void) {
  const mql = globalThis?.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

function getSnapshot() {
  return (Number(globalThis?.innerWidth) || 0) < MOBILE_BREAKPOINT;
}

function getServerSnapshot() {
  return false;
}

export function useIsMobile() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
