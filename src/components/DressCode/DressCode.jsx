import { motion } from "motion/react"
import { Shirt, Sparkles } from "lucide-react"

import "./DressCode.css"

function DressCode() {
  return (
    <section className="dress-code">
      <div className="dress-code__decoration dress-code__decoration--one" />
      <div className="dress-code__decoration dress-code__decoration--two" />

      <motion.div
        className="dress-code__content"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div className="dress-code__icon">
          <Shirt size={28} strokeWidth={1.4} />
        </div>

        <p className="dress-code__eyebrow">
          Código de vestimenta
        </p>

        <h2>Viste como tú quieras</h2>

        <div className="dress-code__divider">
          <span />
          <Sparkles size={15} strokeWidth={1.3} />
          <span />
        </div>

        <p className="dress-code__description">
          Queremos que disfrutes este día sintiéndote cómodo y siendo tú mismo.
          El estilo de vestimenta es completamente libre, únicamente te pedimos
          reservar algunos colores especiales para los novios.
        </p>

        <div className="dress-code__rules">
          <motion.div
            className="dress-code__card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <span className="dress-code__card-label">
              Mujeres
            </span>

            <h3>Evitar</h3>

            <div className="dress-code__colors">
              <div className="dress-code__color">
                <span className="dress-code__swatch dress-code__swatch--white" />
                <p>Blanco</p>
              </div>

              <div className="dress-code__color">
                <span className="dress-code__swatch dress-code__swatch--red" />
                <p>Rojo</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="dress-code__card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            <span className="dress-code__card-label">
              Hombres
            </span>

            <h3>Evitar</h3>

            <div className="dress-code__colors dress-code__colors--center">
              <div className="dress-code__color">
                <span className="dress-code__swatch dress-code__swatch--wine" />
                <p>Vino</p>
              </div>
            </div>
          </motion.div>
        </div>

        <p className="dress-code__note">
          Gracias por ayudarnos a conservar estos colores para un momento tan especial.
        </p>
      </motion.div>
    </section>
  )
}

export default DressCode