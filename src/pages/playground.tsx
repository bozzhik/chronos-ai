import Container from '#/Global/Container'
import Prompt from '#/UI/Prompt'

export default function PlayPage() {
  return (
    <Container className="my-48 xl:my-36 sm:my-10">
      <section className="flex flex-col gap-16 xl:gap-12 sm:gap-3">
        <Prompt text="You are head north." />
        <Prompt type="user" text="You are head north." />
      </section>
    </Container>
  )
}
