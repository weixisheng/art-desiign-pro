import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'url'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,
    environment: 'jsdom'
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@views': resolvePath('src/views'),
      '@imgs': resolvePath('src/assets/img'),
      '@icons': resolvePath('src/assets/icons'),
      '@utils': resolvePath('src/utils'),
      '@stores': resolvePath('src/store'),
      '@plugins': resolvePath('src/plugins'),
      '@styles': resolvePath('src/assets/styles')
    }
  }
})

function resolvePath(paths: string) {
  return path.resolve(__dirname, paths)
}
