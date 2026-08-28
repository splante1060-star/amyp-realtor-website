import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import * as prerenderModule from "@prerenderer/rollup-plugin";

type PrerenderOptions = {
  routes: string[];
  renderer: string;
  rendererOptions: {
    renderAfterDocumentEvent: string;
    maxConcurrentRoutes: number;
  };
  postProcess: (renderedRoute: PrerenderedRoute) => void;
};

type PrerenderedRoute = {
  route: string;
  outputPath?: string;
};

const prerender = prerenderModule.default as unknown as (
  options: PrerenderOptions,
) => Plugin;

const routes = [
  "/",
  "/buy-or-sell",
  "/divorce-real-estate",
  "/prep-to-sell",
  "/estate-sales-downsizing",
  "/airbnb-investment",
];

export default defineConfig({
  plugins: [
    react(),

    prerender({
      routes,

      renderer: "@prerenderer/renderer-puppeteer",

      rendererOptions: {
        renderAfterDocumentEvent: "prerender-ready",
        maxConcurrentRoutes: 2,
      },

      postProcess(renderedRoute) {
        if (renderedRoute.route === "/") {
          renderedRoute.outputPath = "home/index.html";
        }
      },
    }),
  ],
});
