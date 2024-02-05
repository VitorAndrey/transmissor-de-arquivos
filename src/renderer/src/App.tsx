import { RouterProvider, createHashHistory, createRouter } from '@tanstack/react-router'
import { routeTree } from '../../routeTree.gen'

const hashHistory = createHashHistory()

const router = createRouter({ routeTree, history: hashHistory })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

export default function App(): JSX.Element {
  return <RouterProvider router={router} />
}
