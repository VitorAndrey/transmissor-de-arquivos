import { z } from 'zod'
import { Link, createFileRoute } from '@tanstack/react-router'

const productSearchSchema = z.object({
  pageIndex: z.number().catch(1)
})

export const Route = createFileRoute('/gerenciar-produtos')({
  component: GerenciarProdutos,
  validateSearch: productSearchSchema
})

function GerenciarProdutos(): JSX.Element {
  const { pageIndex } = Route.useSearch()

  return (
    <div>
      <h1>Gerenciar Produtos - {pageIndex}</h1>

      <Link
        to="/alterar-produto"
        search={{
          convenio: '999999'
        }}
      >
        Alterar
      </Link>
    </div>
  )
}
