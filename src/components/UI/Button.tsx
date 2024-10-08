import {cn} from '@/lib/utils'
import Link from 'next/link'

type Props = {
  href: string
  blank?: boolean
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  className?: string
}

const buttonStyles = {
  base: 'inline-flex items-center justify-center px-14 sm:px-12 py-2 sm:py-1.5 text-xl sm:text-lg text-center uppercase rounded-xl duration-200 whitespace-no-wrap focus:outline-none',
  hover: {
    variants: {
      primary: 'border-[3px] hover:ring-[2px] hover:ring-primary active:ring-[2px] active:ring-primary focus:ring-[2px] focus:ring-primary',
      secondary: 'border-[3px] ring-[2px] ring-neutral-900 hover:text-primary active:text-primary focus:text-primary',
    },
  },
  variants: {
    primary: 'bg-primary border-neutral-900 text-background font-semibold tracking-tight',
    secondary: 'bg-neutral-900 border-neutral-950 text-white font-normal tracking-normal',
  },
}
const {base, hover, variants} = buttonStyles

export default function Button({href, blank, children, variant = 'primary', className}: Props) {
  return (
    <Link href={href} target={blank ? '_blank' : '_self'} className={cn([base, hover.variants[variant], variants[variant]], className)}>
      {children}
    </Link>
  )
}
