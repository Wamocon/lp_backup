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
        // Clear transform after transition to avoid CSS stacking context issues
        // (which would trap position:fixed elements like lightboxes)
        setTimeout(() => {
          el.style.transform = ''
          el.style.transition = ''
        }, ANIM_DURATION + 50)
      }, delay + 80)
    })
  }, [])

  return (
    <section className="pt-20 pb-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* Badge */}
        <div
          ref={badgeRef}
          className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-xs font-semibold text-success bg-green-50 border border-green-200 rounded-full"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
          {t('hero.badge')}
        </div>

        {/* Headline */}
        <h1
          ref={headlineRef}
          className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-brand tracking-tight leading-[1.1]"
        >
          {t('hero.headline_1')}
          <br />
          <span className="text-accent">{t('hero.headline_2')}</span>
        </h1>

        {/* Subline */}
        <p
          ref={sublineRef}
          className="mt-6 text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed"
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
            className="inline-flex items-center px-6 py-3 text-base font-semibold text-white bg-accent hover:bg-blue-600 rounded-xl shadow-lg shadow-blue-200 transition-all hover:-translate-y-0.5"
          >
            {t('hero.cta_primary')}
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="#features"
            className="inline-flex items-center px-6 py-3 text-base font-semibold text-brand bg-white border border-gray-200 hover:border-brand rounded-xl transition-all hover:-translate-y-0.5"
          >
            {t('hero.cta_secondary')}
          </a>
        </div>

        {/* Screenshot */}
        <div ref={screenshotRef} className="mt-16 max-w-5xl mx-auto">
          <ScreenshotFrame
            src="/screenshots/dashboard.png"
            alt="WAMOCON Backup Planer Dashboard"
            url="localhost:5173/dashboard"
          />
        </div>
      </div>
    </section>
  )
}
