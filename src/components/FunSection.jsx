import { motion } from 'framer-motion'
import zombieImg   from '../assets/photos/Dad/Dad/zombie.png'
import raygunImg   from '../assets/photos/Dad/Dad/raygun.png'
import rickMortyImg from '../assets/photos/Dad/Dad/rick.png'

// ── CoD Zombies card ─────────────────────────────────────────
function ZombieCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.03 }}
      className="relative overflow-hidden rounded-2xl p-6 flex flex-col gap-4 border border-green-900/60"
      style={{
        background: 'linear-gradient(135deg, #0a1a00 0%, #0d2b0a 50%, #001a08 100%)',
        boxShadow: '0 0 30px rgba(57,255,20,0.12), inset 0 0 60px rgba(0,0,0,0.4)',
        flex: '1 1 300px',
        maxWidth: 420,
      }}
    >
      {/* Scanline overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.5) 2px, rgba(0,0,0,0.5) 4px)',
        }}
      />

      {/* Round counter */}
      <div className="flex items-center gap-3">
        <div
          className="font-display text-5xl font-bold"
          style={{ color: '#39FF14', textShadow: '0 0 20px #39FF14, 0 0 40px #39FF14' }}
        >
          ROUND
        </div>
        <div
          className="font-display text-7xl font-bold leading-none"
          style={{ color: '#FFD700', textShadow: '0 0 20px #FFD700, 0 0 40px #FF6B1A' }}
        >
          72
        </div>
      </div>

      {/* Zombie — upper-left corner */}
      <img
        src={zombieImg}
        alt="CoD Zombie"
        className="absolute pointer-events-none"
        style={{ top: -10, left: -10, width: 140, opacity: 0.92, filter: 'drop-shadow(0 0 12px #39FF14aa)' }}
      />

      {/* Ray Gun — lower-right corner */}
      <img
        src={raygunImg}
        alt="Ray Gun"
        className="absolute pointer-events-none"
        style={{ bottom: -8, right: -8, width: 130, opacity: 0.88, filter: 'drop-shadow(0 0 10px #39FF14aa)', transform: 'scaleX(-1)' }}
      />

      {/* Zombie emoji row */}
      <div className="flex gap-1 text-2xl mt-16">
        {[0,1,2,3,4].map(i => (
          <motion.span
            key={i}
            animate={{ y: [0, -4, 0] }}
            transition={{ repeat: Infinity, duration: 1.2, delay: i * 0.2 }}
          >
            🧟
          </motion.span>
        ))}
        <span className="text-2xl ml-1">💀</span>
      </div>

      <div>
        <p className="font-display text-green-400 text-lg mb-1">Still Standing</p>
        <p className="font-body text-green-300/70 text-sm leading-relaxed">
          Most people tap out before Round 20. Dad's on Round 72 and still headshoting every
          obstacle life throws at him. No jug needed — just pure survivor instinct.
        </p>
      </div>

      <div className="border-t border-green-900 pt-3">
        <p className="font-body text-green-500/60 text-xs italic">
          "Maxis would be proud." — Some zombie somewhere
        </p>
      </div>

      {/* Corner decoration */}
      <div
        className="absolute top-3 right-4 font-display text-xs opacity-30"
        style={{ color: '#39FF14' }}
      >
        ██ CLASSIFIED
      </div>
    </motion.div>
  )
}

// ── Rick & Morty card ────────────────────────────────────────
function RickMortyCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.15 }}
      whileHover={{ scale: 1.03 }}
      className="relative overflow-hidden rounded-2xl p-6 flex flex-col gap-4 border border-cyan-900/60"
      style={{
        background: 'linear-gradient(135deg, #00101a 0%, #001a2e 50%, #080020 100%)',
        boxShadow: '0 0 30px rgba(0,206,209,0.12), inset 0 0 60px rgba(0,0,0,0.4)',
        flex: '1 1 300px',
        maxWidth: 420,
      }}
    >
      {/* Portal swirl */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
        className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-15 pointer-events-none"
        style={{
          background: 'conic-gradient(from 0deg, #00CED1, #39FF14, #00CED1)',
          filter: 'blur(8px)',
        }}
      />

      {/* Rick & Morty illustration */}
      <div className="flex justify-center">
        <img
          src={rickMortyImg}
          alt="Rick and Morty"
          className="w-52 rounded-xl"
          style={{ filter: 'drop-shadow(0 0 12px #00CED1aa)', mixBlendMode: 'lighten' }}
        />
      </div>

      {/* Quote bubble */}
      <div>
        <p
          className="font-display text-2xl mb-1"
          style={{ color: '#00CED1', textShadow: '0 0 16px #00CED1' }}
        >
          "Wubba lubba dub dub!"
        </p>
        <p className="font-body text-cyan-300/60 text-xs">— Rick Sanchez, C-137</p>
      </div>

      {/* Gary joke — Rick & Morty actually has a character named Gary! */}
      <div
        className="rounded-xl p-4 border border-cyan-900/40"
        style={{ background: 'rgba(0,206,209,0.06)' }}
      >
        <p className="font-body text-white/80 text-sm leading-relaxed mb-2">
          We searched every dimension in the multiverse for the greatest Gary.
        </p>
        <p className="font-body text-white/80 text-sm leading-relaxed mb-2">
          C-137. C-2. The Cronenberg world. Even that weird dimension where everyone
          is a piece of furniture.
        </p>
        <p className="font-body text-gd-gold font-bold text-sm">
          Every single one pointed here. Happy 72nd, Dad. 🛸
        </p>
      </div>

      {/* Morty freakout meter */}
      <div>
        <p className="font-body text-cyan-400/60 text-xs mb-1 uppercase tracking-widest">
          Morty Freakout Level on his birthday
        </p>
        <div className="h-2 rounded-full bg-white/10 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '92%' }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1.2, ease: 'easeOut' }}
            className="h-full rounded-full"
            style={{ background: 'linear-gradient(90deg, #39FF14, #00CED1, #FF1493)' }}
          />
        </div>
        <p className="font-body text-white/30 text-xs mt-1 text-right">Oh geez, oh man — 92%</p>
      </div>
    </motion.div>
  )
}

// ── Main export ──────────────────────────────────────────────
export default function FunSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="font-body text-white/30 tracking-[0.3em] uppercase text-xs mb-2">
            Things we do together
          </p>
          <h2
            className="font-display gradient-text-cool"
            style={{ fontSize: 'clamp(26px, 4vw, 48px)' }}
          >
            Dad Approved Activities
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          <ZombieCard />
          <RickMortyCard />
        </div>
      </div>
    </section>
  )
}
