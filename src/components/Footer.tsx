import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-[#0F172A] text-white">
      {/* CTA band */}
      <div className="border-b border-white/10 py-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              {t('hero.headline_1')} {t('hero.headline_2')}
            </h2>
            <p className="mt-2 text-sm text-gray-400 max-w-md">
              {t('footer.tagline')}
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <a
              href="#"
              className="px-5 py-3 text-sm font-semibold text-white bg-accent hover:bg-blue-600 rounded-xl transition-colors"
            >
              {t('nav.cta')}
            </a>
            <a
              href="#"
              className="px-5 py-3 text-sm font-semibold text-gray-300 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo col */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-brand flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M4 4h10v2H4V4zm0 4h10v2H4V8zm0 4h6v2H4v-2z" fill="white" />
                  <rect x="12" y="10" width="4" height="4" rx="1" fill="#3B82F6" />
                </svg>
              </div>
              <div className="leading-tight">
                <span className="text-sm font-bold text-white block">WAMOCON</span>
                <span className="text-xs text-gray-500 block -mt-0.5">Backup Planer</span>
              </div>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed max-w-[180px]">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Product */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">
              {t('footer.col_product')}
            </p>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: t('footer.features'), href: '#features' },
                { label: t('footer.roadmap'), href: '#roadmap' },
                { label: t('footer.docs'), href: '#' },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">
              {t('footer.col_resources')}
            </p>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: t('footer.github'), href: '#' },
                { label: t('footer.changelog'), href: '#' },
                { label: 'FAQ', href: '#faq' },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">
              {t('footer.col_company')}
            </p>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: t('footer.about'), href: '#' },
                { label: t('footer.contact'), href: '#' },
                { label: t('footer.imprint'), href: '#' },
                { label: t('footer.privacy'), href: '#' },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-5 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-gray-600">{t('footer.copyright')}</p>
          <div className="flex items-center gap-1.5">
            <span className="text-xs text-gray-600">Built with</span>
            <span className="text-xs font-semibold text-gray-400">React · TailwindCSS · Vite</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
