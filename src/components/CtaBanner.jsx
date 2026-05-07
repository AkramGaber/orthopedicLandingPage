import { Calendar } from "lucide-react";
import "./CtaBanner.css";

export default function CtaBanner({ t }) {
    const c = t.cta;
    
    const handleScroll = () => {
        document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
    };


  return (
    <section className="cta-banner">
      <div className="cta-banner__bg">
        <div className="cta-banner__circle cta-banner__circle--1" />
        <div className="cta-banner__circle cta-banner__circle--2" />
      </div>
      <div className="container cta-banner__inner">
        <div className="cta-banner__content">
          <h2 className="cta-banner__title">{c.title}</h2>
          <p className="cta-banner__subtitle">{c.subtitle}</p>
        </div>
        <button
          className="btn btn-white btn-lg cta-banner__btn"
          onClick={handleScroll}
        >
          <Calendar size={20} />
          {c.btn}
        </button>
      </div>
    </section>
  )
}
