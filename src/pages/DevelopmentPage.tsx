import { useEffect, useState } from "react";
import { ArrowLeft, ArrowUp } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import DevHero from "../components/Dev/DevHero";
import DevSkills from "../components/Dev/DevSkills";
import DevFeaturedProject from "../components/Dev/DevFeaturedProject";
import DevProjectGrid from "../components/Dev/DevProjectGrid";
import ContactSection from "../components/ContactSection";
import { Resume } from "../components/Resume";

interface DevelopmentPageProps {
  onNavigate: (page: string) => void;
}

export default function DevelopmentPage({ onNavigate }: DevelopmentPageProps) {
  const { theme } = useTheme();
  const dark = theme === "dark";
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("dev-visible");
          }
        });
      },
      { threshold: 0.08 },
    );
    document
      .querySelectorAll(".dev-animate")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Show scroll to top button after scrolling down
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`min-h-screen pt-20 ${dark ? "bg-[#0A0A0F]" : "bg-[#F7F7FB]"}`}
    >
      {/* Fonts + Devicons + animation keyframes — minimal, only what Tailwind can't do */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800;900&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&display=swap');
        @import url('https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css');
        .dev-page, .dev-page * { font-family: 'DM Sans', sans-serif; }
        .dev-heading { font-family: 'Syne', sans-serif !important; }
        .dev-animate { opacity: 0; transform: translateY(28px); transition: opacity 0.65s cubic-bezier(0.16,1,0.3,1), transform 0.65s cubic-bezier(0.16,1,0.3,1); }
        .dev-visible { opacity: 1 !important; transform: translateY(0) !important; }
        .skill-icon { transition: transform 0.25s cubic-bezier(0.34,1.56,0.64,1); }
        .skill-icon:hover { transform: translateY(-6px) scale(1.08); }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        .animate-blink { animation: blink 0.9s step-end infinite; }
        @keyframes float-slow { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-20px)} }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
      `}</style>

      <div className="dev-page relative">
        {/* Back to Home button */}
        <div className="top-4  z-20 relative z-5 w-[95%] md:w-3/5 mx-auto px-6">
          <button
            onClick={() => onNavigate("home")}
            className={`flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg transition-all hover:scale-105
              ${dark ? "text-gray-300 hover:text-white bg-white/5 hover:bg-white/10" : "text-gray-600 hover:text-gray-900 bg-white/80 hover:bg-white shadow-sm"}`}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>
        </div>

        <DevHero />
        <DevSkills />
        <DevFeaturedProject />
        <DevProjectGrid />
        {/* Confidentiality note */}
        <div className="w-4/5 mx-auto mt-12 text-center">
          <p
            className={`text-sm rounded-lg p-4 inline-block transition-colors duration-300 border ${
              theme === "dark"
                ? "text-gray-400 bg-amber-900/30 border-amber-800"
                : "text-gray-600 bg-amber-50 border-amber-200"
            }`}
          >
            <strong>Confidentiality Note:</strong> All samples shown are
            anonymized or recreated using mock data to maintain client
            confidentiality.
          </p>
        </div>
        <Resume
          cvType="dev"
          buttonText="Download Developer CV"
          title="Developer Resume"
          description="Download my comprehensive developer CV with full-stack development experience."
          buttonClassName={`px-8 py-4 ${theme === "dark" ? "bg-emerald-600 hover:bg-emerald-700" : "bg-emerald-500 hover:bg-emerald-600"} text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg flex items-center gap-2 mx-auto`}
          className="mt-11"
        />

        <ContactSection />

        {/* Scroll to top button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110
              ${dark ? "bg-white/10 hover:bg-white/20 text-white border border-white/10" : "bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 shadow-md"}`}
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
}
