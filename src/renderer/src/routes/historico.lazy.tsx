import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/historico')({
  component: Historico
})

function Historico(): JSX.Element {
  return (
    <div>
      <h1>Historico</h1>
    </div>
  )
}
