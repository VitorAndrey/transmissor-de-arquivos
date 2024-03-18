import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/transferencia-manual')({
  component: TransferenciaManual
})

function TransferenciaManual(): JSX.Element {
  return (
    <div>
      <h1>Transferencia Manual</h1>
    </div>
  )
}
