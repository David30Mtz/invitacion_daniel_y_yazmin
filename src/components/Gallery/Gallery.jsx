import { motion } from "motion/react"
import "./Gallery.css"

const photos = [
  { src: "/images/foto1.jpeg", alt: "Daniel y Yazmín junto al mar" },
  { src: "/images/foto4.jpeg", alt: "Daniel y Yazmín celebrando juntos" },
  { src: "/images/foto5.jpeg", alt: "Daniel y Yazmín en uno de sus recuerdos juntos" },
  { src: "/images/foto2.jpeg", alt: "Daniel y Yazmín de viaje" },
]

function Gallery() {
  return (
    <section className="gallery">
      <motion.header
        className="gallery__header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: .9 }}
      >
        <p>Momentos que guardamos para siempre</p>
        <h2>Nuestros recuerdos</h2>
        <div className="gallery__line"><span /><div>✦</div><span /></div>
      </motion.header>

      <div className="gallery__grid">
        {photos.map((photo, index) => (
          <motion.figure
            key={photo.src}
            className={`gallery__item gallery__item--${index + 1}`}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: .75, delay: index * .08 }}
          >
            <img src={photo.src} alt={photo.alt} loading="lazy" />
          </motion.figure>
        ))}
      </div>
    </section>
  )
}

export default Gallery
