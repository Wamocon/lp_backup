import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

interface FAQItem {
  q: string
  a: string
}

export default function FAQ() {
  const { t } = useTranslation()
  const items = t('faq.items', { returnObjects: true }) as FAQItem[]
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const headerRef = useScrollAnimation(0.2)
  const accordionRef = useScrollAnimation(0.1)

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section id="faq" className="py-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className="text-center mb-14"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-accent">
            {t('faq.label')}
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold text-brand tracking-tight">
            {t('faq.headline')}
          </h2>
        </div>

        {/* Accordion */}
        <div
          ref={accordionRef as React.RefObject<HTMLDivElement>}
          className="flex flex-col divide-y divide-gray-100 border-y border-gray-100"
        >
          {items.map((item, i) => (
            <div key={i}>
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between py-5 text-left gap-4 group"
                aria-expanded={openIndex === i}
              >
                <span className="text-base font-semibold text-gray-900 group-hover:text-accent transition-colors">
                  {item.q}
                </span>
                <svg
                  className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-300 ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {/* Smooth height transition via max-height */}
              <div
                style={{
                  maxHeight: openIndex === i ? '400px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 0.35s ease',
                }}
              >
                <div className="pb-5">
                  <p className="text-sm text-gray-500 leading-relaxed">{item.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
