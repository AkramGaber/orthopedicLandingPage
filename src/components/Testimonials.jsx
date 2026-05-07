import { Star, Quote } from "lucide-react";
import "./Testimonials.css";

export default function Testimonials({ t }) {
    const ts = t.testimonials;
  return (
    <section id="testimonials" className="section testimonials">
      <div className="container">
        <div className="text-center testimonials__header">
          <div className="section-label">
            <Star size={14} />
            {ts.sectionLabel}
          </div>
          <h2 className="section-title">{ts.title}</h2>
          <p className="section-subtitle">{ts.subtitle}</p>
        </div>

        <div className="testimonials__grid">
          {ts.items.map((item, i) => (
            <div key={i} className="testimonials__card card">
              <div className="testimonials__quote-icon">
                <Quote size={20} />
              </div>
              <div className="testimonials__stars">
                {Array.from({ length: item.rating }).map((_, s) => (
                  <Star key={s} size={14} fill="#FFC107" color="#FFC107" />
                ))}
              </div>
              <p className="testimonials__text">"{item.text}"</p>
              <div className="testimonials__footer">
                <div className="testimonials__avatar">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <div className="testimonials__name">{item.name}</div>
                  <div className="testimonials__label">{item.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
