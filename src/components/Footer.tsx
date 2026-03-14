

export default function Footer() {
  return (
    <footer className="relative bg-[#040816] text-white pt-24 pb-12 overflow-hidden border-t border-white/5">
      {/* Nebula Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="relative max-w-6xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          {/* Logo & Ecosystem */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
                <svg width="20" height="20" viewBox="0 0 18 18" fill="none">
                  <path d="M4 4h10v2H4V4zm0 4h10v2H4V8zm0 4h6v2H4v-2z" fill="white" />
                  <rect x="12" y="10" width="4" height="4" rx="1" fill="#93C5FD" />
                </svg>
              </div>
              <div className="leading-tight">
                <span className="text-lg font-bold text-white block tracking-tight">WAMOCON</span>
                <span className="text-xs text-blue-400 font-medium block uppercase tracking-wider">Backup Planer</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              Premium Backup-Lösungen für moderne IT-Umgebungen. Skalierbar, sicher und vollautomatisch.
            </p>
            <div className="flex gap-4">
              <a href="https://www.wamocon.com/" target="_blank" className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors border border-white/10 group">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"/></svg>
              </a>
              <a href="https://test-it-academy.com/" target="_blank" className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors border border-white/10 group">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
              </a>
            </div>
          </div>

          {/* Links: Ecosystem */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Ecosystem</h4>
            <ul className="space-y-4">
              <li>
                <a href="https://www.wamocon.com/" className="text-gray-400 hover:text-blue-400 transition-all flex items-center group">
                  <span className="mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">→</span>
                  WAMOCON
                </a>
              </li>
              <li>
                <a href="https://test-it-academy.com/" className="text-gray-400 hover:text-blue-400 transition-all flex items-center group">
                  <span className="mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">→</span>
                  Test-IT Academy
                </a>
              </li>
              <li>
                 <a href="#projects" className="text-gray-400 hover:text-blue-400 transition-all flex items-center group">
                  <span className="mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">→</span>
                  Showcase
                </a>
              </li>
            </ul>
          </div>

          {/* Links: Produkt */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Produkt</h4>
            <ul className="space-y-4">
              <li>
                <a href="#features" className="text-gray-400 hover:text-blue-400 transition-all flex items-center group">
                  <span className="mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">→</span>
                  Features
                </a>
              </li>
              <li>
                <a href="#roadmap" className="text-gray-400 hover:text-blue-400 transition-all flex items-center group">
                  <span className="mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">→</span>
                  Roadmap
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-blue-400 transition-all flex items-center group">
                  <span className="mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">→</span>
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 relative overflow-hidden">
            <h4 className="text-white font-bold mb-3 text-base">Bereit für WAMOCON?</h4>
            <p className="text-gray-400 text-xs leading-relaxed mb-6">
              Starten Sie noch heute mit dem modernsten Backup-Planer auf dem Markt.
            </p>
            <a href="#" className="w-full btn-uiverse py-3 text-sm">
              Kostenloses Gespräch
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} WAMOCON. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-gray-500 hover:text-white text-xs transition-colors">Impressum</a>
            <a href="#" className="text-gray-500 hover:text-white text-xs transition-colors">Datenschutz</a>
            <a href="#" className="text-gray-500 hover:text-white text-xs transition-colors">AGB</a>
          </div>
          <div className="text-gray-600 text-[10px] font-mono uppercase tracking-widest bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
            Built with React & Framer Motion
          </div>
        </div>
      </div>
    </footer>
  )
}
