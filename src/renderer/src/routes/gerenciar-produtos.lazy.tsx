import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/gerenciar-produtos')({
  component: GerenciarProdutos
})

function GerenciarProdutos(): JSX.Element {
  return (
    <div>
      <h1>Gerenciar Produtos</h1>
    </div>
  )
}
