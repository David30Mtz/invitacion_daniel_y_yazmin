import { useEffect } from "react"
import { motion } from "motion/react"

import "./Envelope.css"

function Envelope({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => onFinish(), 5200)
    return () => clearTimeout(timer)
  }, [onFinish])

  return (
    <motion.section
      className="envelope-scene"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.06, filter: "blur(12px)" }}
      transition={{ duration: 1 }}
    >
      <div className="envelope-scene__light" />
      <div className="envelope-scene__grain" />
      <div className="envelope-scene__particle envelope-scene__particle--one" />
      <div className="envelope-scene__particle envelope-scene__particle--two" />
      <div className="envelope-scene__particle envelope-scene__particle--three" />

      <motion.div
        className="envelope-wrapper"
        initial={{ y: 120, opacity: 0, scale: 0.88 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="envelope"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="envelope__back" />

          <motion.div
            className="envelope__letter"
            initial={{ y: 18, opacity: 0 }}
            animate={{ y: "-58%", opacity: 1 }}
            transition={{
              y: { delay: 2.4, duration: 1.35, ease: [0.22, 1, 0.36, 1] },
              opacity: { delay: 2.18, duration: 0.35 },
            }}
          >
            <p>Daniel</p>
            <span>&</span>
            <p>Yazmín</p>
            <div className="envelope__letter-line" />
            <small>17 · octubre · 2026</small>
          </motion.div>

          <div className="envelope__front envelope__front--left" />
          <div className="envelope__front envelope__front--right" />
          <div className="envelope__front envelope__front--bottom" />

          <motion.div
            className="envelope__flap"
            initial={{ rotateX: 0, zIndex: 6 }}
            animate={{ rotateX: -180, zIndex: 1 }}
            transition={{
              rotateX: { delay: 1.45, duration: 1.05, ease: [0.22, 1, 0.36, 1] },
              zIndex: { delay: 2.15 },
            }}
          />

          <motion.div
            className="envelope__seal"
            initial={{ scale: 1, opacity: 1, rotate: 0 }}
            animate={{ scale: [1, 1.1, 0], opacity: [1, 1, 0], rotate: [0, -4, 4, 0] }}
            transition={{ delay: 1.05, duration: 0.7, ease: "easeInOut" }}
          >
            D&Y
          </motion.div>
        </motion.div>

        <motion.div
          className="envelope-wrapper__shadow"
          initial={{ opacity: 0, scaleX: 0.7 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        />
      </motion.div>

      <motion.p
        className="envelope-scene__text"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        Una invitación especial para ti
      </motion.p>
    </motion.section>
  )
}

export default Envelope
