import { motion } from 'framer-motion'

export default function PersonalNote() {
  return (
    <section className="py-16 px-4 relative">
      <div className="absolute inset-0 pointer-events-none tiedye-bg opacity-20" />

      <div className="max-w-xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center border border-white/10 rounded-3xl p-10"
          style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(8px)' }}
        >
          {/* Grateful Dead dancing bear */}
          <div className="text-5xl mb-5">🐻</div>

          <p
            className="font-display gradient-text mb-4"
            style={{ fontSize: 'clamp(20px, 4vw, 32px)' }}
          >
            "What a long, strange trip it's been."
          </p>

          <p className="font-body text-white/60 text-sm leading-relaxed mb-6">
            {/* ── Update this message ── */}
            72 years of living with curiosity, collecting with passion, and driving in style.
            Here's to many more miles in the bus, many more finds in the coin jar,
            and every adventure still ahead.
          </p>

          <p className="font-body text-gd-gold font-bold mb-6">
            Happy Birthday, Dad 🎉
          </p>

          <p className="font-display tracking-[0.4em] uppercase text-xs" style={{ color: 'rgba(255,215,0,0.35)' }}>
            ggboys.org
          </p>
        </motion.div>
      </div>
    </section>
  )
}
