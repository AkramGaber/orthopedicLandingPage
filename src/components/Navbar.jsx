import React, { useEffect, useState } from "react";
import { Menu, X, Phone, BriefcaseMedical } from "lucide-react";
import "./Navbar.css";

export default function Navbar({ t, lang, toggleLang }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { key: "home", href: "#hero" },
    { key: "about", href: "#about" },
    { key: "services", href: "#services" },
    { key: "testimonials", href: "#testimonials" },
    { key: "blog", href: "#blog" },
    { key: "clinic", href: "#clinic" },
    { key: "contact", href: "#contact" },
  ];

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner container">
        {/* Logo */}
        <a
          href="#hero"
          className="navbar__logo"
          onClick={() => handleNavClick("#hero")}
        >
          <div className="navbar__logo-icon">
            <BriefcaseMedical />
          </div>
          <span className="navbar__logo-text">
            {lang === "ar" ? "د. محمد أحمد " : "Dr. Mohamed Ahmed"}
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="navbar__links">
          {navLinks.map(({ key, href }) => (
            <li key={key}>
              <a
                href={href}
                className="navbar__link"
                onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
              >
                {t.nav[key]}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Actions */}
        <div className="navbar__actions">
          <button className="navbar__lang-btn" onClick={toggleLang} aria-label="Switch language">
            <span>{lang === "ar" ? "EN" : "عربي"}</span>
          </button>
          <a
            href={`https://wa.me/${t.clinic.whatsapp}`}
            className="btn btn-primary navbar__cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.nav.book}
          </a>
          <button
            className="navbar__hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile ${menuOpen ? "navbar__mobile--open" : ""}`}>
        {navLinks.map(({ key, href }) => (
          <a
            key={key}
            href={href}
            className="navbar__mobile-link"
            onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
          >
            {t.nav[key]}
          </a>
        ))}
        <div className="navbar__mobile-actions">
          <a
            href={`https://wa.me/${t.clinic.whatsapp}`}
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.nav.book}
          </a>
          <button className="btn btn-outline" onClick={toggleLang}>
            {lang === "ar" ? "English" : "عربي"}
          </button>
        </div>
      </div>
    </nav>
  );
}
