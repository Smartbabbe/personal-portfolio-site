import { useEffect, useState } from 'react'
import { useTheme } from '../contexts/ThemeContext'
import ContactSection from '../components/ContactSection'
import Web3Hero       from '../components/Web3/Web3Hero'
import Web3Skills     from '../components/Web3/Web3Skills'
import Web3Experience from '../components/Web3/Web3Experience'
import Web3Projects   from '../components/Web3/Web3Projects'
import Web3Journey    from '../components/Web3/Web3Journey'
import Web3Community  from '../components/Web3/Web3Community'
import Web3Speaking   from '../components/Web3/Web3Speaking'

interface Props { onNavigate: (p: string) => void }

export default function Web3Page({ onNavigate }: Props) {
  const { theme } = useTheme()
  const d = theme === 'dark'
  const [showTop, setShowTop] = useState(false)

  useEffect(() => { window.scrollTo(0, 0) }, [])

  useEffect(() => {
    const fn = () => setShowTop(window.scrollY > 500)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <div className={`min-h-screen transition-colors duration-300 ${d?'bg-zinc-950 text-zinc-100':'bg-stone-50 text-zinc-900'}`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap');
        #w3-root, #w3-root * { font-family: 'DM Sans', sans-serif; }
        #w3-root h1, #w3-root h2, #w3-root h3 { font-family: 'Syne', sans-serif; }
        .animate-fade-in { animation: fadeIn 0.25s ease forwards; }
        @keyframes fadeIn { from { opacity:0; transform:scale(0.96); } to { opacity:1; transform:scale(1); } }
      `}</style>

      <div id="w3-root">
        <Web3Hero      onNavigate={onNavigate} />
        <Web3Skills    />
        <Web3Experience />
        <Web3Projects  />
        <Web3Journey   />
        <Web3Community />
        <Web3Speaking  />
        <ContactSection />
      </div>

      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className={`fixed bottom-8 right-8 z-50 w-11 h-11 rounded-full flex items-center justify-center border transition-all hover:scale-110 active:scale-95 ${
            d ? 'border-zinc-700 bg-zinc-900 text-zinc-400 hover:border-amber-600/50 hover:text-amber-500'
              : 'border-stone-200 bg-white text-zinc-500 hover:border-amber-300 hover:text-amber-700 shadow-sm'
          }`}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/>
          </svg>
        </button>
      )}
    </div>
  )
}
