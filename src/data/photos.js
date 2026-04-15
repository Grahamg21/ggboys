// ─────────────────────────────────────────────
//  PHOTOS
//  Add your photos to: src/assets/photos/
//  Then reference them here.
//
//  Each photo has:
//    src     – import path (see App.jsx imports)
//    caption – shown below the polaroid
//    rotate  – slight tilt (-4 to 4 degrees looks great)
//    section – which section the photo appears near
//              ('hero', 'pennies', 'bus', 'personal')
// ─────────────────────────────────────────────

// Photos are imported in App.jsx and passed into this structure.
// See the PHOTOS array at the bottom of this file.

// ── Rotate values for organic feel ──────────
const rotations = [-3, 2, -1.5, 3.5, -2.5, 1, -4, 2.5, -1, 3]

export function buildPhotos(imports) {
  return imports.map((img, i) => ({
    ...img,
    rotate: img.rotate ?? rotations[i % rotations.length],
  }))
}
