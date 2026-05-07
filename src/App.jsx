import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/Navbar'
import { translations } from './translation'

function App() {
  const [lang, setLang] = useState("ar");
  const t = translations[lang];

  useEffect(() => {
    document.documentElement.dir = t.dir;
    document.documentElement.lang = t.lang;
  }, [lang, t]);

  const toggleLang = () => setLang((l) => (l === "ar" ? "en" : "ar"));

  return (
    <div className='app' dir={t.dir}>
      <Navbar t={t} lang={lang} toggleLang={toggleLang} />
    </div>
  )
}

export default App
