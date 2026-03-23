import { useState, useRef, useEffect } from "react";
import { useTheme } from "../../contexts/ThemeContext";
import { milestones } from "../../data/web3/web3Data";

// milestones imported from web3Data.ts

const tLight: Record<string, string> = {
  Origin: "bg-zinc-100 text-zinc-600",
  Education: "bg-blue-100 text-blue-800",
  Community: "bg-emerald-100 text-emerald-800",
  Trading: "bg-yellow-100 text-yellow-800",
  Leadership: "bg-amber-100 text-amber-800",
  Speaking: "bg-violet-100 text-violet-800",
  Ambassador: "bg-rose-100 text-rose-800",
};
const tDark: Record<string, string> = {
  Origin: "bg-zinc-800 text-zinc-400",
  Education: "bg-blue-900/20 text-blue-400",
  Community: "bg-emerald-900/20 text-emerald-400",
  Trading: "bg-yellow-900/20 text-yellow-400",
  Leadership: "bg-amber-900/20 text-amber-400",
  Speaking: "bg-violet-900/20 text-violet-400",
  Ambassador: "bg-rose-900/20 text-rose-400",
};

// ── Animated Timeline ─────────────────────────────────────────────────────────
function AnimatedTimeline({ d }: { d: boolean }) {
  const [open, setOpen] = useState<number | null>(null);
  const [lineHeight, setLineHeight] = useState(0);
  const lineRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Draw the line progressively as you scroll
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const lineEl = lineRef.current;
            if (!lineEl) return;
            const full = lineEl.parentElement?.offsetHeight || 0;
            let start: number | null = null;
            const animate = (t: number) => {
              if (start === null) start = t;
              const progress = Math.min((t - start) / 1800, 1);
              const eased = 1 - Math.pow(1 - progress, 2);
              setLineHeight(eased * full);
              if (progress < 1) requestAnimationFrame(animate);
            };
            requestAnimationFrame(animate);
            obs.unobserve(e.target);
          }
        }),
      { threshold: 0.1 },
    );
    if (listRef.current) obs.observe(listRef.current);
    return () => obs.disconnect();
  }, []);

  // Stagger items
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const el = e.target as HTMLElement;
            el.style.opacity = "1";
            el.style.transform = "translateX(0)";
            obs.unobserve(el);
          }
        }),
      { threshold: 0.1 },
    );
    itemRefs.current.forEach((el, i) => {
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = "translateX(-20px)";
      el.style.transition = `opacity 0.5s ease ${i * 0.06}s, transform 0.5s ease ${i * 0.06}s`;
      obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <div className="relative max-w-2xl mx-auto">
      {/* Background line */}
      <div
        className={`absolute left-4 top-0 bottom-0 w-px ${d ? "bg-zinc-800" : "bg-stone-200"}`}
      />
      {/* Animated fill line */}
      <div
        ref={lineRef}
        className="absolute left-4 top-0 w-px transition-none"
        style={{
          height: `${lineHeight}px`,
          background: "linear-gradient(to bottom, #b87333, #d4956a)",
        }}
      />

      <div ref={listRef}>
        {milestones.map((m, i) => (
          <div
            key={m.id}
            ref={(el) => {
              itemRefs.current[i] = el;
            }}
            className="relative flex gap-8 mb-5 pl-12"
          >
            {/* Dot — lights up when line reaches it */}
            <div
              className="absolute left-[13px] top-5 w-2.5 h-2.5 rounded-full border-2 z-10 transition-all duration-300"
              style={{
                borderColor:
                  lineHeight >
                  (i / milestones.length) * (listRef.current?.offsetHeight || 1)
                    ? "#b87333"
                    : d
                      ? "#3f3f46"
                      : "#d4d4d4",
                background:
                  lineHeight >
                  (i / milestones.length) * (listRef.current?.offsetHeight || 1)
                    ? "#b87333"
                    : d
                      ? "#09090b"
                      : "#fafaf9",
                boxShadow:
                  lineHeight >
                  (i / milestones.length) * (listRef.current?.offsetHeight || 1)
                    ? "0 0 8px rgba(184,115,51,0.5)"
                    : "none",
              }}
            />

            <div
              className={`flex-1 rounded-xl border px-5 py-4 cursor-pointer transition-all duration-300 ${
                d
                  ? `border-zinc-800 ${open === i ? "bg-zinc-800 shadow-lg shadow-zinc-900" : "bg-zinc-900 hover:bg-zinc-800"}`
                  : `border-stone-200 ${open === i ? "bg-white shadow-md" : "bg-stone-50 hover:bg-white"}`
              }`}
              onClick={() => setOpen(open === i ? null : i)}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3 min-w-0">
                  <span className="text-lg flex-shrink-0">{m.icon}</span>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${d ? tDark[m.type] : tLight[m.type]}`}
                      >
                        {m.type}
                      </span>
                      <span
                        className={`font-mono text-[10px] ${d ? "text-zinc-600" : "text-zinc-400"}`}
                      >
                        {m.year}
                      </span>
                    </div>
                    <p
                      className={`font-bold text-sm ${d ? "text-zinc-100" : "text-zinc-900"}`}
                    >
                      {m.title}
                    </p>
                    <p
                      className={`text-xs mt-0.5 ${d ? "text-amber-500/70" : "text-amber-700/70"}`}
                    >
                      {m.subtitle}
                    </p>
                  </div>
                </div>
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className={`flex-shrink-0 mt-1 transition-transform duration-300 ${open === i ? "rotate-180" : ""} ${d ? "text-zinc-600" : "text-zinc-400"}`}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>

              <div
                className="overflow-hidden transition-all duration-400"
                style={{ maxHeight: open === i ? "200px" : "0px" }}
              >
                <p
                  className={`mt-3 pt-3 text-sm leading-relaxed border-t ${d ? "text-zinc-400 border-zinc-700" : "text-zinc-600 border-stone-200"}`}
                >
                  {m.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Constellation ─────────────────────────────────────────────────────────────
const CONST_POS = [
  { x: 50, y: 8 },
  { x: 20, y: 24 },
  { x: 78, y: 22 },
  { x: 10, y: 50 },
  { x: 44, y: 42 },
  { x: 82, y: 46 },
  { x: 25, y: 66 },
  { x: 56, y: 63 },
  { x: 87, y: 68 },
  { x: 42, y: 82 },
  { x: 68, y: 80 },
];
const CONST_EDGES = [
  [0, 1],
  [0, 2],
  [1, 3],
  [1, 4],
  [2, 4],
  [2, 5],
  [3, 6],
  [4, 6],
  [4, 7],
  [5, 8],
  [6, 9],
  [7, 9],
  [7, 10],
  [8, 10],
];

function Constellation({ d }: { d: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>();
  const [hovered, setHovered] = useState<number | null>(null);
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = (t: number) => {
      const W = canvas.offsetWidth,
        H = canvas.offsetHeight;
      ctx.clearRect(0, 0, W, H);
      const c = d ? "rgba(184,115,51," : "rgba(139,84,38,";
      const b = d ? "rgba(212,149,106," : "rgba(184,115,51,";

      CONST_EDGES.forEach(([a, e]) => {
        const p1 = CONST_POS[a],
          p2 = CONST_POS[e];
        const x1 = (p1.x / 100) * W,
          y1 = (p1.y / 100) * H,
          x2 = (p2.x / 100) * W,
          y2 = (p2.y / 100) * H;
        const hi =
          hovered === a || hovered === e || selected === a || selected === e;
        ctx.strokeStyle = hi ? `${b}0.5)` : `${c}0.1)`;
        ctx.lineWidth = hi ? 1.5 : 0.8;
        ctx.setLineDash(hi ? [] : [3, 5]);
        ctx.lineDashOffset = -(t / 40);
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        ctx.setLineDash([]);
      });

      CONST_POS.forEach((p, i) => {
        if (!milestones[i]) return;
        const x = (p.x / 100) * W,
          y = (p.y / 100) * H;
        const isH = hovered === i,
          isS = selected === i;
        const pulse = Math.sin(t / 1000 + i * 0.7) * 0.4 + 0.6;
        const r = isS ? 14 : isH ? 10 : 7;
        if (isH || isS) {
          ctx.beginPath();
          ctx.arc(x, y, r + 7 + pulse * 4, 0, Math.PI * 2);
          ctx.strokeStyle = `${c}0.15)`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
        const g = ctx.createRadialGradient(x, y, 0, x, y, r);
        g.addColorStop(0, `${b}${isS ? 0.9 : isH ? 0.7 : 0.45})`);
        g.addColorStop(1, `${c}${isS ? 0.45 : isH ? 0.3 : 0.1})`);
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();
        ctx.strokeStyle = `${b}${isS ? 0.9 : 0.45})`;
        ctx.lineWidth = 1.2;
        ctx.stroke();
        ctx.font = `9px system-ui,sans-serif`;
        ctx.fillStyle = d ? `${c}0.9)` : `${c}0.8)`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(milestones[i].year, x, y);
      });
      animRef.current = requestAnimationFrame(draw);
    };
    animRef.current = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(animRef.current!);
      window.removeEventListener("resize", resize);
    };
  }, [hovered, selected, d]);

  const getIdx = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const c = canvasRef.current;
    if (!c) return null;
    const r = c.getBoundingClientRect(),
      W = c.offsetWidth,
      H = c.offsetHeight;
    for (let i = 0; i < CONST_POS.length; i++)
      if (
        Math.hypot(
          e.clientX - r.left - (CONST_POS[i].x / 100) * W,
          e.clientY - r.top - (CONST_POS[i].y / 100) * H,
        ) < 16
      )
        return i;
    return null;
  };

  const sel = selected !== null ? milestones[selected] : null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-start">
      <div className="md:col-span-3 relative h-[400px]">
        <canvas
          ref={canvasRef}
          className="w-full h-full cursor-crosshair"
          onMouseMove={(e) => setHovered(getIdx(e))}
          onMouseLeave={() => setHovered(null)}
          onClick={(e) => {
            const n = getIdx(e);
            setSelected(selected === n ? null : n);
          }}
        />
        <p
          className={`absolute bottom-1 right-2 text-[10px] font-mono ${d ? "text-zinc-700" : "text-stone-400"}`}
        >
          click a node
        </p>
      </div>

      <div className="md:col-span-2 space-y-2">
        {sel ? (
          <div
            className={`rounded-2xl border p-5 ${d ? "border-zinc-800 bg-zinc-900" : "border-stone-200 bg-white"}`}
          >
            <div className="flex items-center gap-2 mb-3 flex-wrap">
              <span className="text-xl">{sel.icon}</span>
              <span
                className={`font-mono text-[10px] ${d ? "text-zinc-500" : "text-zinc-400"}`}
              >
                {sel.year}
              </span>
              <span
                className={`text-[10px] font-bold px-2 py-0.5 rounded-full ml-auto ${d ? tDark[sel.type] : tLight[sel.type]}`}
              >
                {sel.type}
              </span>
            </div>
            <p
              className={`font-bold text-sm mb-1 ${d ? "text-zinc-100" : "text-zinc-900"}`}
            >
              {sel.title}
            </p>
            <p
              className={`text-xs mb-3 ${d ? "text-amber-500/70" : "text-amber-700/70"}`}
            >
              {sel.subtitle}
            </p>
            <p
              className={`text-xs leading-relaxed ${d ? "text-zinc-400" : "text-zinc-600"}`}
            >
              {sel.desc}
            </p>
          </div>
        ) : (
          <div
            className={`rounded-2xl border p-5 text-center ${d ? "border-zinc-800 bg-zinc-900" : "border-stone-200 bg-white"}`}
          >
            <p className="text-2xl mb-2">✦</p>
            <p className={`text-xs ${d ? "text-zinc-500" : "text-zinc-500"}`}>
              Click a node to read about that milestone
            </p>
          </div>
        )}

        <div
          className={`rounded-2xl border overflow-hidden ${d ? "border-zinc-800" : "border-stone-200"}`}
        >
          {milestones.map((m, i) => (
            <button
              key={m.id}
              onClick={() => setSelected(selected === i ? null : i)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 text-left border-b last:border-0 transition-colors ${
                d
                  ? `border-zinc-800 ${selected === i ? "bg-zinc-800" : "hover:bg-zinc-800/50"}`
                  : `border-stone-100 ${selected === i ? "bg-amber-50" : "hover:bg-stone-50"}`
              }`}
            >
              <span className="text-sm">{m.icon}</span>
              <p
                className={`text-xs font-medium flex-1 truncate ${d ? "text-zinc-300" : "text-zinc-700"}`}
              >
                {m.title}
              </p>
              <span
                className={`font-mono text-[10px] flex-shrink-0 ${d ? "text-zinc-600" : "text-zinc-400"}`}
              >
                {m.year}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Web3Journey() {
  const { theme } = useTheme();
  const d = theme === "dark";
  const [view, setView] = useState<"timeline" | "constellation">("timeline");

  return (
    <section
      id="w3-journey"
      className={`py-24 px-6 border-t ${d ? "bg-zinc-900 border-zinc-800" : "bg-stone-50 border-stone-100"}`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="w3-reveal mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <p
              className={`text-[11px] font-semibold tracking-[0.2em] uppercase mb-3 ${d ? "text-amber-500/70" : "text-amber-700/70"}`}
            >
              Origin Story
            </p>
            <h2
              className={`text-4xl font-black tracking-tight ${d ? "text-zinc-100" : "text-zinc-900"}`}
            >
              My Web3 Journey
            </h2>
            <p
              className={`text-sm mt-2 ${d ? "text-zinc-500" : "text-zinc-500"}`}
            >
              2021 → present · {milestones.length} milestones
            </p>
          </div>
          <div
            className={`flex items-center rounded-xl border p-1 self-start sm:self-auto ${d ? "border-zinc-800 bg-zinc-900" : "border-stone-200 bg-white"}`}
          >
            {(["timeline", "constellation"] as const).map((v) => (
              <button
                key={v}
                onClick={() => setView(v)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold capitalize transition-all ${view === v ? "text-white shadow-sm" : d ? "text-zinc-500 hover:text-zinc-300" : "text-zinc-500 hover:text-zinc-700"}`}
                style={
                  view === v
                    ? {
                        background: "linear-gradient(135deg, #b87333, #d4956a)",
                      }
                    : {}
                }
              >
                {v}
              </button>
            ))}
          </div>
        </div>

        <div className="w3-reveal">
          {view === "timeline" ? (
            <AnimatedTimeline d={d} />
          ) : (
            <Constellation d={d} />
          )}
        </div>
      </div>
    </section>
  );
}
