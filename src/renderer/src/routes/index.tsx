import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@renderer/components/shadcn/button'
import { Input } from '@renderer/components/shadcn/input'

export const Route = createFileRoute('/')({
  component: Index
})

function Index(): JSX.Element {
  return (
    <div>
      <h1>Welcome Home!</h1>
      <Button>Venci!</Button>
      <Input />
    </div>
  )
}
