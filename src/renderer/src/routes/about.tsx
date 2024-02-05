import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: About
})

function About(): JSX.Element {
  return (
    <div>
      <h1>Hello from About!</h1>
    </div>
  )
}
