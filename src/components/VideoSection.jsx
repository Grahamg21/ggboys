import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import garyVideo from '../assets/photos/gary-fish.mp4'

export default function VideoSection() {
  const videoRef = useRef(null)

  // Ensure autoplay fires after mount
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {})
    }
  }, [])

  return (
    <section className="py-16 px-4 flex flex-col items-center">

      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-2xl"
      >
        {/* Animated tie-dye glow behind the video */}
        <motion.div
          animate={{
            background: [
              'radial-gradient(ellipse, #FF6B1A88 0%, #a855f788 40%, transparent 70%)',
              'radial-gradient(ellipse, #00CED188 0%, #FF149388 40%, transparent 70%)',
              'radial-gradient(ellipse, #FFD70088 0%, #39FF1488 40%, transparent 70%)',
              'radial-gradient(ellipse, #FF6B1A88 0%, #a855f788 40%, transparent 70%)',
            ]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
          className="absolute -inset-3 rounded-3xl blur-2xl -z-10"
        />

        {/* Film strip holes — top */}
        <div className="flex justify-between px-2 mb-1">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="w-4 h-3 rounded-sm bg-white/10 border border-white/20" />
          ))}
        </div>

        {/* Video frame */}
        <div
          className="relative rounded-2xl overflow-hidden border-2"
          style={{ borderColor: 'rgba(255,215,0,0.4)' }}
        >
          <video
            ref={videoRef}
            src={garyVideo}
            autoPlay
            loop
            muted
            playsInline
            className="w-full block"
            style={{ width: '100%', height: 'auto', display: 'block', background: '#000' }}
          />

          {/* Subtle vignette over video */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center, transparent 60%, rgba(14,0,32,0.6) 100%)',
            }}
          />
        </div>

        {/* Film strip holes — bottom */}
        <div className="flex justify-between px-2 mt-1">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="w-4 h-3 rounded-sm bg-white/10 border border-white/20" />
          ))}
        </div>

        {/* Caption */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center font-body text-white/40 text-sm mt-4 tracking-wide italic"
        >
          A man, a fish, a moment in time.
        </motion.p>
      </motion.div>
    </section>
  )
}
