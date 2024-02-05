import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/about')({
  component: About
})

function About(): JSX.Element {
  return (
    <div className="p-4">
      <h1>Hello from About!</h1>
    </div>
  )
}
