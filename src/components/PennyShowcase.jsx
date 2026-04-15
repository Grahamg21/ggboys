import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { showcasePennies } from '../data/pennies'

function PennyCard({ penny, index }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: index * 0.08, duration: 0.5, ease: 'easeOut' }}
      className={`penny-card ${flipped ? 'flipped' : ''}`}
      style={{ height: 260 }}
      onClick={() => setFlipped(f => !f)}
    >
      <div className="penny-card-inner">
        {/* ── FRONT ── */}
        <div
          className="penny-face flex flex-col items-center justify-center gap-3 p-4 border border-gd-copper/40 bg-gradient-to-b from-[#1c0a00] to-[#120004]"
          style={{ borderRadius: '1rem' }}
        >
          {/* Coin circle */}
          <div
            className="relative flex items-center justify-center rounded-full"
            style={{
              width: 100, height: 100,
              background: `radial-gradient(circle at 35% 35%, #d4974e, ${penny.color}, #4a2000)`,
              boxShadow: `0 0 20px ${penny.color}80, 0 4px 12px rgba(0,0,0,0.6)`,
            }}
          >
            {/* Lincoln silhouette SVG */}
            <svg viewBox="0 0 60 60" width="56" height="56" className="opacity-80">
              <ellipse cx="30" cy="24" rx="10" ry="13" fill="#7c3e00" opacity="0.7" />
              <ellipse cx="30" cy="23" rx="7"  ry="10" fill="#5a2d00" opacity="0.8" />
              <rect x="22" y="32" width="16" height="18" rx="3" fill="#7c3e00" opacity="0.6" />
            </svg>
            {/* Year badge */}
            <div
              className="absolute -bottom-2 bg-gd-gold text-gd-deepPurple font-display text-xs font-bold px-2 py-0.5 rounded-full"
              style={{ fontSize: 10 }}
            >
              {penny.year}
            </div>
          </div>

          <div className="text-center">
            <p className="font-display text-gd-gold text-base leading-tight">{penny.label}</p>
            <p className="font-body text-gd-copper/80 text-xs mt-0.5">{penny.grade}</p>
          </div>

          <p className="font-body text-white/40 text-xs">Tap to reveal →</p>
        </div>

        {/* ── BACK ── */}
        <div
          className="penny-back flex flex-col justify-between p-5 border border-gd-copper/40"
          style={{
            borderRadius: '1rem',
            background: `linear-gradient(135deg, #1c0800, #200010)`,
          }}
        >
          <div>
            <p className="font-display text-gd-gold text-base mb-2">{penny.label}</p>
            <p className="font-body text-white/80 text-xs leading-relaxed mb-3">{penny.description}</p>
          </div>
          <div className="border-t border-gd-copper/30 pt-3">
            <p className="font-body text-gd-teal text-xs leading-relaxed italic">💡 {penny.funFact}</p>
          </div>
          <p className="font-body text-white/30 text-xs mt-2 text-center">Tap to flip back</p>
        </div>
      </div>
    </motion.div>
  )
}

export default function PennyShowcase() {
  const ref = useRef(null)

  return (
    <section ref={ref} className="py-20 px-4 relative" id="showcase">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(184,115,51,0.15) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="font-body text-gd-copper tracking-[0.3em] uppercase text-sm mb-2">The Greenfield Collection</p>
          <h2
            className="font-display gradient-text"
            style={{ fontSize: 'clamp(32px, 6vw, 64px)' }}
          >
            Hall of Coins
          </h2>
          <div className="flex items-center justify-center gap-2 mt-3">
            <span
              className="font-display text-xs px-3 py-1 rounded-full border"
              style={{ color: '#FFD700', borderColor: 'rgba(255,215,0,0.4)', background: 'rgba(255,215,0,0.08)' }}
            >
              Graham's Pick
            </span>
          </div>
          <p className="font-body text-white/50 mt-3 max-w-lg mx-auto text-sm">
            Ten exceptional pieces from the GG Boys collection. Tap any coin to read its story.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {showcasePennies.map((penny, i) => (
            <PennyCard key={penny.id} penny={penny} index={i} />
          ))}
        </div>

        {/* Copper divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-16 h-px origin-left"
          style={{ background: 'linear-gradient(90deg, transparent, #B87333, #FFD700, #B87333, transparent)' }}
        />
      </div>
    </section>
  )
}
