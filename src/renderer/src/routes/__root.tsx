import { Header } from '@renderer/components/header'
import { Sidebar } from '@renderer/components/sidebar'
import { createRootRoute, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: () => (
    <main className="flex h-screen w-screen flex-col">
      <Header />

      <div className="flex flex-1">
        <div className="border-r">
          <Sidebar />
        </div>
        <div className="flex-1 px-10 py-6">
          <Outlet />
        </div>
      </div>
    </main>
  )
})
