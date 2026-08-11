import { motion } from "motion/react"
import { MailOpen, Sparkles } from "lucide-react"

import "./Intro.css"

function Intro({ onOpen }) {
  return (
    <motion.section
      className="intro"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="intro__overlay" />
      <div className="intro__glow intro__glow--one" />
      <div className="intro__glow intro__glow--two" />

      <motion.div
        className="intro__content"
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.35 }}
      >
        <motion.div
          className="intro__icon"
          animate={{ rotate: [0, 8, -8, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <Sparkles size={20} />
        </motion.div>

        <p className="intro__eyebrow">Tenemos algo especial que compartir contigo</p>

        <h1 className="intro__title">
          Daniel
          <span>&</span>
          Yazmín
        </h1>

        <div className="intro__line" />

        <p className="intro__date">17 · OCTUBRE · 2026</p>

        <motion.button
          className="intro__button"
          onClick={onOpen}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
        >
          <MailOpen size={18} />
          Abrir invitación
        </motion.button>

        <p className="intro__hint">Una experiencia creada especialmente para ti</p>
      </motion.div>
    </motion.section>
  )
}

export default Intro
