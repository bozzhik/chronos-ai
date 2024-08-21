import Container from '#/Global/Container'
import Prompt from '#/UI/Prompt'

export default function PlayPage() {
  return (
    <Container className="my-10 space-y-2">
      <Prompt text="You are head north." />
      <Prompt type="user" text="You are head north." />
    </Container>
  )
}
