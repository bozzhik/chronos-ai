import {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'

export default function NotFound() {
  const [timeLeft, setTimeLeft] = useState(2)
  const navigate = useNavigate()

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimeLeft((prev) => prev - 1)
    }, 1000)

    const timer = setTimeout(() => {
      navigate('/')
    }, 2000)

    return () => {
      clearInterval(countdown)
      clearTimeout(timer)
    }
  }, [navigate])

  return <section>404 - Redirecting in {timeLeft} seconds</section>
}
