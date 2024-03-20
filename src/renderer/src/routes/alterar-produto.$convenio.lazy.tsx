import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/alterar-produto/$convenio')({
  component: AlterarProduto
})

function AlterarProduto(): JSX.Element {
  const { convenio } = Route.useParams()

  return (
    <div>
      <h1>Alterar Produto - {convenio}</h1>
    </div>
  )
}
