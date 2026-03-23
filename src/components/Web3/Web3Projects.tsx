import { useState, useRef, useEffect } from 'react'
import { useTheme } from '../../contexts/ThemeContext'
import { projects, fieldCfg, statusCls, FIELDS, type Field, type Project } from '../../data/web3/web3Data'

// ── Lightbox ─────────────────────────────────────────────────────────────────

function Lightbox({ project, d, onClose }: { project: Project; d: boolean; onClose: () => void }) {
  const fc = fieldCfg[project.field]

  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', fn)
    return () => window.removeEventListener('keydown', fn)
  }, [onClose])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10">
      <div
        className="absolute inset-0 bg-black/75 backdrop-blur-sm"
        onClick={onClose}
      />
      <div
        className={`relative w-full max-w-3xl rounded-3xl border overflow-hidden shadow-2xl z-10 ${d ? 'bg-zinc-900 border-zinc-700' : 'bg-white border-stone-200'}`}
        style={{ animation: 'lightboxIn 0.25s cubic-bezier(0.34,1.56,0.64,1) forwards' }}
      >
        {/* Image area */}
        <div className={`relative w-full aspect-video ${d ? 'bg-zinc-800' : 'bg-stone-100'}`}>
          {project.image ? (
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              className="w-full h-full object-cover object-top"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center gap-3">
              <span className="text-5xl">{project.icon}</span>
              <p className={`text-sm font-medium ${d ? 'text-zinc-500' : 'text-zinc-400'}`}>
                No screenshot yet
              </p>
              <p className={`text-xs max-w-xs text-center ${d ? 'text-zinc-600' : 'text-zinc-400'}`}>
                Add an image to{' '}
                <code className={`text-xs ${d ? 'text-amber-400' : 'text-amber-700'}`}>
                  public/portfolio-proofs/Web3/projects/
                </code>
                {' '}and set the <code className={`text-xs ${d ? 'text-amber-400' : 'text-amber-700'}`}>image</code> field in web3Data.ts
              </p>
            </div>
          )}

          {/* Close button */}
          <button
            onClick={onClose}
            className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center text-sm transition-colors ${d ? 'bg-zinc-800/90 hover:bg-zinc-700 text-zinc-300' : 'bg-white/90 hover:bg-stone-100 text-zinc-600'}`}
          >
            ✕
          </button>
        </div>

        {/* Info */}
        <div className="p-6">
          <div className="flex items-start justify-between gap-4 mb-3">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{project.icon}</span>
              <div>
                <h3 className={`font-bold text-base leading-snug ${d ? 'text-zinc-100' : 'text-zinc-900'}`}>
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${d ? fc.dark : fc.light}`}>
                    {project.field}
                  </span>
                  <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${statusCls(project.status, d)}`}>
                    {project.status}
                  </span>
                </div>
              </div>
            </div>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white transition-all hover:scale-105 hover:opacity-90"
                style={{ background: 'linear-gradient(135deg, #b87333, #d4956a)' }}
                onClick={e => e.stopPropagation()}
              >
                View Live
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
                </svg>
              </a>
            )}
          </div>

          <p className={`text-sm leading-relaxed mb-4 ${d ? 'text-zinc-400' : 'text-zinc-600'}`}>
            {project.desc}
          </p>

          <div className="flex flex-wrap gap-1.5">
            {project.stack.map(s => (
              <span
                key={s}
                className={`text-[10px] font-medium px-2.5 py-1 rounded-md ${d ? 'bg-zinc-800 text-zinc-400' : 'bg-stone-100 text-zinc-600'}`}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Card ─────────────────────────────────────────────────────────────────────

function ProjectCard({ project, d, index }: { project: Project; d: boolean; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [vis,       setVis]       = useState(false)
  const [hov,       setHov]       = useState(false)
  const [expanded,  setExpanded]  = useState(false)
  const [lightbox,  setLightbox]  = useState(false)
  const fc = fieldCfg[project.field]

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true) }, { threshold: 0.08 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const hasVisual = !!(project.image || project.liveUrl)

  return (
    <>
      <div
        ref={ref}
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        className={`rounded-2xl border overflow-hidden transition-colors ${
          d
            ? `border-zinc-800 ${expanded ? 'bg-zinc-800' : 'bg-zinc-900'}`
            : `border-stone-200 ${expanded ? 'bg-stone-50' : 'bg-white'}`
        }`}
        style={{
          opacity: vis ? 1 : 0,
          transform: vis ? (hov ? 'translateY(-4px)' : 'translateY(0)') : 'translateY(24px)',
          boxShadow: hov
            ? d ? '0 16px 40px rgba(0,0,0,0.5)' : '0 16px 40px rgba(0,0,0,0.1)'
            : 'none',
          transition: `opacity 0.55s cubic-bezier(0.16,1,0.3,1) ${index * 0.06}s,
                       transform 0.3s cubic-bezier(0.34,1.56,0.64,1),
                       box-shadow 0.3s ease, background 0.2s`,
        }}
      >
        {/* Shimmer top line */}
        <div style={{
          height: '2px',
          background: hov ? 'linear-gradient(90deg, transparent, #b87333, #d4956a, transparent)' : 'transparent',
          transition: 'background 0.4s ease',
        }} />

        {/* Screenshot thumbnail — only for projects with an image */}
        {project.image && (
          <div
            className={`relative w-full overflow-hidden cursor-pointer group/thumb ${d ? 'bg-zinc-800' : 'bg-stone-100'}`}
            style={{ height: '160px' }}
            onClick={() => setLightbox(true)}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/thumb:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover/thumb:bg-black/30 transition-colors duration-200 flex items-center justify-center">
              <div className="opacity-0 group-hover/thumb:opacity-100 transition-opacity duration-200 flex items-center gap-1.5 bg-white/90 text-zinc-900 text-xs font-semibold px-3 py-1.5 rounded-full">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
                Preview
              </div>
            </div>
          </div>
        )}

        <div className="p-6">
          {/* Top row */}
          <div className="flex items-start justify-between gap-3 mb-4">
            <span className="text-2xl">{project.icon}</span>
            <div className="flex items-center gap-2 flex-wrap justify-end">
              <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${d ? fc.dark : fc.light}`}>
                {project.field}
              </span>
              <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${statusCls(project.status, d)}`}>
                {project.status}
              </span>
            </div>
          </div>

          <h3 className={`font-bold text-sm leading-snug mb-2 ${d ? 'text-zinc-100' : 'text-zinc-900'}`}>
            {project.title}
          </h3>
          <p className={`text-xs leading-relaxed mb-4 ${d ? 'text-zinc-400' : 'text-zinc-500'}`}>
            {project.desc}
          </p>

          {/* Stack pills */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.stack.map(s => (
              <span key={s} className={`text-[10px] font-medium px-2 py-0.5 rounded-md ${d ? 'bg-zinc-800 text-zinc-400' : 'bg-stone-100 text-zinc-600'}`}>
                {s}
              </span>
            ))}
          </div>

          {/* Action row */}
          <div className="flex items-center gap-3 mb-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[11px] font-semibold transition-colors hover:opacity-80"
                style={{ color: '#b87333' }}
                onClick={e => e.stopPropagation()}
              >
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="2" y1="12" x2="22" y2="12"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
                Live
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-1.5 text-[11px] font-semibold transition-colors ${d ? 'text-zinc-400 hover:text-zinc-200' : 'text-zinc-500 hover:text-zinc-800'}`}
                onClick={e => e.stopPropagation()}
              >
                <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.005 2.04.138 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                GitHub
              </a>
            )}
            {hasVisual && (
              <button
                onClick={() => setLightbox(true)}
                className={`ml-auto flex items-center gap-1.5 text-[11px] font-semibold transition-colors ${d ? 'text-zinc-500 hover:text-zinc-200' : 'text-zinc-400 hover:text-zinc-700'}`}
              >
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <circle cx="8.5" cy="8.5" r="1.5"/>
                  <polyline points="21 15 16 10 5 21"/>
                </svg>
                {project.image ? 'Preview' : 'Details'}
              </button>
            )}
          </div>

          {/* Expandable outcomes */}
          <div style={{
            maxHeight: expanded ? '200px' : '0',
            overflow: 'hidden',
            transition: 'max-height 0.4s cubic-bezier(0.16,1,0.3,1)',
          }}>
            <div className={`pt-4 border-t space-y-2 ${d ? 'border-zinc-700' : 'border-stone-200'}`}>
              {project.outcomes.map((o, oi) => (
                <div key={oi} className="flex items-start gap-2.5"
                  style={{
                    opacity: expanded ? 1 : 0,
                    transform: expanded ? 'translateX(0)' : 'translateX(-6px)',
                    transition: `all 0.3s ease ${oi * 0.05 + 0.1}s`,
                  }}
                >
                  <span className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0" style={{ background: fc.dot || '#b87333' }} />
                  <p className={`text-xs ${d ? 'text-zinc-400' : 'text-zinc-600'}`}>{o}</p>
                </div>
              ))}
              {project.hasPptx && (
                <div className={`mt-3 pt-3 border-t flex items-center gap-2 ${d ? 'border-zinc-700' : 'border-stone-100'}`}>
                  <span>📎</span>
                  <p className={`text-xs font-medium ${d ? 'text-amber-400' : 'text-amber-700'}`}>
                    Presentation deck available — see Speaking section
                  </p>
                </div>
              )}
            </div>
          </div>

          <button
            onClick={() => setExpanded(!expanded)}
            className={`mt-3 text-[11px] font-semibold flex items-center gap-1.5 transition-colors ${d ? 'text-zinc-500 hover:text-amber-400' : 'text-zinc-400 hover:text-amber-700'}`}
          >
            {expanded ? 'Show less' : 'Show outcomes'}
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
              style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s ease' }}>
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </button>
        </div>
      </div>

      {lightbox && (
        <Lightbox project={project} d={d} onClose={() => setLightbox(false)} />
      )}
    </>
  )
}

