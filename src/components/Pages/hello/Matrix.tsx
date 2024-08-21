import {useEffect, useRef} from 'react'

const Matrix: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const w = (canvas.width = document.body.offsetWidth)
    const h = (canvas.height = document.body.offsetHeight)
    const cols = Math.floor(w / 20) + 1
    const ypos = Array(cols).fill(0)

    ctx.fillStyle = '#000'
    ctx.fillRect(0, 0, w, h)

    function matrix() {
      ctx!.fillStyle = '#0001'
      ctx!.fillRect(0, 0, w, h)

      ctx!.fillStyle = '#0f0'
      ctx!.font = '15pt monospace'

      ypos.forEach((y, ind) => {
        const text = String.fromCharCode(Math.random() * 128)
        const x = ind * 20
        ctx!.fillText(text, x, y)
        if (y > 100 + Math.random() * 10000) ypos[ind] = 0
        else ypos[ind] = y + 20
      })
    }

    const intervalId = setInterval(matrix, 50)

    return () => clearInterval(intervalId)
  }, [])

  return <canvas ref={canvasRef} width={500} height={200} id="canv" />
}

export default Matrix
