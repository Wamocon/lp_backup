import { useTranslation } from 'react-i18next'

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

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    e.currentTarget.style.setProperty('--x', `${x}px`)
    e.currentTarget.style.setProperty('--y', `${y}px`)
  }

  // Triple the items array to ensure a smooth scrolling loop even on ultra-wide screens
  const marqueeItems = [...items, ...items, ...items]

  return (
    <section className="border-y border-white/5 bg-[#0a1128] py-12 px-6 overflow-hidden">
      <div className="max-w-[100vw] mx-auto w-full relative">
        
        {/* Gradients on the edges to fade out the marquee */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0a1128] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0a1128] to-transparent z-10 pointer-events-none" />

        <div className="flex whitespace-nowrap">
          <div className="flex animate-marquee gap-8 w-max">
            {marqueeItems.map((item, i) => {
              // Get original index for the icon
              const iconIndex = i % ICONS.length
              
              return (
                <div 
                  key={i} 
                  onMouseMove={handleMouseMove}
                  className="spotlight-card px-8 py-6 min-w-[320px] max-w-[320px] flex flex-col items-start gap-4 text-left cursor-default shadow-xl"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                    {ICONS[iconIndex]}
                  </div>
                  <div className="flex-1 whitespace-normal">
                    <p className="text-base font-bold text-white mb-2">{item.title}</p>
                    <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
