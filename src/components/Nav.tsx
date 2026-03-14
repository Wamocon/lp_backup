import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const LANGUAGES = [
  { code: 'de', label: 'DE' },
  { code: 'en', label: 'EN' },
  { code: 'ru', label: 'RU' },
]

export default function Nav() {
  const { t, i18n } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(false)

  const handleLangChange = (code: string) => {
    i18n.changeLanguage(code)
  }

  const navLinks = [
    { label: t('nav.features'), href: '#features' },
    { label: t('nav.roadmap'), href: '#roadmap' },
    { label: t('nav.faq'), href: '#faq' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 shrink-0">
          <div className="w-8 h-8 rounded-lg bg-brand flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M4 4h10v2H4V4zm0 4h10v2H4V8zm0 4h6v2H4v-2z" fill="white" />
              <rect x="12" y="10" width="4" height="4" rx="1" fill="#3B82F6" />
            </svg>
          </div>
          <div className="leading-tight">
            <span className="text-sm font-bold text-brand block">WAMOCON</span>
            <span className="text-xs text-gray-400 block -mt-0.5">Backup Planer</span>
          </div>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right side: language + CTA */}
        <div className="flex items-center gap-3">
          {/* Language switcher */}
          <div className="hidden sm:flex items-center gap-0.5 bg-gray-100 rounded-lg p-0.5">
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLangChange(lang.code)}
                className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all ${
                  i18n.language === lang.code
                    ? 'bg-white text-brand shadow-sm'
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>

          <a
            href="#"
            className="hidden sm:inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-accent hover:bg-blue-600 rounded-lg transition-colors"
          >
            {t('nav.cta')}
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <div className="w-5 flex flex-col gap-1">
              <span className={`block h-0.5 bg-gray-700 transition-all ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`block h-0.5 bg-gray-700 transition-all ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 bg-gray-700 transition-all ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-600 hover:text-gray-900"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-1 pt-2 border-t border-gray-100">
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLangChange(lang.code)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
                  i18n.language === lang.code
                    ? 'bg-brand text-white'
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>
          <a
            href="#"
            className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-accent hover:bg-blue-600 rounded-lg transition-colors"
          >
            {t('nav.cta')}
          </a>
        </div>
      )}
    </header>
  )
}
