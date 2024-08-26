import Prompt from '#/UI/Prompt'

export default function Chat() {
  return (
    <section className="flex flex-col gap-16 xl:gap-12 sm:gap-3">
      <Prompt text="wait.." />

      {/* <Prompt type="user" text="You are head north." /> */}
    </section>
  )
}
