import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import ScreenshotFrame from './ScreenshotFrame'

interface FeatureItem {
  tag: string
  title: string
  description: string
  points: string[]
  screenshot: string
  url: string
}

function FeatureBlock({ item, index }: { item: FeatureItem; index: number }) {
  const isEven = index % 2 === 0
  const blockRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = blockRef.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    el.style.opacity = '0'
    el.style.transform = 'translateY(32px)'

    const ANIM_DURATION = 700
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transition = `opacity ${ANIM_DURATION}ms ease, transform ${ANIM_DURATION}ms ease`
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
          // Clear transform after transition to avoid CSS stacking context issues
          // (which would trap position:fixed elements like lightboxes)
          setTimeout(() => {
            el.style.transform = ''
            el.style.transition = ''
          }, ANIM_DURATION + 50)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={blockRef}
      className={`grid md:grid-cols-2 gap-12 lg:gap-20 items-center ${
        isEven ? '' : 'md:[&>*:first-child]:order-2'
      }`}
    >
      {/* Text side */}
      <div>
        <span className="inline-block px-3 py-1 text-xs font-bold text-accent bg-blue-50 rounded-full mb-4">
          {item.tag}
        </span>
        <h3 className="text-3xl md:text-4xl font-extrabold text-brand tracking-tight leading-tight">
          {item.title}
        </h3>
        <p className="mt-4 text-base text-gray-500 leading-relaxed">{item.description}</p>
        <ul className="mt-6 flex flex-col gap-2.5">
          {item.points.map((point, j) => (
            <li key={j} className="flex items-start gap-2.5 text-sm text-gray-600">
              <svg
                className="w-5 h-5 text-success mt-0.5 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              {point}
            </li>
          ))}
        </ul>
      </div>

      {/* Screenshot side */}
      <div>
        <ScreenshotFrame src={item.screenshot} alt={item.title} url={item.url} />
      </div>
    </div>
  )
}

export default function Features() {
  const { t } = useTranslation()
  const items = t('features.items', { returnObjects: true }) as FeatureItem[]
  const headerRef = useScrollAnimation(0.2)

  return (
    <section id="features" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className="text-center mb-20"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-accent">
            {t('features.label')}
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold text-brand tracking-tight">
            {t('features.headline')}
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">{t('features.subline')}</p>
        </div>

        {/* Feature blocks */}
        <div className="flex flex-col gap-28">
          {items.map((item, i) => (
            <FeatureBlock key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
