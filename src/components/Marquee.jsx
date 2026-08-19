import { useLanguage } from '../context/LanguageContext'
import { brandColor } from '../lib/brandColors'

const SEP = '◆'

export default function Marquee() {
  const { t } = useLanguage()
  const doubled = [...t.marquee.items, ...t.marquee.items]

  return (
    <div className="marquee border-y border-white/10 bg-surface/60 overflow-hidden py-3 select-none">
      <div className="animate-marquee whitespace-nowrap font-mono text-xs md:text-sm text-muted">
        {doubled.map((item, i) => (
          <span key={i} className="mx-4 inline-flex items-center gap-2">
            <span className="text-[8px]" style={{ color: brandColor(item) }}>{SEP}</span>
            <span>{item}</span>
          </span>
        ))}
      </div>
    </div>
  )
}