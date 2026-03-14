import { useTranslation } from 'react-i18next'
import { useStaggerAnimation } from '../hooks/useScrollAnimation'

const ICONS = [
  // Server
  <svg key="server" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
  </svg>,
  // No subscription
  <svg key="nosub" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
  </svg>,
  // Code
  <svg key="code" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>,
  // Flag / location
  <svg key="flag" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
  </svg>,
]

export default function TrustBadges() {
  const { t } = useTranslation()
  const items = t('trust.items', { returnObjects: true }) as Array<{ title: string; desc: string }>
  const gridRef = useStaggerAnimation(90, 0.2)

  return (
    <section className="border-y border-gray-100 bg-gray-50 py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div
          ref={gridRef as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {items.map((item, i) => (
            <div key={i} className="uiverse-card flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-accent shrink-0 shadow-inner">
                {ICONS[i]}
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-gray-900 mb-0.5">{item.title}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
