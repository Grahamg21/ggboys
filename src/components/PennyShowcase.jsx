import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { showcasePennies } from '../data/pennies'
import bannerPhoto from '../assets/photos/Dad/Dad/IMG_0913.jpeg'

function PennyCard({ penny, index }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: index * 0.08, duration: 0.5, ease: 'easeOut' }}
      className={`penny-card ${flipped ? 'flipped' : ''}`}
      style={{ height: 300 }}
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
          className="penny-back flex flex-col justify-between p-4 border border-gd-copper/40 overflow-hidden"
          style={{
            borderRadius: '1rem',
            background: `linear-gradient(135deg, #1c0800, #200010)`,
          }}
        >
          <div className="flex-1 overflow-hidden">
            <p className="font-display text-gd-gold text-sm mb-2">{penny.label}</p>
            <p className="font-body text-white/80 leading-relaxed" style={{ fontSize: 11 }}>{penny.description}</p>
          </div>
          <p className="font-body text-white/30 text-center mt-3 flex-shrink-0" style={{ fontSize: 10 }}>Tap to flip back</p>
        </div>
      </div>
    </motion.div>
  )
}

export default function PennyShowcase() {
  const ref = useRef(null)

  return (
    <section ref={ref} className="relative" id="showcase">

      {/* ── Cinematic banner ── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative w-full overflow-hidden"
        style={{ height: 'clamp(320px, 45vw, 540px)' }}
      >
        {/* Photo */}
        <img
          src={bannerPhoto}
          alt="The GG Boys sorting the collection"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center 70%' }}
        />

        {/* Tie-dye colour wash — very subtle */}
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(45,0,87,0.35) 0%, rgba(184,115,51,0.2) 50%, rgba(45,0,87,0.4) 100%)' }}
        />

        {/* Gradient: dark at top (blends with page) and bottom (text sits here) */}
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, #0E0020 0%, transparent 25%, transparent 55%, #0E0020 100%)' }}
        />

        {/* Overlaid title — sits at bottom of banner */}
        <div className="absolute bottom-0 left-0 right-0 pb-10 flex flex-col items-center text-center px-4">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="font-body text-gd-copper tracking-[0.3em] uppercase text-sm mb-2"
          >
            The Greenfield Collection
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45 }}
            className="font-display gradient-text"
            style={{ fontSize: 'clamp(36px, 7vw, 80px)', lineHeight: 1 }}
          >
            Hall of Coins
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-3 mt-3"
          >
            <span
              className="font-display text-xs px-3 py-1 rounded-full border"
              style={{ color: '#FFD700', borderColor: 'rgba(255,215,0,0.5)', background: 'rgba(255,215,0,0.1)' }}
            >
              Graham's Pick
            </span>
            <span className="font-body text-white/40 text-xs">
              Tap any coin to read its story
            </span>
          </motion.div>
        </div>
      </motion.div>

      {/* ── Coins grid ── */}
      <div className="py-14 px-4 relative">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(184,115,51,0.1) 0%, transparent 60%)' }}
        />
        <div className="max-w-6xl mx-auto relative z-10">

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
      </div>
    </section>
  )
}
