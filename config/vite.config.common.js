import { mergeConfig, defineConfig } from 'vitest/config'
import viteConfig from './vite.config.base'

const outputFile = 'vue3-content-placeholders'

// https://vitejs.dev/config/
export default mergeConfig(
  viteConfig,
  defineConfig({
    build: {
      lib: {
        formats: ['es'],
      },
      rollupOptions: {
        output: {
          entryFileNames: outputFile + '.common.js',
          assetFileNames: outputFile + '.css',
        },
      },
    },
  }),
)
