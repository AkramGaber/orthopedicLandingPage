import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import "./ClinicInfo.css";

export default function ClinicInfo({ t }) {
    const c = t.clinic;
  return (
    <section id="clinic" className="section clinic">
      <div className="container">
        <div className="text-center clinic__header">
          <div className="section-label">
            <MapPin size={14} />
            {c.sectionLabel}
          </div>
          <h2 className="section-title">{c.title}</h2>
        </div>

        <div className="clinic__grid">
          {/* Info cards */}
          <div className="clinic__info">
            {/* Address */}
            <div className="clinic__info-card">
              <div className="clinic__info-icon">
                <MapPin size={20} />
              </div>
              <div>
                <div className="clinic__info-label">{c.addressLabel}</div>
                <div className="clinic__info-value">{c.address}</div>
              </div>
            </div>

            {/* Phone */}
            <div className="clinic__info-card">
              <div className="clinic__info-icon">
                <Phone size={20} />
              </div>
              <div>
                <div className="clinic__info-label">{c.phoneLabel}</div>
                <a href={`tel:${c.phone}`} className="clinic__info-value clinic__phone">
                  {c.phone}
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="clinic__info-card">
              <div className="clinic__info-icon clinic__info-icon--wa">
                <MessageCircle size={20} />
              </div>
              <div>
                <div className="clinic__info-label">WhatsApp</div>
                <a
                  href={`https://wa.me/${c.whatsapp}`}
                  className="clinic__info-value clinic__phone"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {c.whatsapp}
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="clinic__hours-card">
              <div className="clinic__hours-header">
                <Clock size={18} />
                <h4>{c.hoursLabel}</h4>
              </div>
              <div className="clinic__hours-list">
                {c.hours.map((h, i) => (
                  <div key={i} className="clinic__hour-row">
                    <span className="clinic__hour-day">{h.day}</span>
                    <span
                      className={`clinic__hour-time ${h.time === "مغلق" || h.time === "Closed" ? "clinic__hour-time--closed" : ""}`}
                    >
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="clinic__map">
            <div className="clinic__map-inner">
              <div className="clinic__map-placeholder">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                  <circle cx="32" cy="28" r="12" fill="rgba(0,174,239,0.15)" stroke="#00AEEF" strokeWidth="2"/>
                  <path d="M32 16v24" stroke="#00AEEF" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M20 28c0-6.627 5.373-12 12-12s12 5.373 12 12c0 8-12 20-12 20S20 36 20 28z" stroke="#0A2540" strokeWidth="2" fill="rgba(0,174,239,0.08)"/>
                  <circle cx="32" cy="28" r="4" fill="#00AEEF"/>
                </svg>
                <p>{t.lang === "ar" ? "العنوان على الخريطة" : "Get directions on Map"}</p>
                <span>{c.address}</span>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(c.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  {t.lang === "ar" ? "افتح في خرائط جوجل" : "Open in Google Maps"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
