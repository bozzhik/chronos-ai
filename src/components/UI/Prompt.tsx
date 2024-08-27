import {cn} from '@/lib/utils'
import localFont from 'next/font/local'

const advent = localFont({
  src: '../../assets/fonts/Adventure-Subtitles.woff2',
  variable: '--font-advent',
})

type Props = {
  type: 'assistant' | 'user'
  className?: string
  text?: string
}

export const promptVariants = {
  default: `!leading-none tracking-tight ${advent.className}`,
  assistant: 'text-[90px] xl:text-6xl sm:text-4xl uppercase text-primary [text-shadow:_0_0_15px_var(--primary-shadow)]',
  user: 'text-[70px] xl:text-5xl sm:text-3xl lowercase text-secondary [text-shadow:_0_0_10px_var(--secondary-shadow)]',
}

export default function Prompt({type, className, text}: Props) {
  if (type === 'assistant') {
    return <h1 className={cn(promptVariants.default, promptVariants[type], className)} dangerouslySetInnerHTML={{__html: text || ''}} />
  }

  return <h2 className={cn('ml-14', promptVariants.default, promptVariants[type], className)} dangerouslySetInnerHTML={{__html: text || ''}} />
  return
}
