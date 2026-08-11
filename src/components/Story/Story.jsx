import { motion } from "motion/react"

import "./Story.css"

const moments = [
  {
    label: "El comienzo",
    title: "Nuestra primera foto juntos",
    text: "Aquí fue nuestra primera fotografía juntos como novios, sabiendo que con el paso del tiempo nos ibamos a enamorar con una gran locura. Ahora daremos un gran paso en nuestras vidas.",
    image: "/images/inicio-historia.jpeg",
  },
  {
    label: "Nuestro camino",
    title: "Recuerdos que se quedan",
    text: "Viajes, risas y momentos compartidos fueron escribiendo una historia que hoy queremos celebrar junto a las personas que forman parte de nuestra vida.",
    image: "/images/foto2.jpeg",
  },
  {
    label: "El gran sí",
    title: "Comienza una nueva etapa",
    text: "Con ilusión y mucho amor decidimos dar el siguiente paso: unir nuestras vidas y comenzar juntos una nueva aventura.",
    image: "/images/foto3.jpeg",
  },
]

function StoryCard({ moment, index }) {
  const isEven = index % 2 === 0

  return (
    <motion.article
      className={`story-card ${isEven ? "story-card--left" : "story-card--right"}`}
      initial={{ opacity: 0, x: isEven ? -70 : 70, rotate: isEven ? -2 : 2 }}
      whileInView={{ opacity: 1, x: 0, rotate: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="story-card__photo"
        whileHover={{ y: -8, rotate: isEven ? -1.5 : 1.5 }}
        transition={{ duration: 0.35 }}
      >
        <img src={moment.image} alt={moment.title} />
        <span className="story-card__year">{moment.label}</span>
      </motion.div>

      <div className="story-card__content">
        <span className="story-card__number">0{index + 1}</span>
        <h3>{moment.title}</h3>
        <div className="story-card__line" />
        <p>{moment.text}</p>
      </div>
    </motion.article>
  )
}

function Story() {
  return (
    <section className="story">
      <div className="story__background-text">Historia</div>

      <motion.header
        className="story__header"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 1 }}
      >
        <p>Nuestros mejores momentos</p>
        <h2>Nuestra historia</h2>
        <div className="story__divider"><span /><div>✦</div><span /></div>
        <p className="story__description">Algunos recuerdos que nos trajeron hasta este momento.</p>
      </motion.header>

      <div className="story__timeline">
        <div className="story__timeline-line" />
        {moments.map((moment, index) => <StoryCard key={moment.title} moment={moment} index={index} />)}
      </div>
    </section>
  )
}

export default Story
