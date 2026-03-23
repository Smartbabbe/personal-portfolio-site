import { useEffect, useRef, useState } from 'react'
import { useTheme } from '../../contexts/ThemeContext'
import { communityPoints, communityStats } from '../../data/web3/web3Data'

// stats imported from web3Data.ts

function CountUp({ target, duration = 1400 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting && !started.current) {
          started.current = true
          const start = performance.now()
          const step = (now: number) => {
            const progress = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.round(eased * target))
            if (progress < 1) requestAnimationFrame(step)
          }
          requestAnimationFrame(step)
        }
      })
    }, { threshold: 0.5 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [target, duration])

  return <span ref={ref}>{count}</span>
}

export default function Web3Community() {
  const { theme } = useTheme()
  const d = theme === 'dark'

  return (
    <section id="w3-community" className={`py-24 px-6 border-t ${d ? 'bg-zinc-950 border-zinc-800' : 'bg-white border-stone-100'}`}>
      <div className="max-w-6xl mx-auto">
        <div className="w3-reveal mb-16">
          <p className={`text-[11px] font-semibold tracking-[0.2em] uppercase mb-3 ${d ? 'text-amber-500/70' : 'text-amber-700/70'}`}>Community</p>
          <h2 className={`text-4xl font-black tracking-tight ${d ? 'text-zinc-100' : 'text-zinc-900'}`}>Women in DeFi — Enugu</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div className="w3-reveal">
            <p className={`text-base leading-relaxed mb-8 ${d ? 'text-zinc-400' : 'text-zinc-600'}`}>
              As the founding Chapter Lead and Team Lead of Women in DeFi Enugu, I've built one of Eastern Nigeria's most active Web3 communities for women — creating a structured space for education, networking, and real on-chain participation.
            </p>
            <ul className="space-y-4 mb-10">
              {communityPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="w-0.5 min-h-[20px] flex-shrink-0 mt-1 rounded-full" style={{ background: 'linear-gradient(to bottom, #b87333, #d4956a)' }} />
                  <p className={`text-sm leading-relaxed ${d ? 'text-zinc-400' : 'text-zinc-600'}`}>{point}</p>
                </li>
              ))}
            </ul>
            <a
              href="https://twitter.com/thesmarrtEsther"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all hover:scale-105 hover:opacity-90 active:scale-95"
              style={{ background: 'linear-gradient(135deg, #b87333, #d4956a)' }}
            >
              Follow My Journey →
            </a>
          </div>

          {/* Right — animated stats */}
          <div className="w3-reveal grid grid-cols-2 gap-4">
            {communityStats.map((stat, i) => (
              <div
                key={i}
                className={`group rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${
                  d
                    ? 'border-zinc-800 bg-zinc-900 hover:bg-zinc-800 hover:shadow-zinc-900'
                    : 'border-stone-200 bg-stone-50 hover:bg-white hover:shadow-stone-200'
                }`}
              >
                <span className="text-2xl block mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">{stat.emoji}</span>
                <p
                  className="text-3xl font-black mb-1"
                  style={{ background: 'linear-gradient(135deg, #b87333, #d4956a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
                >
                  <CountUp target={stat.target} />
                </p>
                <p className={`text-sm font-semibold ${d ? 'text-zinc-200' : 'text-zinc-800'}`}>{stat.label}</p>
                <p className={`text-xs mt-0.5 ${d ? 'text-zinc-600' : 'text-zinc-400'}`}>{stat.sub}</p>
                {/* Bottom accent line that grows on hover */}
                <div className="mt-4 h-px w-0 group-hover:w-full transition-all duration-500" style={{ background: 'linear-gradient(to right, #b87333, #d4956a)' }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
