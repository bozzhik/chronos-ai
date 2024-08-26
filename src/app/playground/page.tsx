import {cn} from '@/lib/utils'
import {appContainer} from '#/Global/Container'
import {promptVariants} from '#/UI/Prompt'

import Link from 'next/link'
import Container from '#/Global/Container'
import Chat from '##/playground/Chat'

export default function PlayPage() {
  return (
    <>
      <Container className="my-48 xl:my-36 sm:my-10">
        <Chat />
      </Container>

      <section className="fixed bottom-0 w-full bg-background">
        <div className={cn(appContainer, 'py-7 animate-pulse')}>
          <Link href="/" className={cn(promptVariants.default, promptVariants.user, 'inline-flex gap-8 sm:gap-4 hover:translate-x-1.5 duration-300')}>
            /exit
          </Link>
        </div>
      </section>
    </>
  )
}
