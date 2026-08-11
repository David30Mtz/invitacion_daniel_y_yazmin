import { useEffect, useState } from "react"
import { motion } from "motion/react"

import "./Countdown.css"

const eventDate = new Date("2026-10-17T18:00:00")

function calculateTimeLeft() {
  const difference = eventDate.getTime() - new Date().getTime()

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  }
}

function CountdownItem({ number, label, delay }) {
  return (
    <motion.div
      className="countdown__item"
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="countdown__number-wrapper">
        <span className="countdown__shine" />
        <motion.span
          key={number}
          className="countdown__number"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          {String(number).padStart(2, "0")}
        </motion.span>
      </div>
      <span className="countdown__label">{label}</span>
    </motion.div>
  )
}

function Countdown() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const interval = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="countdown">
      <div className="countdown__decoration countdown__decoration--one" />
      <div className="countdown__decoration countdown__decoration--two" />

      <motion.div
        className="countdown__heading"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 1 }}
      >
        <p className="countdown__eyebrow">Cada instante nos acerca</p>
        <h2>El gran día</h2>
        <div className="countdown__line"><span /><div>♥</div><span /></div>
        <p className="countdown__message">Estamos contando los días para celebrar este momento contigo.</p>
      </motion.div>

      <div className="countdown__grid">
        <CountdownItem number={timeLeft.days} label="Días" delay={0} />
        <CountdownItem number={timeLeft.hours} label="Horas" delay={0.1} />
        <CountdownItem number={timeLeft.minutes} label="Minutos" delay={0.2} />
        <CountdownItem number={timeLeft.seconds} label="Segundos" delay={0.3} />
      </div>

      <motion.p className="countdown__date" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5, duration: 1 }}>
        Sábado, 17 de octubre de 2026 · 6:00 PM
      </motion.p>
    </section>
  )
}

export default Countdown
