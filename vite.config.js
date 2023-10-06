import { mergeConfig } from 'vitest/config'
import viteConfig from './config/vite.config.base'

// https://vitejs.dev/config/
export default mergeConfig(viteConfig)
