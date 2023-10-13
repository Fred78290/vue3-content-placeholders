import { defineConfig } from "vite";
import { fileURLToPath, URL } from 'node:url'
import { terser } from "rollup-plugin-terser";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

const production = process.env.NODE_ENV === "production";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  build: {
    cssMinify: false,
    minify: production,
    lib: {
      // src/indext.ts is where we have exported the component(s)
      entry: fileURLToPath(new URL('./src/index.ts', import.meta.url)),
      name: "Vue3ContentPlaceHolder",
      // the name of the output files when the build is run
      fileName: "vue3-content-placeholders",
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "./src/styles.scss";
          `,
        },
      },
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["vue"],
      plugins: [
        terser({
          compress: {
            defaults: false,
            drop_console: true,
          },
          mangle: {
            eval: true,
            module: true,
            toplevel: true,
            safari10: true,
            properties: false,
          },
          output: {
            comments: false,
            ecma: "2020",
          },
        }),
      ],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps

        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
