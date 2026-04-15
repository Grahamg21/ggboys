import { useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Lightbox({ src, alt = '', onClose }) {
  // Close on Escape key
  useEffect(() => {
    const handler = e => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50"
      style={{ background: 'rgba(0,0,0,0.88)', backdropFilter: 'blur(6px)' }}
      onClick={onClose}
    >
      <motion.img
        initial={{ opacity: 0, scale: 0.88 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.22 }}
        src={src}
        alt={alt}
        style={{
          maxWidth: '90vw',
          maxHeight: '90vh',
          borderRadius: 8,
          boxShadow: '0 0 60px rgba(184,115,51,0.4)',
          cursor: 'default',
        }}
        onClick={e => e.stopPropagation()}
      />
      <button
        onClick={onClose}
        style={{
          position: 'fixed', top: 24, right: 32,
          background: 'none', border: 'none',
          color: 'rgba(255,255,255,0.7)', fontSize: 36,
          lineHeight: 1, cursor: 'pointer',
        }}
      >
        ×
      </button>
    </div>
  )
}
