import { useTranslation } from 'react-i18next'
import * as Accordion from '@radix-ui/react-accordion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import StaggerText from './StaggerText'

interface FAQItem {
  q: string
  a: string
}

export default function FAQ() {
  const { t } = useTranslation()
  const items = t('faq.items', { returnObjects: true }) as FAQItem[]
  const headerRef = useScrollAnimation(0.2)
  const accordionRef = useScrollAnimation(0.1)

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
          <StaggerText
            text={t('faq.headline')}
            className="mt-3 text-4xl md:text-5xl font-extrabold text-brand tracking-tight"
          />
        </div>

        {/* Accordion */}
        <div
          ref={accordionRef as React.RefObject<HTMLDivElement>}
          className="border-t border-gray-100 mt-8"
        >
          <Accordion.Root type="single" collapsible className="flex flex-col">
            {items.map((item, i) => (
              <Accordion.Item 
                key={i} 
                value={`item-${i}`}
                className="group border-b border-gray-100 overflow-hidden"
              >
                <Accordion.Header className="flex">
                  <Accordion.Trigger className="w-full flex flex-1 items-center justify-between py-6 text-left outline-none transition-all hover:text-blue-600 [&[data-state=open]>svg]:rotate-180">
                    <span className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {item.q}
                    </span>
                    <svg
                      className="w-5 h-5 text-gray-400 shrink-0 transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden text-sm text-gray-500 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                  <div className="pb-6 leading-relaxed text-base">
                    {item.a}
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </div>
    </section>
  )
}
