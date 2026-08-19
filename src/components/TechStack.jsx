import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import { brandColor } from '../lib/brandColors'

const categories = [
  {
    key: 'frontend',
    color: '#61dafb',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M7 8l-4 4 4 4M17 8l4 4-4 4M14 4l-4 16" />
      </svg>
    ),
    itemsKey: 'frontendItems',
  },
  {
    key: 'backendAI',
    color: '#22c55e',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    ),
    itemsKey: 'backendItems',
  },
  {
    key: 'devOps',
    color: '#1793d1',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    itemsKey: 'devOpsItems',
  },
]

export default function TechStack() {
  const { t } = useLanguage()

  return (
    <section id="techstack" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, type: 'spring', bounce: 0.2 }}
          className="text-center mb-12"
        >
          <span className="block font-mono text-xs uppercase tracking-[0.3em] text-muted mb-3">
            {'[ 01 // stack ]'}
          </span>
          <span className="block font-heading text-3xl md:text-4xl font-bold text-white">
            {t.techStack.title}
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.key}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: i * 0.12, duration: 0.6, type: 'spring', bounce: 0.2 }}
              className="bg-surface/60 border border-white/[0.08] rounded-xl p-6 hover:border-white/25 hover:bg-white/[0.04] transition-all duration-300"
              style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04)' }}
            >
              <div className="flex items-center justify-between mb-5">
                <div className="text-[22px]" style={{ color: cat.color }}>{cat.icon}</div>
                <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: cat.color }}>
                  {`0${i + 1}`}
                </span>
              </div>
              <div className="font-mono text-xs uppercase tracking-widest text-muted/60 mb-2 flex items-center gap-2">
                <span className="text-[8px]" style={{ color: cat.color }}>◆</span>
                {t.techStack[cat.key]}
              </div>
              <h3 className="font-heading text-lg font-semibold text-white mb-4">
                {t.techStack[cat.key]}
              </h3>
              <div className="flex flex-wrap gap-2">
                {t.techStack[cat.itemsKey].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 font-mono text-xs rounded-md bg-white/[0.04] text-muted border border-white/[0.07]"
                  >
                    <span
                      className="inline-block w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ backgroundColor: brandColor(item) }}
                    />
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
