export const EVENT_START_ISO = "2026-05-23T08:00:00+01:00";
export const EVENT_LAUNCH_ISO = "2026-05-23T09:00:00+01:00";
export const EVENT_END_ISO = "2026-05-23T14:50:00+01:00";

export const EVENT_START_MS = new Date(EVENT_START_ISO).getTime();
export const EVENT_LAUNCH_MS = new Date(EVENT_LAUNCH_ISO).getTime();
export const EVENT_END_MS = new Date(EVENT_END_ISO).getTime();
export const EVENT_ARCHIVE_MS = EVENT_END_MS + 7 * 24 * 60 * 60 * 1000;

export type EventLifecycle = "before" | "live" | "ended" | "archived";

export function getEventLifecycle(now = Date.now()): EventLifecycle {
  if (now < EVENT_START_MS) return "before";
  if (now <= EVENT_END_MS) return "live";
  if (now <= EVENT_ARCHIVE_MS) return "ended";

  return "archived";
}
