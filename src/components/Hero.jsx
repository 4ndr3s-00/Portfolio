import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

const corners = [
  'top-6 left-6 border-t-2 border-l-2',
  'top-6 right-6 border-t-2 border-r-2',
  'bottom-6 left-6 border-b-2 border-l-2',
  'bottom-6 right-6 border-b-2 border-r-2',
]

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {corners.map((c) => (
        <div
          key={c}
          className={`absolute z-[2] w-10 h-10 border-white/20 ${c}`}
        />
      ))}

      <div className="absolute top-0 right-0 z-[1]">
        <div className="bg-surface/90 border-b border-l border-white/10 rounded-bl-xl px-4 py-1.5 font-mono text-[11px] text-muted tracking-widest uppercase">
          {t.hero.sys}
        </div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, filter: 'blur(8px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1, type: 'spring', bounce: 0.2 }}
          className="border border-white/[0.08] rounded-2xl px-8 py-12 md:px-14 md:py-16 bg-surface/70"
          style={{ boxShadow: '0 0 80px rgba(255,255,255,0.05), inset 0 1px 0 rgba(255,255,255,0.06)' }}
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-mono text-xs md:text-sm text-muted tracking-[0.3em] uppercase mb-6"
          >
            {t.hero.kicker}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, delay: 0.1, type: 'spring', bounce: 0.2 }}
            className="font-heading text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight"
            style={{ textShadow: '0 0 80px rgba(255,255,255,0.15), 0 2px 10px rgba(0,0,0,0.5)' }}
          >
            {t.hero.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -20, filter: 'blur(6px)' }}
            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.7, delay: 0.25, type: 'spring', bounce: 0.25 }}
            className="font-mono text-base md:text-lg text-accent mb-6"
          >
            $ {t.hero.role}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.7, delay: 0.4, type: 'spring', bounce: 0.2 }}
            className="text-muted text-lg mb-8 max-w-xl mx-auto leading-relaxed"
          >
            {t.hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex justify-center mb-10"
          >
            <div className="font-mono text-sm text-muted inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 bg-black/40">
              <span className="text-accent">{t.hero.prompt}</span>
              <span className="blink text-accent">█</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55, type: 'spring', bounce: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255,255,255,0.25)' }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3 rounded-full bg-white text-black font-medium transition-colors"
            >
              {t.hero.ctaProjects}
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3 rounded-full border border-white/20 text-white font-medium transition-colors"
            >
              {t.hero.ctaContact}
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2"
        >
          <div className="w-1 h-2 rounded-full bg-white/40" />
        </motion.div>
      </motion.div>
    </section>
  )
}
