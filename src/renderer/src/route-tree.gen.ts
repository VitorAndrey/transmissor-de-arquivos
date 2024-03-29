// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as GerenciarProdutosImport } from './routes/gerenciar-produtos'
import { Route as AlterarProdutoImport } from './routes/alterar-produto'
import { Route as IndexImport } from './routes/index'

// Create Virtual Routes

const TransferenciaManualLazyImport = createFileRoute('/transferencia-manual')()
const HistoricoLazyImport = createFileRoute('/historico')()
const CadastrarProdutoLazyImport = createFileRoute('/cadastrar-produto')()

// Create/Update Routes

const TransferenciaManualLazyRoute = TransferenciaManualLazyImport.update({
  path: '/transferencia-manual',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/transferencia-manual.lazy').then((d) => d.Route),
)

const HistoricoLazyRoute = HistoricoLazyImport.update({
  path: '/historico',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/historico.lazy').then((d) => d.Route))

const CadastrarProdutoLazyRoute = CadastrarProdutoLazyImport.update({
  path: '/cadastrar-produto',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/cadastrar-produto.lazy').then((d) => d.Route),
)

const GerenciarProdutosRoute = GerenciarProdutosImport.update({
  path: '/gerenciar-produtos',
  getParentRoute: () => rootRoute,
} as any)

const AlterarProdutoRoute = AlterarProdutoImport.update({
  path: '/alterar-produto',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/alterar-produto': {
      preLoaderRoute: typeof AlterarProdutoImport
      parentRoute: typeof rootRoute
    }
    '/gerenciar-produtos': {
      preLoaderRoute: typeof GerenciarProdutosImport
      parentRoute: typeof rootRoute
    }
    '/cadastrar-produto': {
      preLoaderRoute: typeof CadastrarProdutoLazyImport
      parentRoute: typeof rootRoute
    }
    '/historico': {
      preLoaderRoute: typeof HistoricoLazyImport
      parentRoute: typeof rootRoute
    }
    '/transferencia-manual': {
      preLoaderRoute: typeof TransferenciaManualLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexRoute,
  AlterarProdutoRoute,
  GerenciarProdutosRoute,
  CadastrarProdutoLazyRoute,
  HistoricoLazyRoute,
  TransferenciaManualLazyRoute,
])
