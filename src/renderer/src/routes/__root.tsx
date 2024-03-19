import { AppProvider } from '@renderer/components/app-provider'
import { RootLayout } from '@renderer/components/root-layout'
import { createRootRoute, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: () => (
    <AppProvider>
      <RootLayout>
        <Outlet />
      </RootLayout>
    </AppProvider>
  )
})
