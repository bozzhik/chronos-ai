import {useRef, useState} from 'react'
import {VolumeX, Volume2} from 'lucide-react'
import {Play, Pause} from '##/about/Icons'

const controlButtonStyles = 'text-primary bg-neutral-800/70 backdrop-blur-md rounded-[4px]'

const ControlButton: React.FC<{children: React.ReactNode; onClick: () => void}> = ({onClick, children}) => {
  return (
    <button onClick={onClick} className={`px-2.5 py-2 s-fit ${controlButtonStyles}`}>
      {children}
    </button>
  )
}

export default function Fragment() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPaused, setIsPaused] = useState(false)
  const [isMuted, setIsMuted] = useState(true)

  const toggleMuteUnmute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
      setIsMuted(videoRef.current.muted)
    }
  }

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play()
        setIsPaused(false)
      } else {
        videoRef.current.pause()
        setIsPaused(true)
      }
    }
  }

  return (
    <div className="relative w-full h-[40vh] sm:h-[30vh] bg-neutral-900 rounded-xl overflow-hidden p-1.5 sm:pb-6">
      <video ref={videoRef} className={`object-cover s-full rounded-lg sm:rounded-b-[4px] duration-300 ${isPaused ? 'opacity-50' : ''}`} width="100%" height="100%" muted loop autoPlay playsInline preload="auto">
        <source src="videos/fragment.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute z-[99] inset-0 sm:top-auto sm:bottom-0 sm:items-end w-full flex justify-between">
        <div className={`m-3 sm:mb-2 s-fit px-3 py-2 text-xs leading-none font-mono tracking-tighter ${controlButtonStyles}`}>Rick and Morty s6 e3</div>

        <div className="flex gap-1.5 m-3 sm:mb-2">
          <ControlButton onClick={toggleMuteUnmute}>{isMuted ? <VolumeX /> : <Volume2 />}</ControlButton>
          <ControlButton onClick={togglePlayPause}>{isPaused ? <Play /> : <Pause />}</ControlButton>
        </div>
      </div>
    </div>
  )
}
