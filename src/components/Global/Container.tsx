import {cn} from '@/lib/utils'

type Props = {
  children: React.ReactNode
  className?: string
}

export default function Container({children, className}: Props) {
  return <main className={cn('max-w-[75%] mx-auto sm:mx-4', className)}>{children}</main>
}
