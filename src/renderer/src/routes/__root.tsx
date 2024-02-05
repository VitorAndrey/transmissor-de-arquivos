import Header from '@renderer/components/Header'
import Sidebar from '@renderer/components/Sidebar'
import { createRootRoute, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: () => (
    <>
      <Header />

      <div className="flex">
        <Sidebar />
        <Outlet />
      </div>
    </>
  )
})
