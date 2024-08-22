import Container from '#/Global/Container'
import Prompt from '#/UI/Prompt'
import Typography from '#/UI/Typography'

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
    <Container className="max-w-2xl xl:max-w-xl my-20 space-y-20">
      <section className="flex flex-col gap-10">
        {Object.values(aboutData).map((block, index) => (
          <BlockComponent key={index} token={block} />
        ))}
      </section>
    </Container>
  )
}
