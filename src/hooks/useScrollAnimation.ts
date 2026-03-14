import { useEffect, useRef } from 'react'

const prefersReduced = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

const DURATION = 650
const STAGGER_DURATION = 500

/** Fades a single element up when it enters the viewport. */
export function useScrollAnimation(threshold = 0.15) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || prefersReduced()) return

    el.style.opacity = '0'
    el.style.transform = 'translateY(24px)'

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transition = `opacity ${DURATION}ms ease, transform ${DURATION}ms ease`
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
          // Remove transform after transition to avoid creating a CSS stacking context
          // (which would trap position:fixed children like lightboxes)
          setTimeout(() => {
            el.style.transform = ''
            el.style.transition = ''
          }, DURATION + 50)
          observer.disconnect()
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return ref as React.RefObject<HTMLElement>
}

/** Stagger-animates direct children of the returned container ref. */
export function useStaggerAnimation(staggerMs = 90, threshold = 0.15) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const children = Array.from(el.children) as HTMLElement[]

    if (!prefersReduced()) {
      children.forEach((child) => {
        child.style.opacity = '0'
        child.style.transform = 'translateY(18px)'
      })
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          children.forEach((child, i) => {
            const delay = i * staggerMs
            setTimeout(() => {
              child.style.transition = `opacity ${STAGGER_DURATION}ms ease, transform ${STAGGER_DURATION}ms ease`
              child.style.opacity = '1'
              child.style.transform = 'translateY(0)'
              // Clear transform after transition to avoid stacking context issues
              setTimeout(() => {
                child.style.transform = ''
                child.style.transition = ''
              }, STAGGER_DURATION + 50)
            }, delay)
          })
          observer.disconnect()
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [staggerMs, threshold])

  return ref as React.RefObject<HTMLElement>
}
