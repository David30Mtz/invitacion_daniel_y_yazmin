import { motion } from "motion/react"
import { CalendarDays, Clock3, MapPin, Navigation, Sparkles } from "lucide-react"

import "./EventInfo.css"

const event = {
  type: "Ceremonia y celebración",
  date: "Sábado, 17 de octubre de 2026",
  time: "A partir de las 6:00 PM",
  place: 'Quinta "Las tres Mercedes"',
  address: "Blvd. Metropolitan, 37683 Los Álamos, Guanajuato",
  mapUrl: "https://maps.app.goo.gl/aZRfSfNTxetjyEJX7?g_st=aw",
}

function EventInfo() {
  return (
    <section className="event-info">
      <div className="event-info__ambient event-info__ambient--one" />
      <div className="event-info__ambient event-info__ambient--two" />

      <motion.header
        className="event-info__header"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 1 }}
      >
        <p className="event-info__eyebrow">Guarda la fecha</p>
        <h2>Detalles del evento</h2>
        <div className="event-info__line"><span /><div>♥</div><span /></div>
        <p className="event-info__description">La ceremonia y la celebración se realizarán en el mismo lugar. Nos encantará compartir contigo cada momento de este día tan especial.</p>
      </motion.header>

      <motion.article
        className="event-card event-card--single"
        initial={{ opacity: 0, y: 55 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="event-card__glow" />
        <div className="event-card__icon"><Sparkles size={23} strokeWidth={1.4} /></div>
        <p className="event-card__eyebrow">{event.type}</p>
        <h3>{event.place}</h3>
        <div className="event-card__divider"><span /><div>✦</div><span /></div>
        <div className="event-card__details">
          <div className="event-card__detail"><CalendarDays size={18} strokeWidth={1.5} /><span>{event.date}</span></div>
          <div className="event-card__detail"><Clock3 size={18} strokeWidth={1.5} /><span>{event.time}</span></div>
          <div className="event-card__detail"><MapPin size={18} strokeWidth={1.5} /><span>{event.address}</span></div>
        </div>
        <a className="event-card__button" href={event.mapUrl} target="_blank" rel="noreferrer">
          <Navigation size={16} /> Ver ubicación
        </a>
      </motion.article>
    </section>
  )
}

export default EventInfo
