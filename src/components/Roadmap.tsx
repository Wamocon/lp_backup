import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import StaggerText from './StaggerText'

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
  const targetRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: targetRef,
  })

  // Reduced the scroll distance slightly so it doesn't scroll past the end of the cards
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"])

  return (
    <section id="roadmap" ref={targetRef} className="relative h-[300vh] bg-[#f8fafc]">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        
        {/* Header */}
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className="text-center mb-16 px-6 relative z-10 w-full max-w-6xl mx-auto"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-blue-500">
            {t('roadmap.label')}
          </span>
          <StaggerText
            text={t('roadmap.headline')}
            className="mt-3 text-4xl md:text-5xl font-extrabold text-blue-950 tracking-tight"
          />
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            {t('roadmap.subline')}
          </p>
        </div>

        {/* Horizontal Scroll Area */}
        <div className="w-full max-w-7xl mx-auto px-6">
           <motion.div style={{ x }} className="flex gap-8 w-max">
             {versions.map((v, i) => {
               const isCurrent = v.status === 'current'
               return (
                 <div
                   key={i}
                   className={`glass-card relative rounded-2xl p-8 min-w-[350px] max-w-[400px] border flex-shrink-0 ${
                     isCurrent
                       ? 'bg-blue-600 border-blue-500 text-white shadow-2xl shadow-blue-500/20'
                       : 'bg-white border-gray-200 text-gray-800 shadow-xl shadow-gray-200/50'
                   }`}
                   style={isCurrent ? {
                     background: 'linear-gradient(135deg, #2563eb, #1e40af)'
                   } : {}}
                 >
                   {/* Version badge */}
                   <div className="flex items-center justify-between mb-6">
                     <span
                       className={`text-xs font-bold font-mono px-3 py-1.5 rounded-md ${
                         isCurrent ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'
                       }`}
                     >
                       {v.version}
                     </span>
                     <span
                       className={`text-xs font-semibold px-3 py-1.5 rounded-full ${
                         isCurrent ? 'bg-emerald-400 text-emerald-950' : 'bg-blue-50 text-blue-600'
                       }`}
                     >
                       {isCurrent ? t('roadmap.badge_current') : t('roadmap.badge_planned')}
                     </span>
                   </div>

                   <h3
                     className={`text-xl font-bold mb-6 ${isCurrent ? 'text-white' : 'text-blue-950'}`}
                   >
                     {v.title}
                   </h3>

                   <ul className="flex flex-col gap-3">
                     {v.features.map((f, j) => (
                       <li key={j} className="flex items-start gap-3 text-sm">
                         <svg
                           className={`w-5 h-5 mt-0.5 shrink-0 ${
                             isCurrent ? 'text-emerald-400' : 'text-blue-500'
                           }`}
                           fill="none"
                           stroke="currentColor"
                           viewBox="0 0 24 24"
                         >
                           {isCurrent ? (
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                           ) : (
                             <circle cx="12" cy="12" r="4" strokeWidth={2.5} />
                           )}
                         </svg>
                         <span className={isCurrent ? 'text-blue-50 font-medium' : 'text-gray-600'}>{f}</span>
                       </li>
                     ))}
                   </ul>
                 </div>
               )
             })}
           </motion.div>
        </div>
      </div>
    </section>
  )
}
