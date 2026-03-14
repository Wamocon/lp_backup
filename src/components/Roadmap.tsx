import { useTranslation } from 'react-i18next'
import { useScrollAnimation, useStaggerAnimation } from '../hooks/useScrollAnimation'

interface RoadmapVersion {
  version: string
  status: string
  title: string
  features: string[]
}

export default function Roadmap() {
  const { t } = useTranslation()
  const versions = t('roadmap.versions', { returnObjects: true }) as RoadmapVersion[]
  const headerRef = useScrollAnimation(0.2)
  const cardsRef = useStaggerAnimation(100, 0.1)

  return (
    <section id="roadmap" className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-accent">
            {t('roadmap.label')}
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold text-brand tracking-tight">
            {t('roadmap.headline')}
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">{t('roadmap.subline')}</p>
        </div>

        {/* Version cards */}
        <div
          ref={cardsRef as React.RefObject<HTMLDivElement>}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {versions.map((v, i) => {
            const isCurrent = v.status === 'current'
            return (
              <div
                key={i}
                className={`relative rounded-2xl p-6 border ${
                  isCurrent
                    ? 'bg-brand border-brand text-white shadow-xl shadow-brand/20'
                    : 'bg-white border-gray-200 text-gray-700'
                }`}
              >
                {/* Version badge */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`text-xs font-bold font-mono px-2 py-1 rounded-md ${
                      isCurrent ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'
                    }`}
                  >
                    {v.version}
                  </span>
                  <span
                    className={`text-xs font-semibold px-2 py-1 rounded-full ${
                      isCurrent ? 'bg-success text-white' : 'bg-gray-100 text-gray-400'
                    }`}
                  >
                    {isCurrent ? t('roadmap.badge_current') : t('roadmap.badge_planned')}
                  </span>
                </div>

                <h3
                  className={`text-lg font-bold mb-4 ${isCurrent ? 'text-white' : 'text-brand'}`}
                >
                  {v.title}
                </h3>

                <ul className="flex flex-col gap-2">
                  {v.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm">
                      <svg
                        className={`w-4 h-4 mt-0.5 shrink-0 ${
                          isCurrent ? 'text-success' : 'text-gray-300'
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        {isCurrent ? (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M5 13l4 4L19 7"
                          />
                        ) : (
                          <circle cx="12" cy="12" r="4" strokeWidth={2} />
                        )}
                      </svg>
                      <span className={isCurrent ? 'text-blue-100' : 'text-gray-500'}>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
