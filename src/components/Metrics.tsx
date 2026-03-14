import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

interface MetricItem {
  value: string
  unit: string
  desc: string
}

function parseValue(val: string): { num: number; suffix: string } {
  const match = val.match(/^(\d+)(.*)$/)
  if (match) return { num: parseInt(match[1], 10), suffix: match[2] }
  return { num: 0, suffix: val }
}

function AnimatedNumber({ value, isVisible }: { value: string; isVisible: boolean }) {
  const { num, suffix } = parseValue(value)
  const [count, setCount] = useState(0)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!isVisible || hasAnimated.current) return
    hasAnimated.current = true

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCount(num)
      return
    }

    if (num === 0) {
      setCount(0)
      return
    }

    const duration = 900
    const start = performance.now()
    const animate = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * num))
      if (progress < 1) requestAnimationFrame(animate)
      else setCount(num)
    }
    requestAnimationFrame(animate)
  }, [isVisible, num])

  return (
    <>
      {count}
      {suffix}
    </>
  )
}

export default function Metrics() {
  const { t } = useTranslation()
  const items = t('metrics.items', { returnObjects: true }) as MetricItem[]
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-brand">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-blue-300 mb-12">
          {t('metrics.label')}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {items.map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <div className="flex items-baseline gap-2">
                <span className="text-6xl md:text-7xl font-extrabold text-white tracking-tight tabular-nums">
                  <AnimatedNumber value={item.value} isVisible={isVisible} />
                </span>
                <span className="text-2xl font-bold text-accent">{item.unit}</span>
              </div>
              <span className="text-sm text-blue-300 font-medium">{item.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
