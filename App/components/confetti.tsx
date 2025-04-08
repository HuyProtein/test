"use client"

import { useRef, useEffect } from "react"

export const Confetti = ({ active = false }) => {
  const canvasRef = useRef(null)
  const animationRef = useRef(null)

  useEffect(() => {
    if (!active || !canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    const width = canvas.width
    const height = canvas.height

    // Tạo mảng chứa các hạt pháo hoa
    const particles = []
    for (let i = 0; i < 150; i++) {
      particles.push({
        x: width / 2,
        y: height / 2,
        size: Math.random() * 5 + 1,
        color: `hsl(${Math.random() * 360}, 100%, 50%)`,
        speedX: Math.random() * 6 - 3,
        speedY: Math.random() * 6 - 3,
        life: 100,
      })
    }

    // Hàm vẽ và cập nhật các hạt
    const animate = () => {
      ctx.clearRect(0, 0, width, height)

      // Cập nhật và vẽ từng hạt
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        // Cập nhật vị trí
        p.x += p.speedX
        p.y += p.speedY
        p.life -= 1
        p.size = Math.max(0, p.size - 0.1)

        // Vẽ hạt
        if (p.life > 0 && p.size > 0) {
          ctx.fillStyle = p.color
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      // Tiếp tục hoạt ảnh nếu còn hạt
      if (particles.some((p) => p.life > 0 && p.size > 0)) {
        animationRef.current = requestAnimationFrame(animate)
      }
    }

    // Bắt đầu hoạt ảnh
    animate()

    // Dọn dẹp khi component unmount
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [active])

  if (!active) return null

  return (
    <canvas
      ref={canvasRef}
      width={400}
      height={400}
      className="absolute inset-0 w-full h-full pointer-events-none z-50"
    />
  )
}

