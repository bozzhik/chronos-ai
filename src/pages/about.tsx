import {ReactMatrixAnimation} from 'react-matrix-animation'
import {appPaths} from '@/lib/constants'

import Container from '#/Global/Container'
import Button from '#/UI/Button'
import Prompt from '#/UI/Prompt'
import Typography from '#/UI/Typography'
import Fragment from '##/about/Fragment'

import {ArrowLeft} from 'lucide-react'

type BlockNames = 'hero' | 'why'
type TokenBlocks = {
  [K in BlockNames]: Block
}

type Block = {
  heading: string
  text: string
}

const BlockComponent: React.FC<{token: Block}> = ({token}) => {
  return (
    <article className="space-y-2">
      <Prompt text={token.heading} />
      <Typography className="text-white font-normal tracking-[-0.015em]" text={token.text} />
    </article>
  )
}

const aboutData: TokenBlocks = {
  hero: {
    heading: 'Первый блок',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dignissimos voluptatem ipsa! Praesentium perspiciatis temporibus aliquid ad ut commodi quisquam laboriosam illo, numquam itaque eaque, ratione consequuntur hic facilis maxime.',
  },
  why: {
    heading: 'Второй блок',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dignissimos voluptatem ipsa! Praesentium perspiciatis temporibus aliquid ad ut commodi quisquam laboriosam illo, numquam itaque eaque, ratione consequuntur hic facilis maxime.',
  },
}

export default function AboutPage() {
  return (
    <Container className="max-w-2xl xl:max-w-xl mb-28 xl:mb-20 sm:mb-10">
      <section className="my-10 space-y-8">
        <div className="space-y-4">
          <Button to={appPaths.hello} variant="secondary" className="w-full">
            <ArrowLeft />
          </Button>

          <Fragment />
        </div>

        <section className="flex flex-col gap-8 mt-4">
          {Object.values(aboutData).map((block, index) => (
            <BlockComponent key={index} token={block} />
          ))}
        </section>
      </section>

      <div className="fixed inset-0 flex items-center justify-center w-screen h-full m-auto -z-20 opacity-30">
        <div className="absolute inset-0 backdrop-blur-[6px] s-full"></div>
        <ReactMatrixAnimation fontColor="#FFFFFF" />
      </div>
    </Container>
  )
}
