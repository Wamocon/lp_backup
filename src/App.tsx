import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Nav from './components/Nav'
import Hero from './components/Hero'
import TrustBadges from './components/TrustBadges'
import Features from './components/Features'
import Metrics from './components/Metrics'
import Roadmap from './components/Roadmap'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import ScrollExplanation from './components/ScrollExplanation'

export default function App() {
  const { t } = useTranslation()
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showFloatingCTA, setShowFloatingCTA] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0)
      setShowFloatingCTA(scrollTop > 600)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Scroll progress bar */}
      <div id="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      <Nav />
      <main>
        <Hero />
        <ScrollExplanation />
        <TrustBadges />
        <Features />
        <Metrics />
        <Roadmap />
        <FAQ />
      </main>
      <Footer />

      {/* Floating CTA — erscheint nach 600px Scroll */}
      <div
        className={`fixed bottom-6 right-6 z-40 transition-all duration-300 ${
          showFloatingCTA
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <a
          href="#"
          className="btn-uiverse scale-90 origin-bottom-right shadow-2xl"
        >
          {t('hero.cta_primary')}
          <svg className="w-4 h-4 ml-1 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  )
}
