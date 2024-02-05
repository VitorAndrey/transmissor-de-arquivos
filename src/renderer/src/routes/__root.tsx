import Header from '@renderer/components/Header'
import Sidebar from '@renderer/components/Sidebar'
import { createRootRoute, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: () => (
    <main className="flex h-screen w-screen flex-col">
      <Header />

      <div className="flex flex-1">
        <div className="border-r p-4">
          <Sidebar />
        </div>
        <div className="flex-1 p-4">
          <Outlet />
        </div>
      </div>
    </main>
  )
})
