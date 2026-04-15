import { motion } from 'framer-motion'

// ─────────────────────────────────────────────────────
//  PhotoScatter — renders a horizontal strip of
//  polaroid-style photos with staggered scroll reveals.
//
//  Props:
//    photos  – array of { src, caption, rotate }
//    heading – optional section heading above the photos
// ─────────────────────────────────────────────────────

export default function PhotoScatter({ photos = [], heading }) {
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
        {photos.map((photo, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40, rotate: photo.rotate * 0.5 }}
            whileInView={{ opacity: 1, y: 0, rotate: photo.rotate }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: i * 0.1, duration: 0.6, ease: 'easeOut' }}
            whileHover={{ scale: 1.06, rotate: 0, zIndex: 20 }}
            className="polaroid flex-shrink-0"
            style={{ width: 200, cursor: 'pointer' }}
          >
            <img
              src={photo.src}
              alt={photo.caption || ''}
              className="w-full object-cover"
              style={{ height: 160 }}
            />
            {photo.caption && (
              <p
                className="text-center mt-2 text-gray-700 font-body"
                style={{ fontSize: 12, fontWeight: 600 }}
              >
                {photo.caption}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}
