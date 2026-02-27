import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

const config = defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    base: env.BASE_URL || "/",
    server: {
      port: Number.parseInt(env.PORT || "5173", 10),
    },
    preview: {
      port: Number.parseInt(env.PORT || "5174", 10),
      allowedHosts: ["zionmart.netlify.app"],
    },
    plugins: [
      tsconfigPaths({ projects: ["./tsconfig.json"] }),
      tailwindcss(),
      tanstackStart({
        srcDirectory: "src",
        spa: {
          enabled: true,
          maskPath: "/",
          prerender: {
            enabled: true,
            outputPath: "/index.html",
            autoSubfolderIndex: true,
            crawlLinks: true,
            retryCount: 3,
            retryDelay: 1000,
            onSuccess() {},
          },
        },
      }),
      viteReact({
        babel: {
          plugins: ["babel-plugin-react-compiler"],
        },
      }),
      svgr(),
    ],
    ssr: {
      noExternal: ["@iconify-icon/react", "react-country-flag"],
    },
    esbuild: {
      drop: env.NODE_ENV === "production" ? ["console", "debugger"] : [],
    },
  };
});

export default config;
