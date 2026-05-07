import { MessageCircle, User, Phone, MessageSquare, Send } from "lucide-react";
import "./Contact.css";
import { useState } from "react";

export default function Contact({ t }) {
    const c = t.contact;
    const whatsapp = t.clinic.whatsapp;

    const [form, setForm] = useState({name: "", phone: "", message: ""});
    const [errors, setErrors] = useState({});

    const validate = () => {
        const e = {};
        if(!form.name.trim()) e.name = t.lang === "ar" ? "الاسم مطلوب" : "Name is required";
        if(!form.phone.trim()) e.phone = t.lang === "ar" ? "الهاتف مطلوب" : "Phone is required";
        if(!form.message.trim()) e.message = t.lang === "ar" ? "الرسالة مطلوبة" : "Message is required";
        return e;
    };

    const handleChange = (field, value) => {
        setForm((f) => ({ ...f, [field]: value }));
        if(errors[field]) setErrors((e) => { const n = { ...e }; delete n[field]; return n;});
    };

    const handleSubmit = () => {
        const e = validate();
        if(Object.keys(e).length > 0) { setErrors(e); return; };
        const text = `${form.name}\n${form.phone}\n\n${form.message}`;
        window.open(`https://wa.me/${whatsapp}?text=${encodeURIComponent(text)}`, "_blank");
    };


  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact__grid">
          {/* Left info */}
          <div className="contact__info">
            <div className="section-label">
              <MessageCircle size={14} />
              {c.sectionLabel}
            </div>
            <h2 className="section-title">{c.title}</h2>
            <p className="contact__subtitle">{c.subtitle}</p>

            <div className="contact__whatsapp-hint">
              <div className="contact__wa-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.554 4.12 1.523 5.849L.057 23.852a.5.5 0 0 0 .614.612l6.088-1.442A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.64-.502-5.158-1.38l-.37-.215-3.862.916.954-3.797-.237-.386A9.944 9.944 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                </svg>
              </div>
              <div>
                <p className="contact__wa-title">
                  {t.lang === "ar" ? "رد سريع عبر واتساب" : "Quick reply via WhatsApp"}
                </p>
                <p className="contact__wa-desc">
                  {t.lang === "ar"
                    ? "سيتم إرسال نموذجك مباشرةً لواتساب العيادة"
                    : "Your form will be sent directly to the clinic WhatsApp"}
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="contact__form-wrapper">
            <div className="contact__form card">
              {/* Name */}
              <div className={`contact__field ${errors.name ? "contact__field--error" : ""}`}>
                <label className="contact__label">
                  <User size={14} />
                  {c.name}
                </label>
                <input
                  type="text"
                  className="contact__input"
                  placeholder={c.namePh}
                  value={form.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                />
                {errors.name && <span className="contact__error">{errors.name}</span>}
              </div>

              {/* Phone */}
              <div className={`contact__field ${errors.phone ? "contact__field--error" : ""}`}>
                <label className="contact__label">
                  <Phone size={14} />
                  {c.phone}
                </label>
                <input
                  type="tel"
                  className="contact__input"
                  placeholder={c.phonePh}
                  value={form.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  dir="ltr"
                />
                {errors.phone && <span className="contact__error">{errors.phone}</span>}
              </div>

              {/* Message */}
              <div className={`contact__field ${errors.message ? "contact__field--error" : ""}`}>
                <label className="contact__label">
                  <MessageSquare size={14} />
                  {c.message}
                </label>
                <textarea
                  className="contact__input contact__textarea"
                  placeholder={c.messagePh}
                  rows={4}
                  value={form.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                />
                {errors.message && <span className="contact__error">{errors.message}</span>}
              </div>

              <button className="btn btn-whatsapp btn-lg contact__submit" onClick={handleSubmit}>
                <Send size={17} />
                {c.submit}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
