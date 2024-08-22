import {cn} from '@/lib/utils'
import {Link} from 'react-router-dom'

type Props = {
  to: string
  type?: 'primary' | 'secondary'
  text: string
  className?: string
}

const buttonStyles = {
  base: 'px-14 py-2 text-xl uppercase whitespace-no-wrap rounded-[10px] duration-200',
  hover: 'focus:outline-none border-neutral-900 border-[3px] hover:ring-[2px] hover:ring-primary active:ring-[2px] active:ring-primary focus:ring-[2px] focus:ring-primary',
  variants: {
    primary: 'bg-primary text-background font-semibold tracking-tight',
    secondary: 'bg-neutral-800 text-white font-normal tracking-normal hover:ring-neutral-800 active:ring-neutral-800 focus:ring-neutral-800',
  },
}
const {base, hover, variants} = buttonStyles

export default function Button({type = 'primary', to, text, className}: Props) {
  return (
    <Link to={to} className={cn([base, hover, variants[type]], className)}>
      {text}
    </Link>
  )
}
