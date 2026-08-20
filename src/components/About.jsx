import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

const icons = {
  telescope: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
      <path d="M6 21l6-6m0 0l-3.5-3.5M9 15l-3.5 3.5M21 6l-6 6m0 0l3.5 3.5M15 9l3.5-3.5M3 3l4.5 4.5" />
    </svg>
  ),
  teacher: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
      <path d="M12 14l9-5-9-5-9 5 9 5zM12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    </svg>
  ),
  seedling: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
      <path d="M12 22V8M12 8C12 8 8 4 4 4c0 4 4 8 8 8zM12 8c0 0 4-4 8-4 0 4-4 8-8 8z" />
    </svg>
  ),
  penguin: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 2.761 1.12 5.262 2.932 7.068L6 22h12l1.068-2.932A9.957 9.957 0 0022 12c0-5.523-4.477-10-10-10zM8 14a2 2 0 114 0 2 2 0 01-4 0zM12 14a2 2 0 114 0 2 2 0 01-4 0z" />
    </svg>
  ),
  brain: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
      <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  zap: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  ),
}

const colors = ['text-accent', 'text-cyan', 'text-green', 'text-accent', 'text-cyan', 'text-green']

export default function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, type: 'spring', bounce: 0.2 }}
          className="font-heading text-3xl md:text-4xl font-bold text-white text-center mb-6"
        >
          {t.about.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1, type: 'spring', bounce: 0.2 }}
          className="text-muted text-center text-lg mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          {t.about.intro}
        </motion.p>

        <div className="backdrop-blur-md bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6 md:p-8 space-y-1"
          style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04)' }}
        >
          {t.about.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ delay: i * 0.08, duration: 0.5, type: 'spring', bounce: 0.2 }}
              className="flex items-start gap-4 py-3.5 px-4 rounded-xl hover:bg-white/[0.03] transition-colors"
            >
              <span className={`${colors[i]} mt-0.5 shrink-0`}>
                {icons[item.icon]}
              </span>
              <span className="text-muted leading-relaxed">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
