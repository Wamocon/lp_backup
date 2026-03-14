import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'

export default function BackupAnimation() {
  const { t } = useTranslation()
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Optional: Add IntersectionObserver here to pause animation when out of view
  }, [])

  return (
    <section className="relative py-24 overflow-hidden bg-white">
      {/* Decorative Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(59,130,246,0.06) 0%, transparent 60%)' }}
      />

      <div className="relative max-w-5xl mx-auto px-6" ref={sectionRef}>
        <div className="text-center mb-16">
           <h2 className="text-3xl md:text-4xl font-extrabold text-brand tracking-tight mb-4">
            {t('animation.headline', 'Sichere Backups von überall')}
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            {t('animation.subline', 'WAMOCON zentralisiert und sichert Datenstrukturen aus Laptops, lokalen Servern und der Cloud.')}
          </p>
        </div>

        {/* Animation Container */}
        <div className="relative h-[400px] md:h-[500px] w-full max-w-3xl mx-auto">
          
          {/* Animated SVG Connections */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1000 600">
            <defs>
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(148, 163, 184, 0.2)" />
                <stop offset="50%" stopColor="rgba(59, 130, 246, 0.4)" />
                <stop offset="100%" stopColor="rgba(148, 163, 184, 0.2)" />
              </linearGradient>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Base Paths (Static connection lines) */}
            {/* From Left (Notebook) to Center */}
            <path d="M 150 200 C 300 200, 350 300, 500 300" 
                  fill="none" stroke="url(#lineGrad)" strokeWidth="2" strokeDasharray="6 6" className="opacity-60" />
            {/* From Right (Cloud) to Center */}
            <path d="M 850 200 C 700 200, 650 300, 500 300" 
                  fill="none" stroke="url(#lineGrad)" strokeWidth="2" strokeDasharray="6 6" className="opacity-60" />
            {/* From Bottom (Server) to Center */}
            <path d="M 500 500 C 500 420, 500 380, 500 300" 
                  fill="none" stroke="url(#lineGrad)" strokeWidth="2" strokeDasharray="6 6" className="opacity-60" />

            {/* Animated Data Packets (Dots) */}
            {/* Left Path */}
            <circle r="4" fill="#3B82F6" filter="url(#glow)">
              <animateMotion dur="2.5s" repeatCount="indefinite" path="M 150 200 C 300 200, 350 300, 500 300" calcMode="linear" />
              <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="2.5s" repeatCount="indefinite" />
            </circle>
            {/* Right Path */}
            <circle r="4" fill="#10B981" filter="url(#glow)">
              <animateMotion dur="3s" repeatCount="indefinite" path="M 850 200 C 700 200, 650 300, 500 300" calcMode="linear" begin="0.5s"/>
              <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="3s" repeatCount="indefinite" begin="0.5s" />
            </circle>
            <circle r="4" fill="#10B981" filter="url(#glow)">
              <animateMotion dur="3s" repeatCount="indefinite" path="M 850 200 C 700 200, 650 300, 500 300" calcMode="linear" begin="2s"/>
              <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="3s" repeatCount="indefinite" begin="2s" />
            </circle>
            {/* Bottom Path */}
            <circle r="4" fill="#8B5CF6" filter="url(#glow)">
              <animateMotion dur="2.2s" repeatCount="indefinite" path="M 500 500 C 500 420, 500 380, 500 300" calcMode="linear" begin="1s"/>
              <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="2.2s" repeatCount="indefinite" begin="1s" />
            </circle>
          </svg>

          {/* Nodes */}
          {/* Top Left: Notebook */}
          <div className="absolute top-[33.33%] left-0 md:left-[5%] -translate-y-1/2 -translate-x-1/2 group">
            <div className="relative z-10 w-16 h-16 md:w-20 md:h-20 bg-white border border-gray-200 rounded-2xl shadow-xl flex items-center justify-center uiverse-card">
              <div className="absolute inset-0 bg-blue-500/10 rounded-2xl animate-pulse" style={{ animationDuration: '3s' }} />
              <svg className="w-8 h-8 md:w-10 md:h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="absolute top-full left-1/2 -translate-x-1/2 mt-3 text-sm font-bold text-gray-700">Notebooks</p>
          </div>

          {/* Top Right: Cloud */}
          <div className="absolute top-[33.33%] right-0 md:right-[5%] -translate-y-1/2 translate-x-1/2 group">
            <div className="relative z-10 w-16 h-16 md:w-20 md:h-20 bg-white border border-gray-200 rounded-2xl shadow-xl flex items-center justify-center uiverse-card">
              <div className="absolute inset-0 bg-emerald-500/10 rounded-2xl animate-pulse" style={{ animationDuration: '4s' }} />
              <svg className="w-8 h-8 md:w-10 md:h-10 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            </div>
            <p className="absolute top-full left-1/2 -translate-x-1/2 mt-3 text-sm font-bold text-gray-700">Cloud</p>
          </div>

          {/* Bottom Center: Servers */}
          <div className="absolute bottom-[0%] left-1/2 -translate-x-1/2 translate-y-1/2 group">
            <div className="relative z-10 w-16 h-16 md:w-20 md:h-20 bg-white border border-gray-200 rounded-2xl shadow-xl flex items-center justify-center uiverse-card">
              <div className="absolute inset-0 bg-purple-500/10 rounded-2xl animate-pulse" style={{ animationDuration: '2.5s' }} />
              <svg className="w-8 h-8 md:w-10 md:h-10 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
              </svg>
            </div>
            <p className="absolute -top-8 left-1/2 -translate-x-1/2 text-sm font-bold text-gray-700">Rechenzentren</p>
          </div>

          {/* Center Hub: Backup Server  */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            {/* Rotating glow ring around hub */}
            <div className="absolute -inset-8 bg-brand/20 rounded-full blur-xl animate-pulse" style={{ animationDuration: '3s' }} />
            <div className="absolute -inset-4 border-2 border-brand/30 rounded-full animate-rotate-slow border-dashed" />
            
            <div className="relative w-24 h-24 md:w-28 md:h-28 bg-brand rounded-full shadow-2xl flex items-center justify-center btn-uiverse overflow-visible !p-0">
               {/* Internal Shield / Vault Icon */}
              <svg className="w-10 h-10 md:w-12 md:h-12 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
             <p className="absolute top-full left-1/2 -translate-x-1/2 mt-4 text-center text-sm font-extrabold text-brand bg-white px-3 py-1 rounded-full shadow-sm">Backup<br/>Planer</p>
          </div>

        </div>
      </div>
    </section>
  )
}
