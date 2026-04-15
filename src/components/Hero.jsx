import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import vwBusPhoto from '../assets/photos/Dad/Dad/IMG_1034.jpeg'
import Lightbox from './Lightbox'

const DAYS_REMAINING = (() => {
  const today = new Date()
  const bday  = new Date(today.getFullYear(), 3, 19) // April 19
  if (bday < today) bday.setFullYear(today.getFullYear() + 1)
  return Math.ceil((bday - today) / 86400000)
})()

export default function Hero() {
  const canvasRef = useRef(null)
  const [lightbox, setLightbox] = useState(false)

  // Animated swirling tie-dye canvas background
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let frame = 0
    let raf

    const resize = () => {
      canvas.width  = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const colors = [
      [255, 107,  26],  // orange
      [168,  85, 247],  // purple
      [  0, 206, 209],  // teal
      [255,  20, 147],  // magenta
      [255, 215,   0],  // gold
      [ 57, 255,  20],  // neon green
    ]

    const draw = () => {
      const { width: w, height: h } = canvas
      const t = frame * 0.008

      ctx.fillStyle = '#0E0020'
      ctx.fillRect(0, 0, w, h)

      // Layered radial swirls
      const blobs = [
        { x: 0.15 + 0.12 * Math.sin(t * 0.7),  y: 0.3  + 0.1  * Math.cos(t * 0.5),  r: 0.45, ci: 0 },
        { x: 0.85 + 0.08 * Math.cos(t * 0.6),  y: 0.2  + 0.12 * Math.sin(t * 0.8),  r: 0.4,  ci: 1 },
        { x: 0.5  + 0.15 * Math.sin(t * 0.4),  y: 0.85 + 0.08 * Math.cos(t * 0.9),  r: 0.45, ci: 2 },
        { x: 0.75 + 0.1  * Math.cos(t * 0.55), y: 0.7  + 0.1  * Math.sin(t * 0.65), r: 0.38, ci: 3 },
        { x: 0.25 + 0.12 * Math.sin(t * 0.75), y: 0.65 + 0.1  * Math.cos(t * 0.45), r: 0.4,  ci: 4 },
        { x: 0.6  + 0.1  * Math.cos(t * 0.85), y: 0.45 + 0.08 * Math.sin(t * 0.6),  r: 0.35, ci: 5 },
      ]

      blobs.forEach(({ x, y, r, ci }) => {
        const [R, G, B] = colors[ci]
        const grd = ctx.createRadialGradient(x * w, y * h, 0, x * w, y * h, r * Math.max(w, h))
        grd.addColorStop(0,   `rgba(${R},${G},${B},0.55)`)
        grd.addColorStop(0.5, `rgba(${R},${G},${B},0.18)`)
        grd.addColorStop(1,   `rgba(${R},${G},${B},0)`)
        ctx.fillStyle = grd
        ctx.fillRect(0, 0, w, h)
      })

      frame++
      raf = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Tie-dye canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Dark vignette overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 py-16 max-w-4xl mx-auto">

        {/* ggboys.org tag */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="font-display tracking-[0.4em] uppercase mb-4"
          style={{ fontSize: 13, color: 'rgba(255,215,0,0.6)' }}
        >
          ggboys.org
        </motion.p>

        {/* The big 72 */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100, damping: 12, delay: 0.1 }}
          className="mb-2"
        >
          <span
            className="font-display gradient-text"
            style={{ fontSize: 'clamp(80px, 18vw, 180px)', lineHeight: 1 }}
          >
            72
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.7, ease: 'easeOut' }}
          className="font-display text-white"
          style={{ fontSize: 'clamp(28px, 7vw, 72px)', lineHeight: 1.1, textShadow: '0 2px 20px rgba(0,0,0,0.8)' }}
        >
          Happy Birthday,<br />
          <span className="gradient-text-cool">Dadio</span>
        </motion.h1>

        {/* Date */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="font-body text-white/70 mt-3 tracking-[0.3em] uppercase text-sm md:text-base"
        >
          April 19, 2026
        </motion.p>

        {/* Countdown badge */}
        {DAYS_REMAINING > 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-6 px-5 py-2 rounded-full border border-gd-gold/60 bg-black/40 backdrop-blur-sm"
          >
            <span className="font-body text-gd-gold font-bold text-sm">
              🎉 {DAYS_REMAINING} {DAYS_REMAINING === 1 ? 'day' : 'days'} to go!
            </span>
          </motion.div>
        )}
        {DAYS_REMAINING === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-6 px-5 py-2 rounded-full border border-gd-gold/80 bg-black/40 backdrop-blur-sm"
          >
            <span className="font-body text-gd-gold font-bold">
              🎉 Today is the day!
            </span>
          </motion.div>
        )}

        {/* VW Bus Photo */}
        <motion.div
          initial={{ y: 60, opacity: 0, rotate: -2 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          transition={{ delay: 0.5, type: 'spring', stiffness: 70, damping: 14 }}
          className="mt-10 relative"
          style={{ animation: 'float 6s ease-in-out infinite' }}
        >
          <div
            className="fun-frame fun-frame-hero"
            style={{ maxWidth: 520, cursor: 'zoom-in' }}
            onClick={() => setLightbox(true)}
          >
            <img
              src={vwBusPhoto}
              alt="Dadio with his 1964 VW 23-Window Bus"
              className="w-full object-cover rounded-xl"
              style={{ aspectRatio: '4/3' }}
            />
            <p className="fun-frame-caption">
              The Captain and His Ship
            </p>
          </div>
          {/* Glow behind polaroid */}
          <div className="absolute inset-0 -z-10 blur-2xl opacity-40 rounded-xl"
            style={{ background: 'radial-gradient(ellipse, #FF6B1A 0%, #a855f7 60%, transparent 80%)' }}
          />
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-12 flex flex-col items-center gap-2 text-white/50"
        >
          <span className="text-xs tracking-widest uppercase">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            ↓
          </motion.div>
        </motion.div>
      </div>

      {lightbox && (
        <Lightbox src={vwBusPhoto} alt="Dadio with his 1964 VW 23-Window Bus" onClose={() => setLightbox(false)} />
      )}
    </section>
  )
}
