/* eslint-env node */
import { defineConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import envCompatible from 'vite-plugin-env-compatible';
import { createHtmlPlugin } from 'vite-plugin-html';
import { viteCommonjs } from '@originjs/vite-plugin-commonjs';
import { viteSingleFile } from "vite-plugin-singlefile"

const production = process.env.NODE_ENV === "production";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: /^~/,
        replacement: '',
      },
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src'),
      },
    ],
    esbuild: {
      output: {
        exports: 'named',
      },
    },
    extensions: [
      '.mjs',
      '.js',
      '.ts',
      '.jsx',
      '.tsx',
      '.json',
      '.vue',
    ],
  },
  plugins: [
    viteCommonjs(),
    envCompatible(),
    vue(),
    vueJsx(),
    viteSingleFile({
      removeViteModuleLoader: true,
    }),
    createHtmlPlugin({
      inject: {
        data: {
          title: 'vue3content-placeholders',
        },
      },
    }),
  ],
  build: {
    cssMinify: false,
    minify: production,
    emptyOutDir: false,
    commonjsOptions: {
      sourceMap: !production,
      strictRequires: false,
    },
    target: 'modules',
    lib: {
      entry:'./src/index.js',
      name: 'Vue3ContentPlaceholders',
    },
    sourcemap: false,
    rollupOptions: {
      external: [
        'vue3',
      ],
    },
  },
})
