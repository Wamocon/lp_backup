import { useEffect, useState } from 'react'

interface ScreenshotFrameProps {
  src: string
  alt: string
  url?: string
}

export default function ScreenshotFrame({ src, alt, url = 'localhost:5173' }: ScreenshotFrameProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false)

  useEffect(() => {
    if (!lightboxOpen) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxOpen(false)
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [lightboxOpen])

  const BrowserChrome = ({ showClose }: { showClose?: boolean }) => (
    <div className="bg-gray-100 border-b border-gray-200 px-4 py-2.5 flex items-center gap-2">
      <div className="flex gap-1.5">
        <div className="w-3 h-3 rounded-full bg-red-400" />
        <div className="w-3 h-3 rounded-full bg-yellow-400" />
        <div className="w-3 h-3 rounded-full bg-green-400" />
      </div>
      <div className="flex-1 mx-3 bg-white rounded-md px-3 py-1 text-xs text-gray-400 font-mono border border-gray-200 truncate">
        {url}
      </div>
      {showClose && (
        <button
          onClick={() => setLightboxOpen(false)}
          className="ml-1 p-1 rounded hover:bg-gray-200 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Schließen"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  )

  return (
    <>
      {/* Thumbnail */}
      <div
        className="rounded-xl overflow-hidden shadow-2xl border border-gray-200 bg-white cursor-zoom-in group"
        onClick={() => setLightboxOpen(true)}
        title="Klicken zum Vergrößern"
      >
        <BrowserChrome />
        <div className="overflow-hidden">
          <img
            src={src}
            alt={alt}
            className="w-full h-auto block transition-transform duration-300 group-hover:scale-[1.03]"
            loading="lazy"
          />
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <div
            className="relative max-w-6xl w-full rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <BrowserChrome showClose />
            <img src={src} alt={alt} className="w-full h-auto block" />
          </div>
        </div>
      )}
    </>
  )
}
