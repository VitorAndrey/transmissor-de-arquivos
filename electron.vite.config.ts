import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import react from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-vite-plugin'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src'),

        // For shadcnui
        'src/renderer/src/components': resolve('src/renderer/src/components'),
        'src/renderer/src/utils/shadcn': resolve('src/renderer/src/utils/shadcn'),
        'src/renderer/src/components/shadcn': resolve('src/renderer/src/components/shadcn')
      }
    },
    plugins: [
      react(),
      TanStackRouterVite({
        routesDirectory: resolve(__dirname, 'src/renderer/src/routes')
      })
    ]
  }
})
