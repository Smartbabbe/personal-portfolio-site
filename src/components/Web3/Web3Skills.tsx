import { useEffect, useRef } from 'react'
import { useTheme } from '../../contexts/ThemeContext'
import { skills, toolCategories } from '../../data/web3/web3Data'

// skills imported from web3Data.ts

export default function Web3Skills() {
  const { theme } = useTheme()
  const d = theme === 'dark'
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll('.skill-card')
    if (!cards) return
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          const el = e.target as HTMLElement
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
          obs.unobserve(el)
        }
      }),
      { threshold: 0.1 }
    )
    cards.forEach((card, i) => {
      const el = card as HTMLElement
      el.style.opacity = '0'
      el.style.transform = 'translateY(32px)'
      el.style.transition = `opacity 0.6s cubic-bezier(0.16,1,0.3,1) ${i * 0.08}s, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${i * 0.08}s`
      obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  return (
    <section id="w3-skills" className={`py-24 px-6 border-t ${d ? 'bg-zinc-950 border-zinc-800' : 'bg-white border-stone-100'}`}>
      <div className="max-w-6xl mx-auto">
        <div className="w3-reveal mb-16">
          <p className={`text-[11px] font-semibold tracking-[0.2em] uppercase mb-3 ${d ? 'text-amber-500/70' : 'text-amber-700/70'}`}>Expertise</p>
          <h2 className={`text-4xl font-black tracking-tight ${d ? 'text-zinc-100' : 'text-zinc-900'}`}>What I Bring</h2>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px">
          {skills.map((s) => (
            <div
              key={s.label}
              className={`skill-card group p-8 transition-colors cursor-default ${d ? 'hover:bg-zinc-900' : 'hover:bg-stone-50'}`}
            >
              <span className="text-2xl block mb-5">{s.icon}</span>
              <h3 className={`font-bold text-base mb-2 ${d ? 'text-zinc-100' : 'text-zinc-900'}`}>{s.label}</h3>
              <p className={`text-sm leading-relaxed mb-5 ${d ? 'text-zinc-500' : 'text-zinc-500'}`}>{s.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {s.tools.map(t => (
                  <span key={t} className={`text-[10px] font-medium px-2.5 py-1 rounded-full transition-all duration-200 group-hover:scale-[1.03] ${d ? 'bg-zinc-800 text-zinc-400 group-hover:bg-zinc-700' : 'bg-stone-100 text-zinc-600 group-hover:bg-stone-200'}`}>{t}</span>
                ))}
              </div>
              {/* Hover underline accent */}
              <div className="mt-6 h-px w-0 group-hover:w-full transition-all duration-500 ease-out" style={{ background: 'linear-gradient(to right, #b87333, #d4956a)' }} />
            </div>
          ))}
        </div>

        {/* Full Toolkit — coloured dot pill grid */}
        <div className={`mt-16 pt-12 border-t ${d ? 'border-zinc-800' : 'border-stone-100'}`}>
          <p className={`text-[11px] font-semibold tracking-[0.2em] uppercase mb-8 ${d ? 'text-zinc-600' : 'text-zinc-400'}`}>Full Toolkit</p>
          {toolCategories.map((cat) => (
            <div key={cat.label} className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-1.5 h-1.5 rounded-full ${d ? 'bg-amber-500' : 'bg-amber-700'}`} />
                <p className={`text-[10px] font-bold tracking-widest uppercase ${d ? 'text-zinc-500' : 'text-zinc-400'}`}>{cat.label}</p>
                <div className={`flex-1 h-px ${d ? 'bg-zinc-800' : 'bg-stone-100'}`} />
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.tools.map(tool => (
                  <div
                    key={tool.name}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-all hover:scale-105 cursor-default ${
                      d
                        ? 'bg-zinc-900 border-zinc-800 hover:border-zinc-600 hover:bg-zinc-800'
                        : 'bg-white border-stone-200 hover:border-amber-200 hover:bg-amber-50 shadow-sm'
                    }`}
                  >
                    <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${tool.dot}`} />
                    <span className={`text-[11px] font-medium ${d ? 'text-zinc-300' : 'text-zinc-700'}`}>{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
