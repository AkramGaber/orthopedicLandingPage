import { CheckCircle, Building2, GraduationCap, Clock } from "lucide-react";
import "./About.css";
import doctorImage from "../assets/doctor.png";

export default function About({ t }) {
  const a = t.about;

  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about__grid">
          {/* Left — Image */}
          <div className="about__visual">
            <div className="about__img-wrapper">
              <div className="about__img-main">
                <img
                  src={doctorImage}
                  alt="Dr. Mohamed Sharaf El-deen"
                  aria-label="Doctor's Photo"
                />
                <span>د. محمد أحمد شرف الدين</span>
              </div>
              <div className="about__exp-badge">
                <Clock size={18} />
                <div>
                  <strong>{a.exp}</strong>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Content */}
          <div className="about__content">
            <div className="section-label">
              <GraduationCap size={14} />
              {a.sectionLabel}
            </div>
            <h2 className="section-title">{a.title}</h2>
            <p className="about__bio">{a.bio}</p>
            <p className="about__bio">{a.bio2}</p>

            {/* Certifications */}
            <div className="about__block">
              <h4 className="about__block-title">
                <CheckCircle size={16} />
                {t.lang === "ar"
                  ? "المؤهلات والشهادات"
                  : "Certifications & Qualifications"}
              </h4>
              <ul className="about__list">
                {a.certs.map((cert, i) => (
                  <li key={i} className="about__list-item">
                    <span className="about__list-dot" />
                    {cert}
                  </li>
                ))}
              </ul>
            </div>

            {/* Hospitals */}
            <div className="about__block">
              <h4 className="about__block-title">
                <Building2 size={16} />
                {a.hospitalsLabel}
              </h4>
              <div className="about__hospitals">
                {a.hospitals.map((h, i) => (
                  <span key={i} className="about__hospital-tag">
                    {h}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
