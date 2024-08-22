import {ReactMatrixAnimation} from 'react-matrix-animation'

import Container from '#/Global/Container'
import Window from '##/hello/Window'

export default function HelloPage() {
  return (
    <Container className="grid h-screen place-items-center">
      <Window />

      <div className="absolute inset-0 flex items-center justify-center w-screen h-screen m-auto -z-20">
        <ReactMatrixAnimation tileSize={20} fadeFactor={0.05} fontColor="#303030" />
      </div>
    </Container>
  )
}
