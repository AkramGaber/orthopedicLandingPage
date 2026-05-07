import { BookOpen, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import "./Blog.css";

export default function Blog({ t }) {
    const b = t.blog;
    const isRtl = t.dir === "rtl";
  return (
    <section id="blog" className="section blog">
      <div className="container">
        <div className="text-center blog__header">
          <div className="section-label">
            <BookOpen size={14} />
            {b.sectionLabel}
          </div>
          <h2 className="section-title">{b.title}</h2>
          <p className="section-subtitle">{b.subtitle}</p>
        </div>

        <div className="blog__grid">
          {b.items.map((item, i) => (
            <article key={i} className="blog__card card">
              {/* Placeholder image area */}
              <div className="blog__img">
                <div className="blog__img-inner">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                        <rect width="48" height="48" rx="12" fill="rgba(0,174,239,0.1)"/>
                        <path d="M16 24h16M16 18h16M16 30h10" stroke="#00AEEF" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                </div>
                <span className="blog__tag">{item.tag}</span>
              </div>

              <div className="blog__body">
                <h3 className="blog__title">{item.title}</h3>
                <p className="blog__excerpt">{item.excerpt}</p>
                <div className="blog__meta">
                  <div className="blog__time">
                    <Clock size={13} />
                    {item.time}
                  </div>
                  <button className="blog__read-more">
                    {isRtl ? "اقرأ المزيد" : "Read more"}
                    {isRtl ? <ArrowLeft size={14} /> : <ArrowRight size={14} />}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
