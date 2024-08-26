import {cn} from '@/lib/utils'

type Props = {
  children: React.ReactNode
  className?: string
}

export const appContainer = 'w-full mx-auto max-w-[75%] sm:max-w-max sm:w-auto sm:mx-4'

export default function Container({children, className}: Props) {
  return <main className={cn(appContainer, className)}>{children}</main>
}
