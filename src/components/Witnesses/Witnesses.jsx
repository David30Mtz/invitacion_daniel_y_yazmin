import { motion } from "motion/react"
import { HeartHandshake } from "lucide-react"
import "./Witnesses.css"

const witnesses = [ "Rosario Torres Rios", "José Antonio Ledesma Guerrero"]

function Witnesses() {
  return (
    <section className="witnesses">
      <motion.div
        className="witnesses__content"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.9 }}
      >
        <div className="witnesses__icon"><HeartHandshake size={28} strokeWidth={1.3} /></div>
        <p className="witnesses__eyebrow">Nos acompañan en este gran paso</p>
        <h2>Nuestros testigos</h2>
        <div className="witnesses__line"><span /><div>♥</div><span /></div>
        <div className="witnesses__names">
          {witnesses.map((name) => <p key={name}>{name}</p>)}
        </div>
      </motion.div>
    </section>
  )
}

export default Witnesses
