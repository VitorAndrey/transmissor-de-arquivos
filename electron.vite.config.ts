import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import react from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-vite-plugin'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()],
    resolve: {
      alias: {
        '@main': resolve('src/main/src'),
        '@database': resolve('src/database')
      }
    }
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src'),

        // For Shadcnui configuration
        'src/renderer/src/components': resolve('src/renderer/src/components'),
        'src/renderer/src/utils/shadcn': resolve('src/renderer/src/utils/shadcn'),
        'src/renderer/src/components/shadcn': resolve('src/renderer/src/components/shadcn')
      }
    },
    plugins: [
      react(),
      TanStackRouterVite({
        routesDirectory: resolve(__dirname, 'src/renderer/src/routes'),
        generatedRouteTree: resolve('src/renderer/src/route-tree.gen.ts')
      })
    ]
  }
})
