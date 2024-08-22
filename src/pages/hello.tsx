import {ReactMatrixAnimation} from 'react-matrix-animation'
import {screenHeight} from '@/lib/constants'

import Container from '#/Global/Container'
import Window from '##/hello/Window'

export default function HelloPage() {
  return (
    <Container className={`grid place-items-center ${screenHeight}`}>
      <Window />

      <div className="absolute inset-0 flex items-center justify-center w-screen h-full m-auto -z-20">
        <ReactMatrixAnimation tileSize={20} fadeFactor={0.05} fontColor="#303030" />
      </div>
    </Container>
  )
}
