import Container from '#/Global/Container'
import Matrix from '##/hello/Matrix'

export default function HelloPage() {
  return (
    <Container className="flex flex-col gap-3 m-5">
      <h1 className="text-5xl uppercase font-advent">You are head north.</h1>
      <h2 className="font-sans text-2xl uppercase">Some text.</h2>

      <Matrix />
    </Container>
  )
}
