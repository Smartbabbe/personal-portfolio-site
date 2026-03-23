import { useState } from "react";
import { useTheme } from "../../contexts/ThemeContext";
import { talks } from "../../data/web3/web3Data";
import nextbridge from "../../../public/Web3/portfolio-proofs/nextbridge-public speaking.png";
import nextbridge1 from "../../../public/Web3/portfolio-proofs/nextbridge-public speaking1.png";

// talks imported from web3Data.ts

function TalkCard({
  talk,
  d,
  index,
}: {
  talk: (typeof talks)[0];
  d: boolean;
  index: number;
}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        className={`w3-reveal rounded-2xl border overflow-hidden ${d ? "border-zinc-800 bg-zinc-900" : "border-stone-200 bg-white"}`}
        style={{ transitionDelay: `${index * 0.15}s` }}
      >
        <div className="p-6 flex flex-col h-full">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span
                  className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${d ? "bg-amber-900/20 text-amber-400" : "bg-amber-100 text-amber-800"}`}
                >
                  {talk.role}
                </span>
                <span
                  className={`font-mono text-[10px] ${d ? "text-zinc-500" : "text-zinc-400"}`}
                >
                  {talk.year}
                </span>
              </div>
              <h3
                className={`font-bold text-base ${d ? "text-zinc-100" : "text-zinc-900"}`}
              >
                {talk.event}
              </h3>
              <p
                className={`text-xs mt-1 italic ${d ? "text-amber-500/70" : "text-amber-700/70"}`}
              >
                "{talk.topic}"
              </p>
            </div>
            <span className="text-2xl flex-shrink-0">🎤</span>
          </div>

          <p
            className={`text-sm leading-relaxed flex-1 mb-5 ${d ? "text-zinc-400" : "text-zinc-600"}`}
          >
            {talk.desc}
          </p>

          <button
            onClick={() => setShowModal(true)}
            className="w-full py-2.5 rounded-xl text-xs font-semibold text-white transition-all hover:opacity-90 hover:scale-105"
            style={{ background: "linear-gradient(135deg, #b87333, #d4956a)" }}
          >
            View Presentation ↗
          </button>
        </div>
      </div>

      {/* Fullscreen modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          />
          <div
            className={`relative w-full max-w-5xl rounded-2xl border overflow-hidden shadow-2xl z-10 ${d ? "bg-zinc-900 border-zinc-700" : "bg-white border-stone-200"}`}
            style={{
              animation:
                "modalIn 0.25s cubic-bezier(0.34,1.56,0.64,1) forwards",
            }}
          >
            {/* Modal header */}
            <div
              className={`flex items-center justify-between px-6 py-4 border-b ${d ? "border-zinc-800" : "border-stone-100"}`}
            >
              <div>
                <p
                  className={`text-xs mb-0.5 ${d ? "text-zinc-500" : "text-zinc-500"}`}
                >
                  {talk.event} · {talk.year}
                </p>
                <p
                  className={`font-bold text-sm ${d ? "text-zinc-100" : "text-zinc-900"}`}
                >
                  {talk.topic}
                </p>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm transition-colors ${d ? "bg-zinc-800 hover:bg-zinc-700 text-zinc-400" : "bg-stone-100 hover:bg-stone-200 text-zinc-500"}`}
              >
                ✕
              </button>
            </div>

            {/* Slide area — tall enough to actually use */}
            <div
              className={`w-full ${d ? "bg-zinc-800" : "bg-stone-50"}`}
              style={{ height: "70vh" }}
            >
              {talk.pptxEmbedUrl ? (
                <iframe
                  src={talk.pptxEmbedUrl}
                  className="w-full h-full"
                  title={talk.topic}
                  allowFullScreen
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center px-8">
                    <p className="text-5xl mb-4">📊</p>
                    <p
                      className={`font-semibold mb-2 ${d ? "text-zinc-200" : "text-zinc-800"}`}
                    >
                      {talk.topic}
                    </p>
                    <p
                      className={`text-sm leading-relaxed max-w-sm ${d ? "text-zinc-500" : "text-zinc-500"}`}
                    >
                      Convert your PPTX to Google Slides, then go to{" "}
                      <strong>File → Share → Publish to web → Embed</strong> and
                      paste the URL into{" "}
                      <code
                        className={`text-xs ${d ? "text-amber-400" : "text-amber-700"}`}
                      >
                        pptxEmbedUrl
                      </code>{" "}
                      in{" "}
                      <code
                        className={`text-xs ${d ? "text-amber-400" : "text-amber-700"}`}
                      >
                        web3Data.ts
                      </code>
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div
              className={`px-6 py-3 border-t flex items-center justify-between ${d ? "border-zinc-800" : "border-stone-100"}`}
            >
              <p className={`text-xs ${d ? "text-zinc-600" : "text-zinc-400"}`}>
                {talk.slides} slides
              </p>
              <button
                onClick={() => setShowModal(false)}
                className={`text-xs font-semibold px-4 py-1.5 rounded-lg transition-colors ${d ? "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800" : "text-zinc-500 hover:text-zinc-700 hover:bg-stone-100"}`}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.95) translateY(10px); }
          to   { opacity: 1; transform: scale(1)    translateY(0);    }
        }
      `}</style>
    </>
  );
}

export default function Web3Speaking() {
  const { theme } = useTheme();
  const d = theme === "dark";

  return (
    <section
      id="w3-speaking"
      className={`py-24 px-6 border-t ${d ? "bg-zinc-900 border-zinc-800" : "bg-stone-50 border-stone-100"}`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="w3-reveal mb-16">
          <p
            className={`text-[11px] font-semibold tracking-[0.2em] uppercase mb-3 ${d ? "text-amber-500/70" : "text-amber-700/70"}`}
          >
            On Stage
          </p>
          <h2
            className={`text-4xl font-black tracking-tight ${d ? "text-zinc-100" : "text-zinc-900"}`}
          >
            Speaking & Events
          </h2>
          <p
            className={`text-sm mt-2 ${d ? "text-zinc-500" : "text-zinc-500"}`}
          >
            Flip a card to view the presentation deck
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {talks.map((talk, i) => (
            <TalkCard key={talk.id} talk={talk} d={d} index={i} />
          ))}
        </div>

        {/* Photo placeholder */}
        <div
          className={`w3-reveal rounded-2xl border-2 border-dashed p-10 text-center ${d ? "border-zinc-800 bg-zinc-900/50" : "border-stone-200 bg-white"}`}
        >
          <p className="text-3xl mb-3">📸</p>
          <p
            className={`font-semibold text-sm mb-1 ${d ? "text-zinc-200" : "text-zinc-800"}`}
          >
            Public Speaking Event Photos
          </p>
          <div className="flex items-center justify-center gap-6 mt-4 flex-wrap border rounded-lg p-4 " style={{ background: d ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.03)" }}>
            <img src={nextbridge} alt="" />
            <img src={nextbridge1} alt="" />           
          </div>

        </div>
      </div>
    </section>
  );
}
