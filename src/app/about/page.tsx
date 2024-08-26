import {ReactMatrixAnimation} from 'react-matrix-animation'

import Container from '#/Global/Container'
import Button from '#/UI/Button'
import Prompt from '#/UI/Prompt'
import Typography from '#/UI/Typography'
import Fragment from '##/about/Fragment'

import {ArrowUpLeft, ArrowUpRight} from 'lucide-react'

type BlockNames = 'what' | 'idea' | 'ai' | 'gameplay'
type TokenBlocks = {
  [K in BlockNames]: Block
}

type Block = {
  heading: string
  text: string
}

const BlockComponent: React.FC<{token: Block}> = ({token}) => (
  <article className="space-y-2 sm:space-y-1.5">
    <Prompt className="!text-5xl sm:!text-4xl" text={token.heading} />
    <Typography className="text-white text-lg sm:text-base font-light tracking-normal" text={token.text} />
  </article>
)

const aboutData: TokenBlocks = {
  what: {
    heading: 'Overview',
    text: `Get ready to dive into an <mark>AI-powered</mark> adventure where your choices shape the story. Powered by <mark>GigaChat AI</mark>, this game immerses you in a world where reality is just a suggestion.`,
  },
  idea: {
    heading: 'Inspiration',
    text: `Inspired by a wild game from <mark>Rick and Morty S6 E3</mark>, where characters faced unpredictable situations, I created an AI-driven game that's wonderfully weird and full of surprises.`,
  },
  ai: {
    heading: 'AI Powered',
    text: `This game is powered by GigaChat AI, your clever game master always ready to surprise you. I chose <mark>GigaChat</mark> for its robust capabilities and free access, allowing me to focus on creating engaging experiences.`,
  },
  gameplay: {
    heading: 'Gameplay',
    text: `You start with a simple prompt, like <mark>"You wake up in a forest"</mark>. Your choices shape the unfolding story, filled with unexpected twists. The game blurs the line between reality and absurdity, ensuring every playthrough is a unique adventure.`,
  },
}

export default function AboutPage() {
  return (
    <Container className="max-w-2xl xl:max-w-xl mb-28 xl:mb-20 sm:mb-10">
      <div className="my-10 space-y-8">
        <section className="space-y-4">
          <Button href="/" variant="secondary" className="w-full gap-1 text-neutral-400">
            <ArrowUpLeft /> Back
          </Button>

          <Fragment />
        </section>

        <section className="flex flex-col gap-8 sm:gap-10 mt-4">
          {Object.values(aboutData).map((block, index) => (
            <BlockComponent key={index} token={block} />
          ))}
        </section>

        <Button href="https://github.com/bozzhik/chronos-ai" blank={true} variant="secondary" className="w-full gap-1 text-neutral-400">
          Source code <ArrowUpRight />
        </Button>
      </div>

      <div className="fixed inset-0 flex items-center justify-center w-screen h-full m-auto -z-20 opacity-5">
        <div className="absolute inset-0 backdrop-blur-[2px] s-full"></div>
        <ReactMatrixAnimation fontColor="#2ad751" />
      </div>
    </Container>
  )
}
