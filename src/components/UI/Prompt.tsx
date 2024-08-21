import {cn} from '@/lib/utils'

type Props = {
  type?: 'ai' | 'user'
  className?: string
  text: string
}

const promptVariants = {
  ai: 'text-[90px] xl:text-6xl sm:text-4xl uppercase text-primary [text-shadow:_0_0_15px_var(--primary-shadow)]',
  user: 'text-[70px] xl:text-5xl sm:text-3xl lowercase text-secondary [text-shadow:_0_0_10px_var(--secondary-shadow)]',
}

export default function Prompt({type = 'ai', text, className}: Props) {
  const Tag = type === 'ai' ? 'h1' : 'p'
  const displayText = type === 'user' ? `<span class="block mt-2 sm:mt-1 tracking-[-0.15em]">${`>>`}</span> ${text}` : text

  return <Tag className={cn('font-advent !leading-none tracking-tight', type === 'user' ? 'inline-flex gap-8 sm:gap-4' : '', promptVariants[type], className)} dangerouslySetInnerHTML={{__html: displayText || ''}}></Tag>
}
