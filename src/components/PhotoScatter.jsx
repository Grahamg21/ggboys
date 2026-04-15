import { useState } from 'react'
import { motion } from 'framer-motion'
import Lightbox from './Lightbox'

const FRAME_THEMES = [
  'fun-frame-orange',
  'fun-frame-purple',
  'fun-frame-teal',
  'fun-frame-magenta',
  'fun-frame-gold',
  'fun-frame-green',
]

export default function PhotoScatter({ photos = [], heading }) {
  const [lightbox, setLightbox] = useState(null) // { src, alt }

  if (!photos.length) return null

  return (
    <div className="py-12 px-4 overflow-x-auto">
      {heading && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-body text-center text-white/30 tracking-[0.3em] uppercase text-xs mb-8"
        >
          {heading}
        </motion.p>
      )}

      <div className="flex flex-wrap justify-center gap-6">
        {photos.map((photo, i) => {
          const theme = FRAME_THEMES[i % FRAME_THEMES.length]
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, rotate: photo.rotate * 0.5 }}
              whileInView={{ opacity: 1, y: 0, rotate: photo.rotate }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: 'easeOut' }}
              whileHover={{ scale: 1.06, rotate: 0, zIndex: 20 }}
              className={`fun-frame ${theme} flex-shrink-0`}
              style={{ width: 200, cursor: 'zoom-in' }}
              onClick={() => setLightbox({ src: photo.src, alt: photo.caption || '' })}
            >
              <img
                src={photo.src}
                alt={photo.caption || ''}
                className="w-full object-cover rounded-sm"
                style={{ height: 160 }}
              />
              {photo.caption && (
                <p className="fun-frame-caption">{photo.caption}</p>
              )}
            </motion.div>
          )
        })}
      </div>

      {lightbox && (
        <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox(null)} />
      )}
    </div>
  )
}
