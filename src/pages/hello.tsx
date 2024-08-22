import {ReactMatrixAnimation} from 'react-matrix-animation'
import Container from '#/Global/Container'

export default function HelloPage() {
  return (
    <Container className="grid h-screen place-items-center">
      <div className="p-5 bg-black/15 backdrop-blur-md">
        <h1 className="text-5xl uppercase font-advent">You are head north.</h1>
        <h2 className="font-sans text-2xl uppercase">Some text.</h2>
      </div>

      <div className="absolute inset-0 flex items-center justify-center w-screen h-screen m-auto -z-20">
        <ReactMatrixAnimation tileSize={20} fadeFactor={0.07} fontColor="#233dcb" />
      </div>
    </Container>
  )
}
