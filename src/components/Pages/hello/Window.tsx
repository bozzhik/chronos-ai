import {isMobile} from '@bozzhik/is-mobile'
import {appPaths} from '@/lib/constants'

import {Link} from 'react-router-dom'
import Typography from '#/UI/Typography'
import Button from '#/UI/Button'

const windowData = {
  heading: 'Ultra realistic <span class="duration-200 text-primary">AI</span> game',
  text: {
    desktop: 'Immerse yourself in an ultra-realistic AI-powered game where every decision shapes your escape from dynamic scenarios.',
    mobile: 'Dive into an realistic AI game where decisions shape your escape from dynamic scenarios.',
  },
}
const {heading, text} = windowData

export default function Window() {
  return (
    <section className="relative mx-auto flex grow flex-col justify-center -mt-10 min-h-[400px] max-w-8xl sm:max-w-none sm:w-full sm:mx-4 overflow-hidden rounded-2xl border-2 border-neutral-800/50 bg-gradient-to-br from-neutral-800/10 to-neutral-800/30 shadow-2xl shadow-black backdrop-blur-[6px]">
      <div className="absolute inset-0 flex items-center w-full h-10 px-4 border-b-2 sm:h-9 border-neutral-800/50 bg-neutral-800/20">
        <div className="flex items-center gap-2">
          {['bg-pink-400', 'bg-purple-400', 'bg-green-400'].map((color, index) => (
            <div key={index} className={`${color} rounded-full s-3 sm:s-2.5`}></div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center justify-between h-full gap-6 px-24 mt-10 sm:gap-4 sm:px-2 xl:mt-7 py-28 sm:py-14">
        <div className="flex flex-col items-center gap-3 sm:gap-4">
          <div className="inline-flex items-center justify-between border-[1.5px] min-w-0 rounded-full font-mono font-semibold px-3.5 py-1.5 text-xs gap-2 bg-neutral-900 border-neutral-800 uppercase">
            Powered by
            <a href="https://giga.chat/" target="_blank" className="duration-200 text-primary hover:underline hover:text-white">
              GigaChat
            </a>
          </div>

          <Typography className="text-center" type="heading" text={heading} />
          <Typography className="text-center max-w-[50ch] sm:max-w-[25ch]" text={isMobile ? text.mobile : text.desktop} />
        </div>

        <div className="flex flex-col items-center gap-1.5 sm:gap-1">
          <Button to={appPaths.playground} text="Try to escape" />

          <div className="group space-x-1.5 font-mono font-normal text-center whitespace-pre-line text-neutral-400">
            <span>what is it?</span>
            <Link to={appPaths.about} className="underline group-hover:no-underline text-primary">
              discover
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
