import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";
import DownloadCVButton from "../DownloadCVButton";

const typingWords = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "JavaScript",
  "REST APIs",
  "Solidity",
  "Modern CSS",
];

export default function DevHero() {
  const { theme } = useTheme();
  const dark = theme === "dark";

  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) {
      const timeout = setTimeout(() => setPaused(false), 1200);
      return () => clearTimeout(timeout);
    }

    const currentWord = typingWords[wordIndex];

    if (!deleting) {
      if (charIndex < currentWord.length) {
        const timeout = setTimeout(() => {
          setDisplayed(currentWord.slice(0, charIndex + 1));
          setCharIndex((c) => c + 1);
        }, 80);
        return () => clearTimeout(timeout);
      } else {
        setPaused(true);
        setDeleting(true);
      }
    } else {
      if (charIndex > 0) {
        const timeout = setTimeout(() => {
          setDisplayed(currentWord.slice(0, charIndex - 1));
          setCharIndex((c) => c - 1);
        }, 45);
        return () => clearTimeout(timeout);
      } else {
        setDeleting(false);
        setWordIndex((w) => (w + 1) % typingWords.length);
      }
    }
  }, [charIndex, deleting, wordIndex, paused]);

  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* Background mesh */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-0 w-full h-full opacity-100"
          style={{
            background: dark
              ? "radial-gradient(ellipse 80% 60% at 10% 40%, rgba(110,231,183,0.07) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 90% 20%, rgba(139,92,246,0.08) 0%, transparent 55%), radial-gradient(ellipse 50% 40% at 60% 90%, rgba(59,130,246,0.06) 0%, transparent 50%)"
              : "radial-gradient(ellipse 80% 60% at 10% 40%, rgba(110,231,183,0.12) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 90% 20%, rgba(139,92,246,0.1) 0%, transparent 55%), radial-gradient(ellipse 50% 40% at 60% 90%, rgba(59,130,246,0.08) 0%, transparent 50%)",
          }}
        />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(${dark ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.5)"} 1px, transparent 1px), linear-gradient(90deg, ${dark ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.5)"} 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 w-[95%] md:w-3/5 mx-auto px-6">
        <div className="w-full">
          {/* Badge */}
          <div className="dev-animate mb-8 inline-flex items-center gap-2">
            <span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase"
              style={{
                background: dark
                  ? "rgba(110,231,183,0.08)"
                  : "rgba(110,231,183,0.15)",
                border: "1px solid rgba(110,231,183,0.25)",
                color: dark ? "#6EE7B7" : "#059669",
              }}
            >
              <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
              Available for work
            </span>
          </div>

          {/* Name */}
          <div className="dev-animate mb-3">
            <p
              className="dev-heading text-4xl md:text-4xl font-semibold tracking-wide"
              style={{
                color: dark ? "rgba(255,255,255,0.45)" : "rgba(0,0,0,0.4)",
              }}
            >
              Esther Okon
            </p>
          </div>

          {/* Main headline */}
          <h1 className="dev-animate dev-heading mb-6">
            <span
              className={`block text-5xl md:text-7xl font-extrabold leading-[1.0] mb-2 ${dark ? "text-white" : "text-gray-950"}`}
            >
              Frontend
            </span>
            <span
              className="block text-5xl md:text-7xl font-extrabold leading-[1.0]"
              style={{
                background:
                  "linear-gradient(135deg, #6EE7B7 0%, #3B82F6 50%, #8B5CF6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Developer.
            </span>
          </h1>

          {/* Typing text */}
          <p
            className={`dev-animate text-lg md:text-xl font-light leading-relaxed mb-10 max-w-2xl ${dark ? "text-gray-400" : "text-gray-600"}`}
          >
            Focused on creating fast, accessible, and beautifully crafted
            frontend experiences using{" "}
            <span
              className="font-semibold inline-block min-w-[120px]"
              style={{
                color: dark ? "#6EE7B7" : "#059669",
              }}
            >
              {displayed}
              <span
                className="inline-block w-[0.5px] h-[1.1em] ml-0.5 align-middle animate-blink"
                style={{ background: dark ? "#6EE7B7" : "#059669" }}
              />
            </span>
            {""}- writing clean, maintainable code that delivers seamless user
            experiences.
          </p>

          {/* CTAs */}
          <div className="dev-animate flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{
                background:
                  "linear-gradient(135deg, #6EE7B7 0%, #3B82F6 50%, #8B5CF6 100%)",
              }}
            >
              View My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <DownloadCVButton
              cvType="dev"
              buttonText="Download CV"
              className={`flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105 ${dark ? "bg-white/8 hover:bg-white/12 text-white border border-white/10" : "bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 shadow-sm"}`}
            ></DownloadCVButton>
          </div>

          {/* Stats */}
          <div className="dev-animate mt-16 flex flex-wrap gap-8">
            {[
              { value: "3+", label: "Years Experience" },
              { value: "10+", label: "Projects Built" },
              { value: "2", label: "Internships" },
            ].map((stat) => (
              <div key={stat.label}>
                <p
                  className="dev-heading text-3xl font-extrabold"
                  style={{
                    background: "linear-gradient(135deg, #6EE7B7, #3B82F6)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {stat.value}
                </p>
                <p
                  className={`text-sm mt-0.5 ${dark ? "text-gray-500" : "text-gray-500"}`}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating orbs */}
      <div
        className="absolute bottom-20 right-10 w-64 h-64 rounded-full opacity-15 blur-3xl pointer-events-none animate-float-slow"
        style={{ background: "radial-gradient(circle, #6EE7B7, transparent)" }}
      />
      <div
        className="absolute top-32 right-32 w-40 h-40 rounded-full opacity-10 blur-3xl pointer-events-none animate-float-slow"
        style={{
          background: "radial-gradient(circle, #8B5CF6, transparent)",
          animationDelay: "2s",
        }}
      />
    </section>
  );
}
