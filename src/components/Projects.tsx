import { motion } from 'framer-motion'
import StaggerText from './StaggerText'

const PROJECTS = [
  {
    title: 'Test-IT Academy',
    desc: 'Umfassende Lernplattform für IT-Zertifizierungen mit automatisierten Prüfungsabläufen.',
    link: 'https://test-it-academy.com/',
    tag: 'E-Learning'
  },
  {
    title: 'WAMOCON Cloud',
    desc: 'Hochverfügbare Infrastruktur für mittelständische Unternehmen mit Fokus auf Datensicherheit.',
    link: 'https://www.wamocon.com/',
    tag: 'Infrastructure'
  },
  {
    title: 'M365 Automation',
    desc: 'Intelligente Workflows für Microsoft 365 Umgebungen zur Produktivitätssteigerung.',
    link: '#',
    tag: 'Automation'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-[#0a1128] relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-dot-grid opacity-10 pointer-events-none" />
      
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-400">
            Showcase
          </span>
          <StaggerText 
            text="Weitere Projekte der WAMOCON" 
            className="mt-3 text-4xl md:text-5xl font-extrabold text-white tracking-tight"
          />
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Entdecken Sie, wie wir Unternehmen bei der digitalen Transformation unterstützen.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PROJECTS.map((project, i) => (
            <motion.a
              key={i}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="spotlight-card group p-8 flex flex-col h-full bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all duration-500"
            >
              <div className="mb-4">
                <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-wider">
                  {project.tag}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                {project.desc}
              </p>
              <div className="flex items-center text-blue-400 text-sm font-bold group-hover:translate-x-1 transition-transform">
                Projekt ansehen
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7-7 7M5 12h16" />
                </svg>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
