import { useEffect, useRef } from 'react'

export default function BackgroundEffects() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    let animationFrameId
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    // Minimal technical particles (crisp dots, neutral warm tone)
    const particleCount = Math.min(Math.floor(width / 90), 14)
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.2 + 0.6,
      speedY: -(Math.random() * 0.12 + 0.03),
      speedX: (Math.random() - 0.5) * 0.06,
      opacity: Math.random() * 0.12 + 0.04,
    }))

    const render = () => {
      ctx.clearRect(0, 0, width, height)

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.y += p.speedY
        p.x += p.speedX

        if (p.y < -10) {
          p.y = height + 10
          p.x = Math.random() * width
        }
        if (p.x < -10) p.x = width + 10
        if (p.x > width + 10) p.x = -10

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(16, 23, 34, ${p.opacity})`
        ctx.fill()
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Crisp technical architectural grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-35" />

      {/* Extremely faint warm radial illumination (non-colored, neutral warm depth) */}
      <div
        className="absolute top-0 left-1/4 w-[60vw] h-[45vw] max-w-[800px] max-h-[600px] rounded-full blur-[140px] opacity-[0.07]"
        style={{
          background: 'radial-gradient(circle, #FFFFFF 0%, #EFEAE1 60%, transparent 80%)',
        }}
      />

      {/* Minimal technical corner crosshair markers */}
      <div className="absolute top-8 left-8 text-[#8B9098]/35 font-mono text-[10px] select-none hidden lg:block">
        + 27°42'N 85°19'E
      </div>
      <div className="absolute top-8 right-8 text-[#8B9098]/35 font-mono text-[10px] select-none hidden lg:block">
        SYS.v2.8 [ONLINE]
      </div>

      {/* Canvas for minimal engineering dots */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
    </div>
  )
}
