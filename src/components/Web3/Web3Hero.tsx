import { useEffect, useRef, useState } from "react";
import { useTheme } from "../../contexts/ThemeContext";
// import DownloadCVButton from '../DownloadCVButton'
import { ArrowLeft } from "lucide-react";

const NODES = [
  { x: 50, y: 20, label: "DeFi", center: false },
  { x: 20, y: 45, label: "Community", center: false },
  { x: 80, y: 38, label: "Education", center: false },
  { x: 30, y: 72, label: "Trading", center: false },
  { x: 70, y: 68, label: "Frontend", center: false },
  { x: 50, y: 50, label: "Esther", center: true },
];
const EDGES = [
  [0, 5],
  [1, 5],
  [2, 5],
  [3, 5],
  [4, 5],
  [0, 2],
  [1, 3],
  [3, 4],
];

// Particles
const PARTICLES = Array.from({ length: 55 }, () => ({
  x: Math.random() * 100,
  y: Math.random() * 100,
  vx: (Math.random() - 0.5) * 0.012,
  vy: (Math.random() - 0.5) * 0.012,
  r: Math.random() * 1.8 + 0.4,
  opacity: Math.random() * 0.35 + 0.05,
  phase: Math.random() * Math.PI * 2,
}));

interface Web3PageProps {
  onNavigate: (page: string) => void;
}


