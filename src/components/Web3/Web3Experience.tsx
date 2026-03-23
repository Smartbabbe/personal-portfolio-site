import { useState, useEffect, useRef } from 'react'
import { useTheme } from '../../contexts/ThemeContext'
import { experiences } from '../../data/web3/web3Data'

// experiences imported from web3Data.ts

const typeConfig: Record<string, { light: string; dark: string }> = {
  Leadership:{ light:'bg-amber-100 text-amber-800',   dark:'bg-amber-900/20 text-amber-400'   },
  Education: { light:'bg-blue-100 text-blue-800',     dark:'bg-blue-900/20 text-blue-400'     },
  Ambassador:{ light:'bg-rose-100 text-rose-800',     dark:'bg-rose-900/20 text-rose-400'     },
  Speaking:  { light:'bg-violet-100 text-violet-800', dark:'bg-violet-900/20 text-violet-400' },
}

export default function Web3Experience() {
  const { theme } = useTheme()
  const d = theme === 'dark'
  const [open, setOpen] = useState<number | null>(null)
  const listRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const items = listRef.current?.querySelectorAll('.exp-item')
    if (!items) return
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          const el = e.target as HTMLElement
          el.style.opacity = '1'
          el.style.transform = 'translateX(0)'
          obs.unobserve(el)
        }
      }),
      { threshold: 0.1 }
    )
    items.forEach((item, i) => {
      const el = item as HTMLElement
      el.style.opacity = '0'
      el.style.transform = 'translateX(-32px)'
      el.style.transition = `opacity 0.6s cubic-bezier(0.16,1,0.3,1) ${i * 0.1}s, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${i * 0.1}s`
      obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  return (
    <section id="w3-experience" className={`py-24 px-6 border-t ${d ? 'bg-zinc-900 border-zinc-800' : 'bg-stone-50 border-stone-100'}`}>
      <div className="max-w-6xl mx-auto">
        <div className="w3-reveal mb-16">
          <p className={`text-[11px] font-semibold tracking-[0.2em] uppercase mb-3 ${d ? 'text-amber-500/70' : 'text-amber-700/70'}`}>Background</p>
          <h2 className={`text-4xl font-black tracking-tight ${d ? 'text-zinc-100' : 'text-zinc-900'}`}>Experience & Roles</h2>
        </div>

        <div ref={listRef} className="space-y-2">
          {experiences.map((exp, i) => {
            const tc = typeConfig[exp.type]
            const isOpen = open === i
            return (
              <div
                key={exp.role}
                className={`exp-item rounded-2xl border overflow-hidden transition-all duration-300 ${
                  d
                    ? `border-zinc-800 ${isOpen ? 'bg-zinc-800' : 'bg-zinc-900 hover:bg-zinc-800'}`
                    : `border-stone-200 ${isOpen ? 'bg-white shadow-sm' : 'bg-stone-50 hover:bg-white hover:shadow-sm'}`
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full flex-shrink-0 ${d ? tc.dark : tc.light}`}>{exp.type}</span>
                    <div className="min-w-0">
                      <p className={`font-bold text-sm truncate ${d ? 'text-zinc-100' : 'text-zinc-900'}`}>{exp.role}</p>
                      <p className={`text-xs mt-0.5 ${d ? 'text-amber-500/70' : 'text-amber-700/70'}`}>{exp.org}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 flex-shrink-0">
                    <span className={`font-mono text-xs hidden sm:block ${d ? 'text-zinc-500' : 'text-zinc-400'}`}>{exp.period}</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                      className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''} ${d ? 'text-zinc-500' : 'text-zinc-400'}`}>
                      <polyline points="6 9 12 15 18 9"/>
                    </svg>
                  </div>
                </button>

                <div
                  className="overflow-hidden transition-all duration-400"
                  style={{ maxHeight: isOpen ? '300px' : '0px' }}
                >
                  <div className={`px-6 pb-6 border-t ${d ? 'border-zinc-700' : 'border-stone-200'}`}>
                    <ul className="mt-5 space-y-2.5">
                      {exp.highlights.map((h, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <span className="w-1 h-1 rounded-full mt-2 flex-shrink-0" style={{ background: '#b87333' }} />
                          <p className={`text-sm leading-relaxed ${d ? 'text-zinc-400' : 'text-zinc-600'}`}>{h}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
