import { Phone, MapPin, Mail } from "lucide-react";
import "./Footer.css";

const SocialFacebook = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const SocialInstagram = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const SocialYoutube = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
  </svg>
);

const SocialX = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const socialLinks = [
  { Icon: SocialFacebook, href: "https://www.facebook.com/Mohamedsharaf0", label: "Facebook" },
  { Icon: SocialInstagram, href: "https://www.instagram.com/mhmd_sharaff/", label: "Instagram" },
  { Icon: SocialYoutube, href: "https://www.youtube.com/watch?v=jNxABzfbDzA", label: "YouTube" },
  { Icon: SocialX, href: "https://x.com/Mohamed0_sharaf", label: "X" },
];

export default function Footer({ t, lang }) {
  const f = t.footer;
  const nav = t.nav;
  const c = t.clinic;

  const links = [
    { key: "home", href: "#hero" },
    { key: "about", href: "#about" },
    { key: "services", href: "#services" },
    { key: "testimonials", href: "#testimonials" },
    { key: "blog", href: "#blog" },
    { key: "clinic", href: "#clinic" },
    { key: "contact", href: "#contact" },
  ];

  const handleNav = (href, e) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="container footer__inner">
        {/* Brand */}
        <div className="footer__brand">
          <div className="footer__logo">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <rect width="28" height="28" rx="8" fill="#00AEEF" />
              <path d="M14 7v14M7 14h14" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
            <span>{lang === "ar" ? "د. محمد أحمد شرف الدين" : "Dr. Mohamed Ahmed Sharaf El-deen"}</span>
          </div>
          <p className="footer__tagline">{f.tagline}</p>
          <div className="footer__social">
            <span className="footer__social-label">{f.social}</span>
            <div className="footer__social-icons">
              {socialLinks.map(({ Icon, href, label }) => (
                <a key={label} href={href} className="footer__social-icon" target="_blank" rel="noopener noreferrer" aria-label={label}>
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer__col">
          <h4 className="footer__col-title">{f.quickLinks}</h4>
          <ul className="footer__links">
            {links.map(({ key, href }) => (
              <li key={key}>
                <a href={href} className="footer__link" onClick={(e) => handleNav(href, e)}>
                  {nav[key]}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer__col">
          <h4 className="footer__col-title">{t.clinic.sectionLabel}</h4>
          <div className="footer__contact-items">
            <div className="footer__contact-item">
              <MapPin size={14} />
              <span>{c.address}</span>
            </div>
            <div className="footer__contact-item">
              <Phone size={14} />
              <a href={"tel:" + c.phone}>{c.phone}</a>
            </div>
            <div className="footer__contact-item">
              <Mail size={14} />
              <a href="mailto:info@drahmed.com">info@drahmed.com</a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>{f.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
