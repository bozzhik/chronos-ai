import {Link} from 'react-router-dom'
import Button from '#/UI/Button'

import {appPaths} from '@/lib/constants'

export default function Window() {
  return (
    <section className="relative mx-auto flex grow flex-col justify-center -mt-10 min-h-[400px] max-w-8xl overflow-hidden rounded-2xl border-2 border-neutral-800/50 bg-gradient-to-br from-neutral-800/10 to-neutral-800/30 shadow-2xl shadow-black backdrop-blur-[6px]">
      <div className="absolute inset-0 flex items-center w-full h-10 px-4 py-2 border-b-2 border-neutral-800/50 bg-neutral-800/20">
        <div className="flex items-center gap-2">
          {['bg-pink-400', 'bg-purple-400', 'bg-green-400'].map((color, index) => (
            <div key={index} className={`${color} rounded-full s-3`}></div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center justify-between h-full gap-6 px-24 font-sans mt-7 py-28">
        <div className="flex flex-col items-center gap-3">
          <div className="inline-flex items-center justify-between border-[1.5px] min-w-0 rounded-full font-mono font-semibold px-3.5 py-1.5 text-xs gap-2 bg-neutral-900 border-neutral-800 uppercase">
            Powered by
            <a href="https://giga.chat/" className="duration-200 text-primary hover:underline hover:text-white">
              GigaChat
            </a>
          </div>
          <h1 className="font-semibold tracking-tighter text-7xl">
            Ultra realistic <span className="duration-200 text-neutral-400">AI</span> game
          </h1>
          <p className="text-xl max-w-[50ch] font-medium tracking-tight text-center whitespace-pre-line text-neutral-400">Immerse yourself in an ultra-realistic AI-powered game where every decision shapes your escape from dynamic scenarios.</p>

          <div className="flex flex-col items-center gap-1.5">
            <Button to={appPaths.playground} text="Try to escape" />

            <div className="group space-x-1.5 font-mono font-normal text-center whitespace-pre-line text-neutral-400">
              <span>what is it?</span>
              <Link to={appPaths.about} className="group-hover:no-underline underline text-primary">
                discover
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
