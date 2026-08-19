import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
      <path d="M7 17L17 7M8 7h9v9" />
    </svg>
  )
}

export default function Projects() {
  const { t } = useLanguage()

  const projects = [
    {
      key: 'freecodeZero',
      href: 'https://github.com/4ndr3s-00/freecode-zero',
    },
    {
      key: 'mentia',
      href: 'https://github.com/4ndr3s-00/mentia-learning-lab',
    },
  ]

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, type: 'spring', bounce: 0.2 }}
          className="text-center mb-12"
        >
          <span className="block font-mono text-xs uppercase tracking-[0.3em] text-muted mb-3">
            {'[ 02 // projects ]'}
          </span>
          <span className="block font-heading text-3xl md:text-4xl font-bold text-white">
            {t.projects.title}
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p, i) => {
            const proj = t.projects[p.key]
            return (
              <motion.div
                key={p.key}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40, scale: 0.95 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ delay: i * 0.1, duration: 0.6, type: 'spring', bounce: 0.2 }}
                className="bg-surface/60 border border-white/[0.08] rounded-xl p-7 hover:border-white/25 hover:bg-white/[0.04] transition-all duration-300 group flex flex-col"
                style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04)' }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-[11px] text-muted/70 border border-white/10 rounded-md px-2.5 py-1">
                    {proj.path}
                  </span>
                  {p.href && (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={proj.name}
                      className="ml-auto text-muted hover:text-white transition-colors"
                    >
                      <ArrowIcon />
                    </a>
                  )}
                </div>

                <h3 className="font-heading text-xl font-semibold text-white mb-3 group-hover:text-accent transition-colors">
                  {proj.name}
                </h3>

                <p className="text-muted leading-relaxed mb-6 text-sm">{proj.description}</p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 font-mono text-[11px] rounded-md bg-white/[0.04] text-muted border border-white/[0.07]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}

          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: 0.2, duration: 0.6, type: 'spring', bounce: 0.2 }}
            className="bg-surface/60 border border-dashed border-white/[0.1] rounded-xl p-7 flex flex-col items-center justify-center text-center hover:border-white/25 transition-all duration-300 min-h-[280px]"
          >
            <span className="font-mono text-[11px] text-muted/60 mb-3">{'$ cat next.txt'}</span>
            <h3 className="font-heading text-lg font-semibold text-white mb-2">
              {t.projects.comingSoon}
            </h3>
            <p className="text-muted text-sm">{t.projects.comingSoonDesc}</p>
            <span className="font-mono text-[11px] text-muted/60 mt-4 blink">█</span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}