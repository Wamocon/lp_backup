import { useTranslation } from 'react-i18next'

export default function BackupAnimationVariant() {
  const { t } = useTranslation()

  return (
    <section className="relative py-32 overflow-hidden bg-[#0a1128]">
      {/* Background Gradients & Noise */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.1)_0%,_transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-dot-grid opacity-30 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 z-10">
        <div className="text-center mb-24">
           <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            {t('animation.headline_v2', 'Echtzeit Datensynchronisation')}
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {t('animation.subline_v2', 'Eine dynamische ,Orbit‘-Visualisierung der Backup-Ströme aus allen Endgeräten.')}
          </p>
        </div>

        {/* Orbit System Container */}
        <div className="relative w-full max-w-[800px] aspect-square mx-auto flex items-center justify-center">
          
          {/* Orbit Rings */}
          <div className="absolute inset-0 rounded-full border border-blue-500/10 border-dashed animate-[spin_60s_linear_infinite]" />
          <div className="absolute inset-16 rounded-full border border-emerald-500/10 border-dashed animate-[spin_40s_linear_infinite_reverse]" />
          <div className="absolute inset-32 rounded-full border border-purple-500/10 border-dashed animate-[spin_30s_linear_infinite]" />

          {/* Pulse Waves emanating from center */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-10 h-10 bg-blue-500/40 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
          </div>

          {/* Central Hub: The Core */}
          <div className="relative w-32 h-32 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-900 shadow-[0_0_80px_rgba(59,130,246,0.6)] flex items-center justify-center z-30 overflow-hidden">
            <div className="absolute -inset-10 bg-[conic-gradient(from_0deg_at_50%_50%,_rgba(59,130,246,0)_0%,_rgba(56,189,248,0.5)_50%,_rgba(59,130,246,0)_100%)] animate-[spin_3s_linear_infinite]" />
            <div className="absolute inset-1.5 bg-[#0a1128] rounded-full z-10 flex items-center justify-center">
               <svg className="w-14 h-14 text-blue-400 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
               </svg>
            </div>
          </div>
          
          {/* SVG Data Particles */}
          <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-20" viewBox="0 0 800 800">
             <defs>
               <filter id="glow-particle" x="-20%" y="-20%" width="140%" height="140%">
                 <feGaussianBlur stdDeviation="3" result="blur" />
                 <feComposite in="SourceGraphic" in2="blur" operator="over" />
               </filter>
             </defs>
             
             {/* Note: SVG viewBox is 0 0 800 800. Center is 400, 400. */}
             
             {/* Notebook 1: top 15%, left 15% -> 120, 120 */}
             <path id="path-nb1" d="M 120 120 L 400 400" fill="none" stroke="transparent" />
             <circle r="3" fill="#38bdf8" filter="url(#glow-particle)">
               <animateMotion dur="1.5s" repeatCount="indefinite" calcMode="linear" begin="0s">
                 <mpath href="#path-nb1" />
               </animateMotion>
               <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="1.5s" repeatCount="indefinite" begin="0s" />
             </circle>

             {/* Notebook 2: top 50%, left 0% -> 0, 400 */}
             <path id="path-nb2" d="M 0 400 L 400 400" fill="none" stroke="transparent" />
             <circle r="3" fill="#38bdf8" filter="url(#glow-particle)">
               <animateMotion dur="1.8s" repeatCount="indefinite" calcMode="linear" begin="0.7s">
                 <mpath href="#path-nb2" />
               </animateMotion>
               <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="1.8s" repeatCount="indefinite" begin="0.7s" />
             </circle>

             {/* Notebook 3: bottom 15%, left 15% -> 120, 680 */}
             <path id="path-nb3" d="M 120 680 L 400 400" fill="none" stroke="transparent" />
             <circle r="3" fill="#38bdf8" filter="url(#glow-particle)">
               <animateMotion dur="1.4s" repeatCount="indefinite" calcMode="linear" begin="1.2s">
                 <mpath href="#path-nb3" />
               </animateMotion>
               <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="1.4s" repeatCount="indefinite" begin="1.2s" />
             </circle>

             {/* Cloud 1: top 15%, right 15% -> 680, 120 */}
             <path id="path-cl1" d="M 680 120 L 400 400" fill="none" stroke="transparent" />
             <circle r="3" fill="#34d399" filter="url(#glow-particle)">
               <animateMotion dur="1.6s" repeatCount="indefinite" calcMode="linear" begin="0.3s">
                 <mpath href="#path-cl1" />
               </animateMotion>
               <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="1.6s" repeatCount="indefinite" begin="0.3s" />
             </circle>

             {/* Cloud 2: top 50%, right 0% -> 800, 400 */}
             <path id="path-cl2" d="M 800 400 L 400 400" fill="none" stroke="transparent" />
             <circle r="3" fill="#34d399" filter="url(#glow-particle)">
               <animateMotion dur="2.1s" repeatCount="indefinite" calcMode="linear" begin="0.9s">
                 <mpath href="#path-cl2" />
               </animateMotion>
               <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="2.1s" repeatCount="indefinite" begin="0.9s" />
             </circle>

             {/* Cloud 3: bottom 15%, right 15% -> 680, 680 */}
             <path id="path-cl3" d="M 680 680 L 400 400" fill="none" stroke="transparent" />
             <circle r="3" fill="#34d399" filter="url(#glow-particle)">
               <animateMotion dur="1.7s" repeatCount="indefinite" calcMode="linear" begin="1.5s">
                 <mpath href="#path-cl3" />
               </animateMotion>
               <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="1.7s" repeatCount="indefinite" begin="1.5s" />
             </circle>

             {/* Server: bottom 0%, left 50% -> 400, 800 */}
             <path id="path-sv1" d="M 400 800 L 400 400" fill="none" stroke="transparent" />
             <circle r="3" fill="#a78bfa" filter="url(#glow-particle)">
               <animateMotion dur="1.9s" repeatCount="indefinite" calcMode="linear" begin="0.5s">
                 <mpath href="#path-sv1" />
               </animateMotion>
               <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="1.9s" repeatCount="indefinite" begin="0.5s" />
             </circle>
          </svg>

          {/* SATELLITES */}
          <Satellite type="notebook" top="15%" left="15%" delay="0s" />
          <Satellite type="notebook" top="50%" left="0%" delay="1s" />
          <Satellite type="notebook" top="85%" left="15%" delay="2s" />

          <Satellite type="cloud" top="15%" left="85%" delay="0.5s" />
          <Satellite type="cloud" top="50%" left="100%" delay="1.5s" />
          <Satellite type="cloud" top="85%" left="85%" delay="2.5s" />

          <Satellite type="server" top="100%" left="50%" delay="0.8s" />

        </div>
      </div>
    </section>
  )
}

function Satellite({ type, top, left, delay }: { type: 'notebook' | 'cloud' | 'server', top: string, left: string, delay: string }) {
  const isNotebook = type === 'notebook'
  const isCloud = type === 'cloud'
  const isServer = type === 'server'
  
  const borderColor = isNotebook ? 'border-blue-500/30' : isCloud ? 'border-emerald-500/30' : 'border-purple-500/30'
  const shadowColor = isNotebook ? 'shadow-[0_0_20px_rgba(59,130,246,0.3)]' : isCloud ? 'shadow-[0_0_20px_rgba(16,185,129,0.3)]' : 'shadow-[0_0_20px_rgba(167,139,250,0.3)]'
  const textColor = isNotebook ? 'text-blue-400' : isCloud ? 'text-emerald-400' : 'text-purple-400'

  return (
    <div className="absolute z-20 flex flex-col items-center justify-center -translate-x-1/2 -translate-y-1/2" style={{ top, left }}>
      <div className={`relative w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-[#0f172a] border ${borderColor} flex items-center justify-center ${shadowColor} mb-2`}>
        <div className={`absolute inset-0 rounded-2xl ${textColor.replace('text', 'bg').replace('400', '500/10')} animate-pulse`} style={{ animationDelay: delay, animationDuration: '3s' }} />
        
        {isNotebook && (
          <svg className={`w-6 h-6 md:w-8 md:h-8 ${textColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        )}
        {isCloud && (
          <svg className={`w-6 h-6 md:w-8 md:h-8 ${textColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
          </svg>
        )}
        {isServer && (
           <svg className={`w-6 h-6 md:w-8 md:h-8 ${textColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
           </svg>
        )}
      </div>
    </div>
  )
}
