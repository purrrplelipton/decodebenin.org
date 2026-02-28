import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  clientPrefix: "VITE_",
  server: {},
  client: {
    VITE_SLACK_INVITE_URL: z.url(),
    VITE_NESTUGE_URL: z.url(),
    VITE_TWITTER_URL: z.url(),
    VITE_LINKEDIN_URL: z.url(),
    VITE_INSTAGRAM_URL: z.url(),
  },
  runtimeEnv: import.meta.env,
  emptyStringAsUndefined: true,
});
