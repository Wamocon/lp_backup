import { useEffect } from 'react'

interface Props {
  onClose: () => void
}

export default function DatenschutzModal({ onClose }: Props) {
  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', handleKey)
    }
  }, [onClose])

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="relative bg-[#060e20] border border-white/10 rounded-2xl w-full max-w-2xl max-h-[85vh] flex flex-col shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-white/10 shrink-0">
          <h2 className="text-white text-xl font-bold tracking-tight">Datenschutzerklärung</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
            aria-label="Schließen"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto px-8 py-6 text-gray-300 text-sm leading-relaxed space-y-6">
          <section>
            <h3 className="text-white font-semibold mb-2">1. Datenschutz auf einen Blick</h3>
            <h4 className="text-gray-200 font-medium mb-1">Allgemeine Hinweise</h4>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
              passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
              persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen
              Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
            </p>
          </section>

          <section>
            <h3 className="text-white font-semibold mb-2">2. Verantwortliche Stelle</h3>
            <p>
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p className="mt-2">
              WAMOCON GmbH<br />
              [Straße und Hausnummer]<br />
              [PLZ] [Stadt]<br />
              Deutschland<br /><br />
              E-Mail: <a href="mailto:datenschutz@wamocon.com" className="text-blue-400 hover:text-blue-300 transition-colors">datenschutz@wamocon.com</a>
            </p>
            <p className="mt-2">
              Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit
              anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.
            </p>
          </section>

          <section>
            <h3 className="text-white font-semibold mb-2">3. Datenerfassung auf dieser Website</h3>
            <h4 className="text-gray-200 font-medium mb-1">Cookies</h4>
            <p>
              Diese Website verwendet keine Tracking-Cookies. Es werden ausschließlich technisch notwendige
              Einstellungen (z.B. Sprachpräferenz) lokal im Browser gespeichert (localStorage). Es findet keine
              Weitergabe dieser Daten an Dritte statt.
            </p>

            <h4 className="text-gray-200 font-medium mt-4 mb-1">Server-Log-Dateien</h4>
            <p>
              Der Provider dieser Website erhebt und speichert automatisch Informationen in sogenannten
              Server-Log-Dateien, die Ihr Browser automatisch übermittelt. Dies sind:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-400">
              <li>Browsertyp und Browserversion</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse (anonymisiert)</li>
            </ul>
            <p className="mt-2">
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung
              dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
            </p>
          </section>

          <section>
            <h3 className="text-white font-semibold mb-2">4. Externe Dienste</h3>
            <h4 className="text-gray-200 font-medium mb-1">Google Fonts</h4>
            <p>
              Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten Google Fonts, bereitgestellt
              von Google LLC. Beim Aufruf einer Seite lädt Ihr Browser die benötigten Fonts in Ihren Browsercache,
              um Texte und Schriftarten korrekt anzuzeigen. Zu diesem Zweck muss der von Ihnen verwendete Browser
              Verbindung zu den Servern von Google aufnehmen. Hierdurch erlangt Google Kenntnis darüber, dass über
              Ihre IP-Adresse diese Website aufgerufen wurde. Die Nutzung von Google Fonts erfolgt auf Grundlage
              von Art. 6 Abs. 1 lit. f DSGVO. Weitere Informationen zu Google Fonts finden Sie unter{' '}
              <a
                href="https://developers.google.com/fonts/faq"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                https://developers.google.com/fonts/faq
              </a>{' '}
              und in der Datenschutzerklärung von Google:{' '}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                https://policies.google.com/privacy
              </a>.
            </p>
          </section>

          <section>
            <h3 className="text-white font-semibold mb-2">5. Ihre Rechte</h3>
            <p>Sie haben jederzeit das Recht auf:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-400">
              <li>Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten (Art. 15 DSGVO)</li>
              <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
              <li>Löschung Ihrer bei uns gespeicherten Daten (Art. 17 DSGVO)</li>
              <li>Einschränkung der Datenverarbeitung (Art. 18 DSGVO)</li>
              <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Widerspruch gegen die Verarbeitung Ihrer Daten (Art. 21 DSGVO)</li>
            </ul>
            <p className="mt-2">
              Außerdem haben Sie das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung
              Ihrer personenbezogenen Daten durch uns zu beschweren.
            </p>
          </section>

          <section>
            <h3 className="text-white font-semibold mb-2">6. Kontakt Datenschutzbeauftragter</h3>
            <p>
              Bei Fragen zum Datenschutz wenden Sie sich bitte an:<br /><br />
              E-Mail: <a href="mailto:datenschutz@wamocon.com" className="text-blue-400 hover:text-blue-300 transition-colors">datenschutz@wamocon.com</a>
            </p>
          </section>

          <p className="text-gray-500 text-xs border-t border-white/5 pt-4">
            Stand: März 2026
          </p>
        </div>
      </div>
    </div>
  )
}
