import {cn} from '@/lib/utils'

interface Props {
  type?: 'heading' | 'text'
  className?: string
  text: string
}

export default function Typography({type = 'text', text, className}: Props) {
  if (type === 'heading') {
    return <h1 className={cn('text-7xl sm:text-5xl font-semibold tracking-tighter', className)} dangerouslySetInnerHTML={{__html: text}} />
  } else if (type === 'text') {
    return <p className={cn('text-xl sm:text-lg font-medium text-neutral-400 tracking-tight whitespace-pre-line', className)} dangerouslySetInnerHTML={{__html: text}} />
  }
}
