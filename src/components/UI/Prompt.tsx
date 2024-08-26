import {cn} from '@/lib/utils'
import localFont from 'next/font/local'

const advent = localFont({
  src: '../../assets/fonts/Adventure-Subtitles.woff2',
  variable: '--font-advent',
})

type Props = {
  type?: 'ai' | 'user'
  className?: string
  text?: string
  userControls?: string
}

export const promptVariants = {
  default: `!leading-none tracking-tight ${advent.className}`,
  ai: 'text-[90px] xl:text-6xl sm:text-4xl uppercase text-primary [text-shadow:_0_0_15px_var(--primary-shadow)]',
  user: 'text-[70px] xl:text-5xl sm:text-3xl lowercase text-secondary [text-shadow:_0_0_10px_var(--secondary-shadow)]',
}

export default function Prompt({type = 'ai', className, text, userControls = '>>'}: Props) {
  if (type === 'user') {
    return (
      <div className={cn('inline-flex gap-8 sm:gap-4', promptVariants.default, promptVariants[type], className)}>
        {userControls && <span className="block mt-2 sm:mt-1 tracking-[-0.15em]">{userControls}</span>}
        <input type="text" className="bg-transparent border-none outline-none" />
      </div>
    )
  }

  return <h1 className={cn(promptVariants.default, promptVariants[type], className)} dangerouslySetInnerHTML={{__html: text || ''}}></h1>
}