export default function Web3Hero({ onNavigate }: Web3PageProps ) {
  const { theme } = useTheme();
  const d = theme === "dark";
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>();
  const [ready, setReady] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);

  useEffect(() => {
    setTimeout(() => setReady(true), 80);
  }, []);

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
      const copper = d ? "rgba(184,115,51," : "rgba(139,84,38,";
      const copperB = d ? "rgba(212,149,106," : "rgba(184,115,51,";

      // ── Floating particles ──
      PARTICLES.forEach((p) => {
        p.x = (p.x + p.vx + 100) % 100;
        p.y = (p.y + p.vy + 100) % 100;
        const flicker = Math.sin(t / 600 + p.phase) * 0.3 + 0.7;
        ctx.beginPath();
        ctx.arc((p.x / 100) * W, (p.y / 100) * H, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `${copper}${p.opacity * flicker})`;
        ctx.fill();
      });

      // ── Edges ──
      EDGES.forEach(([a, b]) => {
        const A = NODES[a],
          B = NODES[b];
        const x1 = (A.x / 100) * W,
          y1 = (A.y / 100) * H;
        const x2 = (B.x / 100) * W,
          y2 = (B.y / 100) * H;
        const hi = hovered === a || hovered === b;
        ctx.strokeStyle = hi ? `${copperB}0.5)` : `${copper}0.14)`;
        ctx.lineWidth = hi ? 1.5 : 1;
        ctx.setLineDash([3, 5]);
        ctx.lineDashOffset = -(t / 35);
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        ctx.setLineDash([]);
        // pulse dot
        const prog = (t / 2200 + a * 0.15) % 1;
        ctx.beginPath();
        ctx.arc(
          x1 + (x2 - x1) * prog,
          y1 + (y2 - y1) * prog,
          2,
          0,
          Math.PI * 2,
        );
        ctx.fillStyle = `${copper}0.7)`;
        ctx.fill();
      });

      // ── Nodes ──
      NODES.forEach((node, i) => {
        const x = (node.x / 100) * W,
          y = (node.y / 100) * H;
        const isC = node.center,
          isH = hovered === i;
        const pulse = Math.sin(t / 900 + i * 0.9) * 0.5 + 0.5;
        const r = isC ? 20 : isH ? 13 : 9;

        if (isC) {
          ctx.beginPath();
          ctx.arc(x, y, 32 + pulse * 6, 0, Math.PI * 2);
          ctx.strokeStyle = `${copper}${0.08 + pulse * 0.1})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
        const g = ctx.createRadialGradient(x, y, 0, x, y, r);
        g.addColorStop(0, `${copperB}${isC ? 0.85 : isH ? 0.7 : 0.4})`);
        g.addColorStop(1, `${copper}${isC ? 0.4 : isH ? 0.25 : 0.08})`);
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();
        ctx.strokeStyle = `${copperB}${isC ? 0.7 : 0.45})`;
        ctx.lineWidth = isC ? 1.5 : 1;
        ctx.stroke();

        ctx.font = `${isC ? "600 " : ""}10px system-ui,sans-serif`;
        ctx.fillStyle = d
          ? `rgba(212,149,106,${isC ? 1 : 0.85})`
          : `rgba(120,70,25,${isC ? 1 : 0.8})`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(node.label, x, y);
      });

      animRef.current = requestAnimationFrame(draw);
    };
    animRef.current = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(animRef.current!);
      window.removeEventListener("resize", resize);
    };
  }, [hovered, d]);

  const getHit = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const c = canvasRef.current;
    if (!c) return null;
    const r = c.getBoundingClientRect();
    const mx = e.clientX - r.left,
      my = e.clientY - r.top;
    for (let i = 0; i < NODES.length; i++) {
      const x = (NODES[i].x / 100) * c.offsetWidth;
      const y = (NODES[i].y / 100) * c.offsetHeight;
      if (Math.hypot(mx - x, my - y) < 18) return i;
    }
    return null;
  };

  return (
    <section
      className={`relative min-h-screen flex flex-col items-center pt-20 overflow-hidden ${d ? "bg-zinc-950" : "bg-stone-50"}`}
    >
      <div className="top-4 relative w-[95%] md:w-[78%] mx-auto px-6">
        <button
          onClick={() => onNavigate("home")}
          className={`flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg transition-all hover:scale-105
                    ${d ? "text-gray-600 hover:text-white bg-white/5 hover:bg-white/10" : "text-gray-600 hover:text-gray-900 bg-white/5 hover:bg-white shadow-sm"}`}
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </button>
      </div>
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `linear-gradient(${d ? "rgba(184,115,51,0.05)" : "rgba(139,84,38,0.06)"} 1px, transparent 1px),
                            linear-gradient(90deg, ${d ? "rgba(184,115,51,0.05)" : "rgba(139,84,38,0.06)"} 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Ambient glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "20%",
          left: "55%",
          width: "40vw",
          height: "40vw",
          borderRadius: "50%",
          background: d
            ? "radial-gradient(circle, rgba(184,115,51,0.06), transparent 70%)"
            : "radial-gradient(circle, rgba(184,115,51,0.08), transparent 70%)",
          transform: "translate(-50%, -50%)",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-20">
        {/* LEFT */}
        <div>
          <div
            className={`inline-flex items-center gap-2 mb-10 transition-all duration-700 ${ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <span
              className="relative w-2 h-2 rounded-full"
              style={{ background: d ? "#d4956a" : "#b87333" }}
            >
              <span
                className="absolute inset-0 rounded-full animate-ping"
                style={{ background: d ? "#d4956a" : "#b87333", opacity: 0.4 }}
              />
            </span>
            <span
              className={`text-[11px] font-semibold tracking-[0.2em] uppercase ${d ? "text-amber-500/70" : "text-amber-700/70"}`}
            >
              Web3 Developer & Community Leader
            </span>
          </div>

          <div
            className={`mb-8 transition-all duration-700 delay-75 ${ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            <h1
              className={`font-black leading-[0.88] tracking-[-0.04em] ${d ? "text-zinc-100" : "text-zinc-900"}`}
              style={{
                fontSize: "clamp(3.5rem, 6vw, 6rem)",
                fontFamily: "serif",
              }}
            >
              ESTHER
            </h1>
            <h1
              className="font-black leading-[0.88] tracking-[-0.04em]"
              style={{
                fontSize: "clamp(3.5rem, 8vw, 8rem)",
                fontFamily: "inherit sans-serif",
                background:
                  "linear-gradient(135deg, #b87333, #d4956a, #8b5e2a)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              OKON
            </h1>
          </div>

          <p
            className={`text-base leading-relaxed mb-10 max-w-sm transition-all duration-700 delay-150 ${ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"} ${d ? "text-zinc-400" : "text-zinc-600"}`}
          >
            DeFi educator, community builder, on-chain analyst, and Web3
            frontend developer. 5+ years in the space, building from Enugu.
          </p>

          <div
            className={`flex flex-wrap gap-2 mb-10 transition-all duration-700 delay-200 ${ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          >
            {[
              "DeFi Educator",
              "Community Builder",
              "On-chain Analyst",
              "Public Speaker",
              "Web3 Frontend",
            ].map((r) => (
              <span
                key={r}
                className={`text-[11px] font-medium px-3 py-1.5 rounded-full border ${d ? "border-zinc-700 text-zinc-400 bg-zinc-900" : "border-stone-200 text-zinc-600 bg-white"}`}
              >
                {r}
              </span>
            ))}
          </div>

          <div
            className={`flex flex-wrap gap-3 mb-14 transition-all duration-700 delay-300 ${ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          >
            <button
              onClick={() =>
                document
                  .getElementById("w3-projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all hover:scale-105 hover:opacity-90 active:scale-95"
              style={{
                background: "linear-gradient(135deg, #b87333, #d4956a)",
              }}
            >
              View Work
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("w3-journey")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className={`px-6 py-3 rounded-xl text-sm font-semibold border transition-all hover:scale-105 active:scale-95 ${d ? "border-zinc-700 text-zinc-300 hover:bg-zinc-800" : "border-stone-300 text-zinc-700 hover:bg-stone-100"}`}
            >
              My Journey
            </button>
            {/* <DownloadCVButton cvType="web3" buttonText="Download CV"
              className={`px-6 py-3 rounded-xl text-sm font-semibold border transition-all hover:scale-105 active:scale-95 ${d ? 'border-amber-700/30 text-amber-500 hover:bg-amber-900/10' : 'border-amber-300 text-amber-700 hover:bg-amber-50'}`}
            /> */}
          </div>

          <div
            className={`flex gap-8 transition-all duration-700 delay-500 ${ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          >
            {[
              ["5+", "Years On-chain"],
              ["2", "Cohorts Taught"],
              ["2", "Public Talks"],
              ["1", "Chapter Founded"],
            ].map(([v, l]) => (
              <div key={l}>
                <p
                  className="text-2xl font-black"
                  style={{
                    background: "linear-gradient(135deg, #b87333, #d4956a)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {v}
                </p>
                <p
                  className={`text-[11px] mt-0.5 ${d ? "text-zinc-600" : "text-zinc-500"}`}
                >
                  {l}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — Canvas with particles */}
        <div
          className={`relative h-[420px] lg:h-[560px] transition-all duration-1000 delay-200 ${ready ? "opacity-100" : "opacity-0"}`}
        >
          <canvas
            ref={canvasRef}
            className="w-full h-full cursor-crosshair"
            onMouseMove={(e) => setHovered(getHit(e))}
            onMouseLeave={() => setHovered(null)}
          />
          {hovered !== null && (
            <div
              className={`absolute bottom-6 left-1/2 -translate-x-1/2 text-[11px] font-medium px-3 py-1.5 rounded-full border pointer-events-none ${d ? "bg-zinc-900/90 border-zinc-700 text-amber-400" : "bg-white/90 border-stone-200 text-amber-700"}`}
            >
              {NODES[hovered].label}
            </div>
          )}
          <p
            className={`absolute bottom-0 right-0 text-[10px] font-mono ${d ? "text-zinc-700" : "text-stone-400"}`}
          >
            hover the nodes
          </p>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 ${d ? "opacity-30" : "opacity-40"}`}
      >
        <div
          className="w-px h-8"
          style={{
            background: `linear-gradient(to bottom, transparent, #b87333)`,
          }}
        />
        <div className="w-1 h-1 rounded-full bg-amber-600 animate-bounce" />
      </div>
    </section>
  );
}
