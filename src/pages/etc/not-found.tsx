import {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {screenHeight} from '@/lib/constants'

import Prompt from '#/UI/Prompt'

const REDIRECT_TIME = 2

export default function NotFound() {
  const [timeLeft, setTimeLeft] = useState(REDIRECT_TIME)
  const navigate = useNavigate()

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(countdown)
          navigate('/')
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => {
      clearInterval(countdown)
    }
  }, [navigate])

  return (
    <section className={`grid place-items-center w-screen ${screenHeight}`}>
      <div className="space-y-2 text-center">
        <Prompt text="404" />
        <Prompt className="text-secondary" text={`Back in ${timeLeft}`} />
      </div>
    </section>
  )
}