// ── Main ─────────────────────────────────────────────────────────────────────

export default function Web3Projects() {
  const { theme } = useTheme()
  const d = theme === 'dark'
  const [activeField, setActiveField] = useState<Field>('All')
  const headerRef = useRef<HTMLDivElement>(null)
  const [headerVis, setHeaderVis] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setHeaderVis(true) }, { threshold: 0.2 })
    if (headerRef.current) obs.observe(headerRef.current)
    return () => obs.disconnect()
  }, [])

  const filtered = activeField === 'All'
    ? projects
    : projects.filter(p => p.field === activeField)

  return (
    <>
      <style>{`
        @keyframes lightboxIn {
          from { opacity: 0; transform: scale(0.92) translateY(12px); }
          to   { opacity: 1; transform: scale(1)    translateY(0);    }
        }
      `}</style>

      <section id="w3-projects" className={`py-24 px-6 border-t ${d ? 'bg-zinc-950 border-zinc-800' : 'bg-white border-stone-100'}`}>
        <div className="max-w-6xl mx-auto">

          <div
            ref={headerRef}
            className="mb-6"
            style={{ opacity: headerVis?1:0, transform: headerVis?'translateY(0)':'translateY(20px)', transition:'all 0.6s cubic-bezier(0.16,1,0.3,1)' }}
          >
            <p className={`text-[11px] font-semibold tracking-[0.2em] uppercase mb-3 ${d?'text-amber-500/70':'text-amber-700/70'}`}>Portfolio</p>
            <h2 className={`text-4xl font-black tracking-tight ${d?'text-zinc-100':'text-zinc-900'}`}>Work & Projects</h2>
            <p className={`text-sm mt-3 ${d?'text-zinc-500':'text-zinc-500'}`}>
              {projects.length} projects · community, education, development, speaking, and analysis
            </p>
          </div>

          {/* Filters */}
          <div
            className="flex flex-wrap gap-2 mb-10"
            style={{ opacity: headerVis?1:0, transition:'opacity 0.6s cubic-bezier(0.16,1,0.3,1) 0.1s' }}
          >
            {FIELDS.map(field => (
              <button
                key={field}
                onClick={() => setActiveField(field)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all hover:scale-105 active:scale-95 ${
                  activeField === field
                    ? 'text-white border-transparent'
                    : d ? 'border-zinc-800 text-zinc-400 bg-zinc-900 hover:border-zinc-700'
                        : 'border-stone-200 text-zinc-600 bg-white hover:border-stone-300'
                }`}
                style={activeField === field ? { background: 'linear-gradient(135deg, #b87333, #d4956a)' } : {}}
              >
                {field}
                {field !== 'All' && (
                  <span className={`ml-1.5 text-[10px] ${activeField===field?'opacity-70':d?'text-zinc-600':'text-zinc-400'}`}>
                    {projects.filter(p => p.field === field).length}
                  </span>
                )}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <p className={`text-sm text-center py-16 ${d?'text-zinc-600':'text-zinc-400'}`}>No projects in this category.</p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filtered.map((p, i) => (
                <ProjectCard key={p.id} project={p} d={d} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
