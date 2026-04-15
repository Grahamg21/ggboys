import Hero          from './components/Hero'
import VideoSection   from './components/VideoSection'
import PennyShowcase  from './components/PennyShowcase'
import PennyTimeline  from './components/PennyTimeline'
import PhotoScatter   from './components/PhotoScatter'
import PersonalNote   from './components/PersonalNote'
import FunSection     from './components/FunSection'
import SwirlDivider   from './components/SwirlDivider'

// ── Photos ───────────────────────────────────────────────────
import p1  from './assets/photos/Dad/Dad/20150415_140814_Original.jpg'
import p2  from './assets/photos/Dad/Dad/FullSizeRender.jpeg'
import p3  from './assets/photos/Dad/Dad/IMG_0913.jpeg'
import p4  from './assets/photos/Dad/Dad/IMG_1034.jpeg'
import p5  from './assets/photos/Dad/Dad/IMG_1470.jpeg'
import p6  from './assets/photos/Dad/Dad/IMG_1509.jpeg'
import p7  from './assets/photos/Dad/Dad/IMG_1647.jpeg'
import p8  from './assets/photos/Dad/Dad/IMG_2164.jpeg'
import p9  from './assets/photos/Dad/Dad/IMG_4578.jpeg'
import p10 from './assets/photos/Dad/Dad/IMG_4599.jpeg'

// Scattered between sections — feel free to adjust captions & rotations
const photosTop = [
  { src: p1,  caption: '',  rotate: -2   },
  { src: p2,  caption: '',  rotate:  2.5 },
  { src: p3,  caption: '',  rotate: -1.5 },
]

const photosMiddle = [
  { src: p4,  caption: '',  rotate:  3   },
  { src: p5,  caption: '',  rotate: -2.5 },
  { src: p6,  caption: '',  rotate:  1.5 },
  { src: p7,  caption: '',  rotate: -3   },
]

const photosBottom = [
  { src: p8,  caption: '',  rotate:  2   },
  { src: p9,  caption: '',  rotate: -1   },
  { src: p10, caption: '',  rotate:  3.5 },
]

export default function App() {
  return (
    <main>
      <Hero />

      <SwirlDivider />

      <VideoSection />

      <SwirlDivider />

      <PhotoScatter photos={photosTop} />

      <PennyShowcase />

      <SwirlDivider />

      <PhotoScatter photos={photosMiddle} />

      <PennyTimeline />

      <SwirlDivider />

      <FunSection />

      <SwirlDivider />

      <PhotoScatter photos={photosBottom} />

      <PersonalNote />
    </main>
  )
}
