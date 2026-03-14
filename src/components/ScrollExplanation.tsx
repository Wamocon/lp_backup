import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function ScrollExplanation() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Track scroll progress within the container (0 to 1)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  // ================= SCROLL TRANSFORMATIONS =================

  // --- Center Hub (Backup Planer) ---
  const hubScale = useTransform(scrollYProgress, [0, 0.6, 0.8, 1], [0.8, 0.8, 1.2, 1.3])
  const hubOpacity = useTransform(scrollYProgress, [0, 0.1, 0.6, 0.8], [0, 1, 1, 1])
  
  // Glowing ring around the hub (activates near the end)
  const ringScale = useTransform(scrollYProgress, [0.7, 1], [0.5, 1.5])
  const ringOpacity = useTransform(scrollYProgress, [0.7, 0.9, 1], [0, 1, 0.8])

  // --- Devices: Opacities (Fade In) ---
  const nbOpacity = useTransform(scrollYProgress, [0.1, 0.2, 0.8], [0, 1, 1])
  const cloudOpacity = useTransform(scrollYProgress, [0.3, 0.4, 0.8], [0, 1, 1])
  const serverOpacity = useTransform(scrollYProgress, [0.5, 0.6, 0.8], [0, 1, 1])

  // --- Devices: Positions (Movement towards Center Hub at the end) ---
  // They stay in place until 0.7, then move towards center (x=0, y=0 roughly)
  const nbX = useTransform(scrollYProgress, [0, 0.7, 0.95], ['-35vw', '-35vw', '-10vw'])
  const nbY = useTransform(scrollYProgress, [0, 0.7, 0.95], ['-20vh', '-20vh', '-5vh'])

  const cloudX = useTransform(scrollYProgress, [0, 0.7, 0.95], ['35vw', '35vw', '10vw'])
  const cloudY = useTransform(scrollYProgress, [0, 0.7, 0.95], ['-15vh', '-15vh', '-5vh'])

  const serverX = useTransform(scrollYProgress, [0, 0.7, 0.95], ['-20vw', '-20vw', '-8vw'])
  const serverY = useTransform(scrollYProgress, [0, 0.7, 0.95], ['30vh', '30vh', '15vh'])

  // --- Text Explanations (Fading in and out) ---
  const text1Opacity = useTransform(scrollYProgress, [0.1, 0.2, 0.3, 0.35], [0, 1, 1, 0])
  const text2Opacity = useTransform(scrollYProgress, [0.35, 0.4, 0.5, 0.55], [0, 1, 1, 0])
  const text3Opacity = useTransform(scrollYProgress, [0.55, 0.6, 0.7, 0.75], [0, 1, 1, 0])
  const text4Opacity = useTransform(scrollYProgress, [0.75, 0.85, 1], [0, 1, 1])
  const text4Y = useTransform(scrollYProgress, [0.75, 0.85], [30, 0])

  return (
    // 500vh container ensures a long scrolling area. The inner content is sticky.
    <section ref={containerRef} className="relative h-[500vh] bg-[#060e20]">
      
      {/* Sticky Container - Pins to screen while user scrolls the 500vh */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        
        {/* Decorative Background */}
        <div className="absolute inset-0 bg-dot-grid opacity-20 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/10 blur-[100px] pointer-events-none" />

        {/* ----------------- CONNECTION LINES (Canvas or SVG) ----------------- */}
        {/* We use framer-motion SVG paths that "draw" themselves based on scroll! */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" preserveAspectRatio="none">
          <motion.line 
            x1="50%" y1="50%" x2="15%" y2="30%" 
            stroke="rgba(56, 189, 248, 0.3)" strokeWidth="2" strokeDasharray="5 5"
            style={{ pathLength: scrollYProgress, opacity: nbOpacity }}
          />
          <motion.line 
            x1="50%" y1="50%" x2="85%" y2="35%" 
            stroke="rgba(16, 185, 129, 0.3)" strokeWidth="2" strokeDasharray="5 5"
            style={{ pathLength: scrollYProgress, opacity: cloudOpacity }}
          />
          <motion.line 
            x1="50%" y1="50%" x2="30%" y2="80%" 
            stroke="rgba(167, 139, 250, 0.3)" strokeWidth="2" strokeDasharray="5 5"
            style={{ pathLength: scrollYProgress, opacity: serverOpacity }}
          />
        </svg>


        {/* ----------------- CENTRAL HUB ----------------- */}
        <motion.div 
          className="absolute z-30 flex flex-col items-center justify-center"
          style={{ scale: hubScale, opacity: hubOpacity }}
        >
           {/* Radar Pulse Rings */}
           <motion.div 
              className="absolute w-[300px] h-[300px] rounded-full border border-blue-500/30 bg-blue-500/5 -z-10"
              style={{ scale: ringScale, opacity: ringOpacity }}
           />
           <motion.div 
              className="absolute w-[500px] h-[500px] rounded-full border border-blue-500/10 -z-10"
              style={{ scale: ringScale, opacity: ringOpacity }}
           />

           <div className="relative w-28 h-28 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-900 shadow-[0_0_60px_rgba(59,130,246,0.6)] flex items-center justify-center btn-uiverse overflow-visible !p-0">
             <svg className="w-12 h-12 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
             </svg>
          </div>
          <p className="mt-4 text-sm font-extrabold text-white tracking-widest uppercase">WAMOCON</p>
        </motion.div>


        {/* ----------------- DEVICE NODES ----------------- */}
        
        {/* Notebook */}
        <motion.div 
          className="absolute z-20 flex flex-col items-center"
          style={{ opacity: nbOpacity, x: nbX, y: nbY }}
        >
           <div className="w-16 h-16 rounded-2xl bg-[#0f172a] border border-blue-500/40 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.3)]">
             <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
             </svg>
           </div>
           <span className="mt-2 text-xs font-bold text-gray-400 uppercase tracking-wider">Notebooks</span>
        </motion.div>

        {/* Cloud */}
        <motion.div 
          className="absolute z-20 flex flex-col items-center"
          style={{ opacity: cloudOpacity, x: cloudX, y: cloudY }}
        >
           <div className="w-16 h-16 rounded-2xl bg-[#0f172a] border border-emerald-500/40 flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.3)]">
             <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
             </svg>
           </div>
           <span className="mt-2 text-xs font-bold text-gray-400 uppercase tracking-wider">Cloud (M365)</span>
        </motion.div>

        {/* Server */}
        <motion.div 
          className="absolute z-20 flex flex-col items-center"
          style={{ opacity: serverOpacity, x: serverX, y: serverY }}
        >
           <div className="w-16 h-16 rounded-2xl bg-[#0f172a] border border-purple-500/40 flex items-center justify-center shadow-[0_0_20px_rgba(167,139,250,0.3)]">
             <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
             </svg>
           </div>
           <span className="mt-2 text-xs font-bold text-gray-400 uppercase tracking-wider">Rechenzentren</span>
        </motion.div>


        {/* ----------------- TEXT EXPLANATIONS ----------------- */}
        
        {/* Text 1: Notebooks */}
        <motion.div 
          className="absolute bottom-20 md:bottom-32 pt-8 text-center max-w-xl px-6"
          style={{ opacity: text1Opacity }}
        >
          <h3 className="text-3xl font-extrabold text-white mb-4">Notebook Backup</h3>
          <p className="text-lg text-gray-400">
            Ob im Homeoffice oder unterwegs – Laptops sind ständigen Risiken (Verlust, Diebstahl, Hardware-Defekt) ausgesetzt. Wir sichern Nutzerdaten kontinuierlich und vollautomatisch.
          </p>
        </motion.div>

        {/* Text 2: Cloud */}
        <motion.div 
          className="absolute bottom-20 md:bottom-32 pt-8 text-center max-w-xl px-6"
          style={{ opacity: text2Opacity }}
        >
          <h3 className="text-3xl font-extrabold text-white mb-4">M365 & Cloud Schutz</h3>
          <p className="text-lg text-gray-400">
            Microsoft sorgt für die Verfügbarkeit der Infrastruktur, aber Sie verantworten Ihre Daten. Wir schützen E-Mails, OneDrive und SharePoint vor Ransomware und versehentlicher Löschung.
          </p>
        </motion.div>

        {/* Text 3: Server */}
        <motion.div 
          className="absolute bottom-20 md:bottom-32 pt-8 text-center max-w-xl px-6"
          style={{ opacity: text3Opacity }}
        >
          <h3 className="text-3xl font-extrabold text-white mb-4">Rechenzentren & Server</h3>
          <p className="text-lg text-gray-400">
            Ihre kritischen Geschäftsanwendungen (ERP, CRM) benötigen Hochverfügbarkeit. Wir replizieren komplette virtuelle Server-Umgebungen in gesicherte Offsite-Instanzen.
          </p>
        </motion.div>

        {/* Text 4: Backup Planer & 3-2-1 */}
        <motion.div 
          className="absolute bottom-10 md:bottom-[inherit] md:top-[65%] w-full max-w-3xl px-6 flex flex-col md:flex-row gap-8 items-center bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl"
          style={{ opacity: text4Opacity, y: text4Y }}
        >
           <div className="flex-1 text-center md:text-left">
             <h3 className="text-3xl font-extrabold text-white mb-3">Zentral. Automatisch. Sicher.</h3>
             <p className="text-gray-300 leading-relaxed text-sm">
               Alle dezentralen Backups fließen sicher in das <strong>WAMOCON Backup Planer</strong> Dashboard. 
               Von hier aus garantieren wir das <strong className="text-blue-400">3-2-1 Backup-Prinzip</strong>:
             </p>
           </div>
           
           <div className="flex-1 flex flex-col gap-3 w-full">
             <div className="flex items-center gap-4 bg-black/40 p-3 rounded-xl border border-white/5">
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 text-blue-400 font-black text-xl flex items-center justify-center shrink-0">3</div>
                <p className="text-sm font-medium text-white">Kopien Ihrer wichtigsten Daten</p>
             </div>
             <div className="flex items-center gap-4 bg-black/40 p-3 rounded-xl border border-white/5">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 font-black text-xl flex items-center justify-center shrink-0">2</div>
                <p className="text-sm font-medium text-white">Verschiedene Speichermedien</p>
             </div>
             <div className="flex items-center gap-4 bg-black/40 p-3 rounded-xl border border-white/5">
                <div className="w-10 h-10 rounded-lg bg-purple-500/20 text-purple-400 font-black text-xl flex items-center justify-center shrink-0">1</div>
                <p className="text-sm font-medium text-white">Offsite Backup (Cloud/Safe)</p>
             </div>
           </div>
        </motion.div>

        {/* Scroll Indicator helper */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span className="text-[10px] uppercase tracking-[0.2em] text-white">Weiter scrollen</span>
          <div className="w-px h-8 bg-gradient-to-b from-white to-transparent" />
        </div>

      </div>
    </section>
  )
}
