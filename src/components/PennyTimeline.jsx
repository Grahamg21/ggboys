import { useState } from 'react'
import { motion } from 'framer-motion'
import { collectionGrid } from '../data/pennies'
import listPhoto from '../assets/photos/Dad/Dad/list.jpeg'
import gpaPhoto  from '../assets/photos/Dad/Dad/gpa.jpeg'

const MINTS = ['P', 'D', 'S']
const MINT_LABELS = { P: 'Philadelphia', D: 'Denver', S: 'San Francisco' }
const MINT_COLORS = { P: '#FFD700', D: '#00CED1', S: '#FF6B1A' }

// Stats from real data
const totalCoins = collectionGrid.reduce((n, row) =>
  n + MINTS.reduce((m, k) => m + (row[k]?.count || 0), 0), 0)
const yearsOwned = collectionGrid.filter(row => MINTS.some(k => row[k]?.count > 0)).length

function dotSize(count) {
  if (!count) return 0
  if (count === 1) return 8
  if (count <= 3) return 11
  return 14
}

export default function PennyTimeline() {
  const [hovered,  setHovered]  = useState(null) // { year, mint }
  const [lightbox, setLightbox] = useState(null) // 'gpa' | 'list' | null

  const hoveredRow  = hovered ? collectionGrid.find(r => r.year === hovered.year) : null
  const hoveredData = hoveredRow?.[hovered?.mint]

  return (
    <section className="py-20 px-4 relative" id="timeline">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(57,255,20,0.07) 0%, transparent 60%)' }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="font-body text-gd-green tracking-[0.3em] uppercase text-sm mb-2">
            The Greenfield Collection — 1909 – 1958
          </p>
          <h2
            className="font-display gradient-text"
            style={{ fontSize: 'clamp(28px, 5vw, 56px)' }}
          >
            The Wheat Penny Map
          </h2>
          <p className="font-body text-white/50 mt-3 max-w-lg mx-auto text-sm">
            Every year of the Lincoln Wheat Cent era. Dot size shows quantity owned. Hover to inspect.
          </p>
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6 mb-8"
        >
          {MINTS.map(m => (
            <div key={m} className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ background: MINT_COLORS[m], boxShadow: `0 0 6px ${MINT_COLORS[m]}` }} />
              <span className="font-body text-white/60 text-xs">{m} — {MINT_LABELS[m]}</span>
            </div>
          ))}
          <div className="flex items-center gap-4 ml-2 border-l border-white/10 pl-4">
            {[1, 3, 5].map(n => (
              <div key={n} className="flex items-center gap-1.5">
                <div className="rounded-full bg-white/40" style={{ width: dotSize(n), height: dotSize(n) }} />
                <span className="font-body text-white/40 text-xs">{n === 1 ? '1' : n === 3 ? '2–3' : '4+'}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full border border-white/20 bg-transparent" />
            <span className="font-body text-white/30 text-xs">Not owned</span>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex justify-center gap-8 mb-10"
        >
          {[
            { label: 'Total Coins',   value: totalCoins, color: '#FFD700' },
            { label: 'Years Covered', value: yearsOwned, color: '#39FF14' },
            { label: 'Mints Covered', value: collectionGrid.filter(r => MINTS.filter(k => r[k]?.count > 0).length > 1).length + ' yrs multi-mint', color: '#00CED1' },
          ].map(s => (
            <div key={s.label} className="text-center">
              <p className="font-display text-2xl md:text-3xl" style={{ color: s.color }}>{s.value}</p>
              <p className="font-body text-white/40 text-xs mt-1">{s.label}</p>
            </div>
          ))}
        </motion.div>

        {/* ── Origin Story ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-14 flex flex-col sm:flex-row items-center gap-8 border border-gd-copper/20 rounded-2xl p-6"
          style={{ background: 'linear-gradient(135deg, rgba(28,8,0,0.6), rgba(18,0,4,0.6))' }}
        >
          {/* GPA photo — natural aspect ratio, clickable */}
          <div className="flex-shrink-0 text-center cursor-pointer" onClick={() => setLightbox('gpa')}>
            <div
              style={{
                display: 'inline-block',
                padding: '8px 8px 32px',
                background: 'linear-gradient(135deg, #2a1500, #1a0008)',
                boxShadow: '0 6px 24px rgba(0,0,0,0.6), 0 0 0 1px rgba(184,115,51,0.3)',
                borderRadius: 4,
                transform: 'rotate(-2deg)',
                transition: 'transform 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'rotate(-1deg) scale(1.04)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'rotate(-2deg)'}
            >
              <img
                src={gpaPhoto}
                alt="Dad with the penny catalog"
                style={{ width: 150, display: 'block' }}
              />
              <p className="font-body text-gd-copper/70 text-center mt-2" style={{ fontSize: 10 }}>
                The Man Behind the List
              </p>
            </div>
          </div>

          {/* List photo — natural aspect ratio, clickable */}
          <div className="flex-shrink-0 text-center cursor-pointer" onClick={() => setLightbox('list')}>
            <div
              style={{
                display: 'inline-block',
                padding: '8px 8px 32px',
                background: 'linear-gradient(135deg, #2a1500, #1a0008)',
                boxShadow: '0 6px 24px rgba(0,0,0,0.6), 0 0 0 1px rgba(184,115,51,0.3)',
                borderRadius: 4,
                transform: 'rotate(1.5deg)',
                transition: 'transform 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'rotate(0.5deg) scale(1.04)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'rotate(1.5deg)'}
            >
              <img
                src={listPhoto}
                alt="Original handwritten penny catalog"
                style={{ width: 150, display: 'block' }}
              />
              <p className="font-body text-gd-copper/70 text-center mt-2" style={{ fontSize: 10 }}>
                The Original Catalog
              </p>
            </div>
          </div>

          {/* Copy */}
          <div className="text-center sm:text-left">
            <p className="font-display text-gd-gold text-lg mb-2">Where It All Started</p>
            <p className="font-body text-white/60 text-sm leading-relaxed">
              Long before spreadsheets, Dad tracked every coin by hand on a paper bag.
              That original list — years, quantities, mints — is the foundation of the
              Greenfield Collection you see mapped below.
            </p>
            <p className="font-body text-gd-copper/70 text-xs mt-3 italic">
              Tap either photo to enlarge.
            </p>
          </div>
        </motion.div>

        {/* ── Lightbox ── */}
        {lightbox && (
          <div
            className="fixed inset-0 flex items-center justify-center z-50"
            style={{ background: 'rgba(0,0,0,0.88)', backdropFilter: 'blur(6px)' }}
            onClick={() => setLightbox(null)}
          >
            <motion.img
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              src={lightbox === 'gpa' ? gpaPhoto : listPhoto}
              alt={lightbox === 'gpa' ? 'Dad with the penny catalog' : 'Original handwritten penny catalog'}
              style={{ maxWidth: '90vw', maxHeight: '90vh', borderRadius: 8, boxShadow: '0 0 60px rgba(184,115,51,0.4)' }}
              onClick={e => e.stopPropagation()}
            />
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-8 font-display text-white/60 text-3xl leading-none"
              style={{ background: 'none', border: 'none', cursor: 'pointer' }}
            >
              ×
            </button>
          </div>
        )}

        {/* Hover tooltip */}
        <div className="text-center mb-4 h-6">
          {hovered && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-body text-sm"
              style={{ color: MINT_COLORS[hovered.mint] }}
            >
              {hovered.year}-{hovered.mint === 'P' ? '(P)' : hovered.mint}
              {hoveredData
                ? ` · ${hoveredData.count} coin${hoveredData.count > 1 ? 's' : ''}${hoveredData.labels?.length ? ' · ' + hoveredData.labels.join(', ') : ''}`
                : ' · not in collection'}
            </motion.span>
          )}
        </div>

        {/* Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="overflow-x-auto pb-4"
        >
          <div style={{ minWidth: 560 }}>
            {/* Mint header */}
            <div className="flex items-center mb-1" style={{ paddingLeft: 52 }}>
              {MINTS.map(m => (
                <div key={m} className="font-display text-center text-xs" style={{ width: 36, color: MINT_COLORS[m] }}>
                  {m}
                </div>
              ))}
            </div>

            {/* Rows */}
            {collectionGrid.map((row, ri) => {
              const prevYear = ri > 0 ? collectionGrid[ri - 1].year : null
              const hasGap   = prevYear && row.year - prevYear > 2
              return (
                <div key={row.year}>
                  {/* Era gap divider */}
                  {hasGap && (
                    <div className="flex items-center gap-3 my-3" style={{ paddingLeft: 52 }}>
                      <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, rgba(255,215,0,0.3), transparent)' }} />
                      <span className="font-display text-xs" style={{ color: 'rgba(255,215,0,0.5)', fontSize: 10 }}>
                        ··· {row.year - prevYear - 1} yrs ···
                      </span>
                      <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,215,0,0.3))' }} />
                    </div>
                  )}
                <motion.div
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: ri * 0.008 }}
                  className="flex items-center mb-0.5"
                >
                  {/* Year label */}
                  <div
                    className="font-body text-right pr-3 text-xs select-none"
                    style={{
                      width: 52,
                      color: (row.year === 1954 || row.year === 1957 || row.year === 1909 || row.year === 2025)
                        ? '#FFD700'
                        : MINTS.some(k => row[k]?.count > 0)
                          ? 'rgba(255,255,255,0.5)'
                          : 'rgba(255,255,255,0.15)',
                    }}
                  >
                    {row.year}
                    {(row.year === 1954 || row.year === 1957 || row.year === 1909 || row.year === 2025) && ' ★'}
                  </div>

                  {/* Mint dots */}
                  {MINTS.map(m => {
                    const data  = row[m]
                    const count = data?.count || 0
                    const isHov = hovered?.year === row.year && hovered?.mint === m
                    const sz    = dotSize(count)
                    const isSteel = data?.labels?.some(l => l.includes('STEEL'))

                    return (
                      <div
                        key={m}
                        className="penny-cell flex items-center justify-center relative"
                        style={{ width: 36, height: 20 }}
                        onMouseEnter={() => setHovered({ year: row.year, mint: m })}
                        onMouseLeave={() => setHovered(null)}
                      >
                        {count > 0 ? (
                          <>
                            <div
                              className="rounded-full transition-all duration-150"
                              style={{
                                width:  isHov ? sz + 4 : sz,
                                height: isHov ? sz + 4 : sz,
                                background: isSteel ? '#aaaaaa' : MINT_COLORS[m],
                                boxShadow: isHov
                                  ? `0 0 10px ${MINT_COLORS[m]}, 0 0 20px ${MINT_COLORS[m]}80`
                                  : `0 0 4px ${MINT_COLORS[m]}60`,
                              }}
                            />
                            {/* Count badge for 4+ */}
                            {count >= 4 && (
                              <span
                                className="absolute font-display"
                                style={{ fontSize: 7, color: '#0E0020', fontWeight: 'bold',
                                  top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }}
                              >
                                {count}
                              </span>
                            )}
                          </>
                        ) : (
                          <div
                            className="rounded-full border"
                            style={{ width: 6, height: 6, borderColor: 'rgba(255,255,255,0.1)', background: 'transparent' }}
                          />
                        )}
                      </div>
                    )
                  })}
                </motion.div>
                </div>
              )
            })}
          </div>
        </motion.div>

        {/* Callout cards */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { year: 1909, label: '★ First Wheat',  sub: 'The Lincoln cent begins',   color: '#FFD700' },
            { year: 1954, label: '★ Dad\'s Year',   sub: 'Born the same year',        color: '#FF6B1A' },
            { year: 1957, label: '★ Last Wheat',   sub: 'End of an era',             color: '#00CED1' },
            { year: 2025, label: '★ Modern Shield', sub: 'The collection lives on',   color: '#FF1493' },
          ].map(card => (
            <motion.div
              key={card.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center border rounded-2xl p-4"
              style={{ borderColor: card.color + '40', background: card.color + '08' }}
            >
              <p className="font-display text-lg mb-0.5" style={{ color: card.color }}>{card.year}</p>
              <p className="font-body font-bold text-white/80 text-sm">{card.label}</p>
              <p className="font-body text-white/40 text-xs mt-1">{card.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
