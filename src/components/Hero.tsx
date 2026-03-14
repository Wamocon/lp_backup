import { useTranslation } from 'react-i18next'
import { motion, type Variants } from 'framer-motion'
import TerminalDemo from './TerminalDemo'

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    }
  }
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
}

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section
      className="relative pt-20 pb-28 px-6 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #060e20 0%, #0c1a35 55%, #1a2f55 100%)' }}
    >
      {/* Mesh gradient blobs */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(59,130,246,0.18) 0%, transparent 70%)' }}
      />
      <div className="absolute top-16 left-[5%] w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(99,102,241,0.12) 0%, transparent 70%)', filter: 'blur(40px)' }}
      />
      <div className="absolute top-16 right-[5%] w-72 h-72 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(34,197,94,0.10) 0%, transparent 70%)', filter: 'blur(40px)' }}
      />

      {/* Dot grid overlay */}
      <div className="absolute inset-0 bg-dot-grid pointer-events-none" />

      <motion.div 
        className="relative max-w-6xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div
           variants={itemVariants}
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/25 rounded-full"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          {t('hero.badge')}
        </motion.div>

        {/* Headline */}
        <motion.h1
           variants={itemVariants}
          className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1]"
        >
          {t('hero.headline_1')}
          <br />
          <span className="text-gradient">{t('hero.headline_2')}</span>
        </motion.h1>

        {/* Subline */}
        <motion.p
           variants={itemVariants}
          className="mt-6 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          style={{ color: 'rgba(148,163,184,0.85)' }}
        >
          {t('hero.subline')}
        </motion.p>

        {/* CTAs */}
        <motion.div
           variants={itemVariants}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href="#"
            className="btn-uiverse"
          >
            {t('hero.cta_primary')}
            <svg className="ml-2 w-4 h-4 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>

        {/* Terminal Demo with glow border */}
        <motion.div variants={itemVariants} className="mt-16 max-w-4xl mx-auto">
          <div className="relative">
            {/* Glow behind terminal */}
            <div
              className="absolute -inset-3 rounded-2xl pointer-events-none"
              style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.25), rgba(34,197,94,0.12))', filter: 'blur(24px)' }}
            />
            <div className="relative">
              <TerminalDemo />
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div variants={itemVariants} className="mt-14 flex flex-col items-center gap-2">
          <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/25">Scroll</span>
          <svg
            className="w-5 h-5 text-white/25 animate-scroll-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
