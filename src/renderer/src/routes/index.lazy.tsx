import { createLazyFileRoute } from '@tanstack/react-router'
import { Button } from '@renderer/components/shadcn/button'
import { Input } from '@renderer/components/shadcn/input'

export const Route = createLazyFileRoute('/')({
  component: Index
})

function Index(): JSX.Element {
  return (
    <div className="space-y-2 p-4">
      <h1>Welcome Home!</h1>
      <Button>Venci!</Button>
      <Input className="w-80" />
    </div>
  )
}
