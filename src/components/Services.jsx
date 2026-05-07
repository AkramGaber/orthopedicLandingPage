import { Bone, Activity, Zap, Shield, Heart, Star } from "lucide-react";
import "./Services.css";

const iconMap = { Bone, Activity, Zap, Shield, Heart, Star };

const gradients = [
    "linear-gradient(135deg,#e0f6ff,#b8ecff)",
    "linear-gradient(135deg,#e8f5e9,#b8e8c0)",
    "linear-gradient(135deg,#fff3e0,#ffe0b2)",
    "linear-gradient(135deg,#fce4ec,#f8bbd0)",
    "linear-gradient(135deg,#ede7f6,#d1c4e9)",
    "linear-gradient(135deg,#e1f5fe,#b3e5fc)",
];

const iconColors = ["#00AEEF","#43a047","#fb8c00","#e53935","#7b1fa2","#0288d1"];

export default function Services({ t }) {
    const s = t.services;
  return (
    <section id="services" className="section services">
      <div className="container">
        <div className="text-center services__header">
          <div className="section-label">
            <span>⚕</span>
            {s.sectionLabel}
          </div>
          <h2 className="section-title">{s.title}</h2>
          <p className="section-subtitle">{s.subtitle}</p>
        </div>

        <div className="services__grid">
          {s.items.map((item, i) => {
            const Icon = iconMap[item.icon] || Star;
            return (
              <div key={i} className="services__card card">
                <div
                  className="services__icon"
                  style={{ background: gradients[i % gradients.length] }}
                >
                  <Icon size={26} color={iconColors[i % iconColors.length]} strokeWidth={1.8} />
                </div>
                <h3 className="services__card-title">{item.title}</h3>
                <p className="services__card-desc">{item.desc}</p>
                {/* <div className="services__card-link">
                  <span>{t.lang === "ar" ? "اعرف أكثر" : "Learn more"}</span>
                  <span className="services__arrow">{t.dir === "rtl" ? "←" : "→"}</span>
                </div> */}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}
