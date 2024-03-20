import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/gerenciar-produtos/$page')({
  component: GerenciarProdutos
})

function GerenciarProdutos(): JSX.Element {
  const { page } = Route.useParams()

  return (
    <div>
      <h1>Gerenciar Produtos - {page}</h1>
    </div>
  )
}
