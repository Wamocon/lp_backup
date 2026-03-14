import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import ScreenshotFrame from './ScreenshotFrame'

export default function Hero() {
  const { t } = useTranslation()

  const badgeRef = useRef<HTMLDivElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const sublineRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const screenshotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const elements = [
      { el: badgeRef.current, delay: 0 },
      { el: headlineRef.current, delay: 110 },
      { el: sublineRef.current, delay: 230 },
      { el: ctaRef.current, delay: 350 },
      { el: screenshotRef.current, delay: 510 },
    ]

    elements.forEach(({ el }) => {
      if (!el) return
      el.style.opacity = '0'
      el.style.transform = 'translateY(22px)'
    })

    const ANIM_DURATION = 700
    elements.forEach(({ el, delay }) => {
      if (!el) return
      setTimeout(() => {
        el.style.transition = `opacity ${ANIM_DURATION}ms ease, transform ${ANIM_DURATION}ms ease`
        el.style.opacity = '1'
        el.style.transform = 'translateY(0)'
        setTimeout(() => {
          el.style.transform = ''
          el.style.transition = ''
        }, ANIM_DURATION + 50)
      }, delay + 80)
    })
  }, [])

  return (
    <section
      className="relative pt-20 pb-28 px-6 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #060e20 0%, #0c1a35 55%, #1a2f55 100%)' }}
    >
      {/* Mesh gradient blobs */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(59,130,246,0.18) 0%, transparent 70%)' }}
      />
      <div className="absolute top-16 left-[5%] w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(99,102,241,0.12) 0%, transparent 70%)', filter: 'blur(40px)' }}
      />
      <div className="absolute top-16 right-[5%] w-72 h-72 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(34,197,94,0.10) 0%, transparent 70%)', filter: 'blur(40px)' }}
      />

      {/* Dot grid overlay */}
      <div className="absolute inset-0 bg-dot-grid pointer-events-none" />

      <div className="relative max-w-6xl mx-auto text-center">
        {/* Badge */}
        <div
          ref={badgeRef}
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/25 rounded-full"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          {t('hero.badge')}
        </div>

        {/* Headline */}
        <h1
          ref={headlineRef}
          className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1]"
        >
          {t('hero.headline_1')}
          <br />
          <span className="text-gradient">{t('hero.headline_2')}</span>
        </h1>

        {/* Subline */}
        <p
          ref={sublineRef}
          className="mt-6 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          style={{ color: 'rgba(148,163,184,0.85)' }}
        >
          {t('hero.subline')}
        </p>

        {/* CTAs */}
        <div
          ref={ctaRef}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href="#"
            className="btn-uiverse"
          >
            {t('hero.cta_primary')}
            <svg className="ml-2 w-4 h-4 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="#features"
            className="inline-flex items-center px-7 py-3.5 text-base font-semibold text-white/80 hover:text-white bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/30 rounded-xl transition-all hover:-translate-y-0.5"
          >
            {t('hero.cta_secondary')}
          </a>
        </div>

        {/* Screenshot with glow border */}
        <div ref={screenshotRef} className="mt-16 max-w-5xl mx-auto">
          <div className="relative">
            {/* Glow behind screenshot */}
            <div
              className="absolute -inset-3 rounded-2xl pointer-events-none"
              style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.25), rgba(34,197,94,0.12))', filter: 'blur(24px)' }}
            />
            <div className="relative">
              <ScreenshotFrame
                src="/screenshots/dashboard.png"
                alt="WAMOCON Backup Planer Dashboard"
                url="localhost:5173/dashboard"
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-14 flex flex-col items-center gap-2">
          <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/25">Scroll</span>
          <svg
            className="w-5 h-5 text-white/25 animate-scroll-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  )
}
