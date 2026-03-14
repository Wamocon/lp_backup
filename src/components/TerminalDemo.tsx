import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const LOGS = [
  { text: 'Initializing Backup Planer...', color: 'text-gray-400' },
  { text: 'Connecting to Notebooks [3/3]', color: 'text-blue-400' },
  { text: 'Connecting to Azure Cloud...', color: 'text-blue-400' },
  { text: 'Verifying M365 Data Integrity...', color: 'text-amber-400' },
  { text: 'Data check complete. 0 Errors.', color: 'text-emerald-400' },
  { text: 'Establishing secure 256-bit tunnel...', color: 'text-gray-400' },
  { text: 'Syncing files: 45.2 GB...', color: 'text-gray-300' },
  { text: 'Applying deduplication...', color: 'text-purple-400' },
  { text: 'Offsite replication started...', color: 'text-gray-300' },
  { text: '[SUCCESS] Backup complete. All systems protected.', color: 'text-emerald-400 font-bold' },
]

export default function TerminalDemo() {
  const [logs, setLogs] = useState<{text: string, color: string}[]>([])
  const [currentStep, setCurrentStep] = useState(0)

  useEffect(() => {
    if (currentStep < LOGS.length) {
      const waitTime = currentStep === 0 ? 1000 : Math.random() * 800 + 400
      const timer = setTimeout(() => {
        setLogs(prev => [...prev, LOGS[currentStep]])
        setCurrentStep(prev => prev + 1)
      }, waitTime)
      return () => clearTimeout(timer)
    } else {
      // Loop
      const reset = setTimeout(() => {
        setLogs([])
        setCurrentStep(0)
      }, 5000)
      return () => clearTimeout(reset)
    }
  }, [currentStep])

  return (
    <div className="relative w-full rounded-xl bg-[#0a0a0a] border border-gray-800 shadow-2xl overflow-hidden font-mono text-sm leading-relaxed text-left">
      {/* Mac window header */}
      <div className="px-4 py-3 border-b border-gray-800 bg-[#161616] flex items-center justify-between">
         <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
         </div>
         <p className="text-xs text-gray-500 font-sans">wamocon-core-daemon — 80x24</p>
         <div className="w-10"></div> {/* Spacer for centering */}
      </div>
      
      {/* Terminal Body */}
      <div className="p-5 h-[320px] overflow-y-auto flex flex-col justify-end">
        <div className="flex flex-col gap-2">
           {logs.map((log, i) => (
             <motion.div 
               key={`${i}-${log.text}`}
               initial={{ opacity: 0, x: -10 }}
               animate={{ opacity: 1, x: 0 }}
               className="flex gap-3 items-start"
             >
               <span className="text-gray-600 shrink-0 select-none">~</span>
               <span className={log.color}>{log.text}</span>
             </motion.div>
           ))}
           {/* Blinking Cursor */}
           <motion.div 
             animate={{ opacity: [1, 0] }} 
             transition={{ repeat: Infinity, duration: 0.8 }}
             className="w-2 h-4 bg-gray-400 mt-1"
           />
        </div>
      </div>
    </div>
  )
}
