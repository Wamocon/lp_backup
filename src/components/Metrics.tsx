import { useState, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import StaggerText from './StaggerText'

export default function Metrics() {
  const { t } = useTranslation()
  const [employees, setEmployees] = useState(50)
  const [currentCost, setCurrentCost] = useState(500)

  const savings = useMemo(() => {
    // Arbitrary calculation for demo purposes: 
    // Savings = (Current Cost * 12) - (Employees * 5 - efficiency_gain)
    const annualCurrent = currentCost * 12
    const wamoconCost = (employees * 10) // simulated price
    const efficiencyGain = annualCurrent * 0.3
    return Math.max(0, Math.floor(annualCurrent - wamoconCost + efficiencyGain))
  }, [employees, currentCost])

  return (
    <section id="calculator" className="relative py-24 px-6 bg-[#060e20] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="relative max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-400">
            ROI CALCULATOR
          </span>
          <StaggerText 
            text={t('metrics.headline') || "Berechnen Sie Ihre Ersparnis"} 
            className="mt-3 text-4xl md:text-5xl font-extrabold text-white tracking-tight"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10">
          {/* Controls */}
          <div className="space-y-10">
            <div>
              <div className="flex justify-between mb-4">
                <label className="text-sm font-medium text-gray-400 uppercase tracking-wider">Mitarbeiter</label>
                <span className="text-xl font-bold text-white">{employees}</span>
              </div>
              <input 
                type="range" 
                min="5" 
                max="500" 
                step="5"
                value={employees}
                onChange={(e) => setEmployees(parseInt(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
            </div>

            <div>
              <div className="flex justify-between mb-4">
                <label className="text-sm font-medium text-gray-400 uppercase tracking-wider">Aktuelle Kosten / Monat</label>
                <span className="text-xl font-bold text-white">{currentCost}€</span>
              </div>
              <input 
                type="range" 
                min="50" 
                max="5000" 
                step="50"
                value={currentCost}
                onChange={(e) => setCurrentCost(parseInt(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
            </div>
          </div>

          {/* Result */}
          <div className="text-center md:text-left md:border-l border-white/10 md:pl-12 flex flex-col justify-center">
            <span className="text-sm font-medium text-blue-400 uppercase tracking-widest mb-2">Jährliches Sparpotenzial</span>
            <div className="flex items-baseline justify-center md:justify-start gap-2">
              <AnimatePresence mode="wait">
                <motion.span 
                  key={savings}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-6xl md:text-7xl font-black text-white tracking-tighter tabular-nums"
                >
                  {savings.toLocaleString()}
                </motion.span>
              </AnimatePresence>
              <span className="text-3xl font-bold text-blue-500">€</span>
            </div>
            <p className="mt-6 text-gray-400 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              *Basierend auf durchschnittlicher Effizienzsteigerung und minimierten Lizenzgebühren durch WAMOCON.
            </p>
            <button className="mt-8 btn-uiverse py-4 w-full md:w-auto">
              Detaillierte Analyse anfordern
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
