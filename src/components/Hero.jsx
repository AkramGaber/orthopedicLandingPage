import { Calendar, MessageCircle, ChevronDown, Award, Users, ThumbsUp } from "lucide-react";
import doctorImage from '../assets/doctor.png';
import "./Hero.css";

export default function Hero({ t }) {
    const h = t.hero;
    const whatsapp = t.clinic.whatsapp;

    const scrollToAbout = () => {
        const el = document.querySelector("#about");
        if(el) el.scrollIntoView({ behavior: "smooth" });
    };

    const stats = [
        { icon: Award, value: h.stat1, label: h.stat1Label },
        { icon: Users, value: h.stat2, label: h.stat2Label },
        { icon: ThumbsUp, value: h.stat3, label: h.stat3Label },
    ];


  return (
    <section id="hero" className="hero">
      {/* Background */}
      <div className="hero__bg">
        <div className="hero__bg-gradient" />
        <div className="hero__bg-pattern" />
        <div className="hero__bg-circle hero__bg-circle--1" />
        <div className="hero__bg-circle hero__bg-circle--2" />
      </div>

      <div className="container hero__container">
        <div className="hero__content">
          {/* Badge */}
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            <span>{h.tagline}</span>
          </div>

          {/* Title */}
          <h1 className="hero__name">{h.name}</h1>
          <p className="hero__title">{h.title}</p>
          <p className="hero__subtitle">{h.subtitle}</p>

          {/* CTA Buttons */}
          <div className="hero__ctas">
            <a
              href="#contact"
              className="btn btn-primary btn-lg hero__cta-book"
              onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
            >
              <Calendar size={18} />
              {h.cta1}
            </a>
            <a
              href={`https://wa.me/${whatsapp}`}
              className="btn btn-whatsapp btn-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.554 4.12 1.523 5.849L.057 23.852a.5.5 0 0 0 .614.612l6.088-1.442A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.64-.502-5.158-1.38l-.37-.215-3.862.916.954-3.797-.237-.386A9.944 9.944 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
              {h.cta2}
            </a>
          </div>

          {/* Stats */}
          <div className="hero__stats">
            {stats.map(({ icon: Icon, value, label }, i) => (
              <div key={i} className="hero__stat">
                <div className="hero__stat-icon">
                  <Icon size={16} />
                </div>
                <div>
                  <div className="hero__stat-value">{value}</div>
                  <div className="hero__stat-label">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual side */}
        <div className="hero__visual">
          <div className="hero__img-wrapper">
            <div className="hero__img-bg" />
            <div className="hero__img-frame">
              <div className="hero__img-placeholder">
                <img
                    src={doctorImage}
                    alt="Dr. Mohamed Photo"
                    className="hero__doctor-img"
                />
                <p>د. محمد أحمد شرف الدين</p>
              </div>
            </div>
            {/* Floating cards */}
            <div className="hero__float hero__float--1">
              <div className="hero__float-icon">✓</div>
            </div>
            <div className="hero__float hero__float--2">
              <div className="hero__float-icon">⭐</div>
              <div>
                <div className="hero__float-title">4.9 / 5</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down */}
      <button className="hero__scroll-down" onClick={scrollToAbout} aria-label="scroll down">
        <ChevronDown size={20} />
      </button>
    </section>
  )
}
