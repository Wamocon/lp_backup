import { useEffect } from 'react'

interface Props {
  onClose: () => void
}

export default function ImpressumModal({ onClose }: Props) {
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
          <h2 className="text-white text-xl font-bold tracking-tight">Impressum</h2>
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
            <h3 className="text-white font-semibold mb-2">Angaben gemäß § 5 TMG</h3>
            <p>
              WAMOCON GmbH<br />
              [Straße und Hausnummer]<br />
              [PLZ] [Stadt]<br />
              Deutschland
            </p>
          </section>

          <section>
            <h3 className="text-white font-semibold mb-2">Vertreten durch</h3>
            <p>[Geschäftsführer Name]</p>
          </section>

          <section>
            <h3 className="text-white font-semibold mb-2">Kontakt</h3>
            <p>
              Telefon: [+49 XXX XXXXXXXX]<br />
              E-Mail: <a href="mailto:kontakt@wamocon.com" className="text-blue-400 hover:text-blue-300 transition-colors">kontakt@wamocon.com</a>
            </p>
          </section>

          <section>
            <h3 className="text-white font-semibold mb-2">Registereintrag</h3>
            <p>
              Eintragung im Handelsregister<br />
              Registergericht: [Amtsgericht Stadt]<br />
              Registernummer: [HRB XXXXX]
            </p>
          </section>

          <section>
            <h3 className="text-white font-semibold mb-2">Umsatzsteuer-ID</h3>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:<br />
              DE[XXXXXXXXX]
            </p>
          </section>

          <section>
            <h3 className="text-white font-semibold mb-2">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h3>
            <p>
              [Name Verantwortlicher]<br />
              [Adresse wie oben]
            </p>
          </section>

          <section>
            <h3 className="text-white font-semibold mb-2">Haftung für Inhalte</h3>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den
              allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
              verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen
              zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <p className="mt-2">
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen
              Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
              Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
              Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>
          </section>

          <section>
            <h3 className="text-white font-semibold mb-2">Haftung für Links</h3>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
              Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
              verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die
              verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
              Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
            </p>
          </section>

          <section>
            <h3 className="text-white font-semibold mb-2">Urheberrecht</h3>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
              Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
              Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
