import { mergeConfig, defineConfig } from 'vitest/config'
import viteConfig from './vite.config.base'

const outputFile = 'vue3-content-placeholders'

// https://vitejs.dev/config/
export default mergeConfig(
  viteConfig,
  defineConfig({
    build: {
      lib: {
        formats: ['umd'],
      },
      rollupOptions: {
        output: {
          entryFileNames: outputFile + '.browser.js',
          assetFileNames: outputFile + '.css',
        },
      },
    },
  }),
)
