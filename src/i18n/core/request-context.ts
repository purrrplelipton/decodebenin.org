// This file is safe to import on both client and server.
// It uses node:async_hooks only on the server.

import type { AsyncLocalStorage } from "node:async_hooks";

let clientLocale = "en";

interface CustomGlobal {
  __TSR_LOCALE_STORAGE__?: AsyncLocalStorage<string>;
}

const customGlobal = globalThis as unknown as CustomGlobal;

export async function setServerLocale<T>(locale: string, cb: () => T): Promise<T> {
  if (typeof window === "undefined") {
    try {
      // Use dynamic import for ESM compatibility and to avoid bundling on client
      const { AsyncLocalStorage } = await import("node:async_hooks");
      const storage = customGlobal.__TSR_LOCALE_STORAGE__ || new AsyncLocalStorage<string>();
      customGlobal.__TSR_LOCALE_STORAGE__ = storage;
      return storage.run(locale, cb);
    } catch (err) {
      console.error("Failed to set server locale context:", err);
      return cb();
    }
  }
  clientLocale = locale;
  return cb();
}

export function getServerLocale(): string | undefined {
  if (typeof window === "undefined") {
    try {
      const storage = customGlobal.__TSR_LOCALE_STORAGE__;
      return storage?.getStore();
    } catch {
      return undefined;
    }
  }
  return clientLocale;
}
