import { useTranslation } from 'react-i18next'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import StaggerText from './StaggerText'

interface FeatureItem {
  tag: string
  title: string
  description: string
  points: string[]
}

function BentoBlock({ item, index }: { item: FeatureItem; index: number }) {
  const isLarge = index === 0 || index === 3

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    e.currentTarget.style.setProperty('--x', `${x}px`)
    e.currentTarget.style.setProperty('--y', `${y}px`)
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      className={`spotlight-card flex flex-col bg-[#0a1128] border border-white/5 rounded-3xl overflow-hidden p-8 md:p-12 ${
        isLarge ? 'md:col-span-2' : 'col-span-1'
      }`}
    >
      <div className="flex-1 mb-10">
        <span className="inline-block px-3 py-1.5 text-[10px] font-black uppercase tracking-widest text-blue-400 bg-blue-500/10 rounded-full mb-6">
          {item.tag}
        </span>
        <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-tight mb-4">
          {item.title}
        </h3>
        <p className="text-gray-400 leading-relaxed max-w-lg mb-6">{item.description}</p>
        
        <ul className="flex flex-col gap-3">
          {item.points.map((point, j) => (
            <li key={j} className="flex items-start gap-3 text-sm font-medium text-gray-300">
              <svg className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              {point}
            </li>
          ))}
        </ul>
      </div>

    </div>
  )
}

export default function Features() {
  const { t } = useTranslation()
  const items = t('features.items', { returnObjects: true }) as FeatureItem[]
  const headerRef = useScrollAnimation(0.2)

  return (
    <section id="features" className="py-24 px-6 bg-[#060e20]">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-blue-400">
            {t('features.label')}
          </span>
          <StaggerText
            text={t('features.headline')}
            className="mt-3 text-4xl md:text-5xl font-extrabold text-white tracking-tight"
          />
          <p className="mt-4 text-lg text-gray-400 max-w-xl mx-auto">{t('features.subline')}</p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <BentoBlock key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
