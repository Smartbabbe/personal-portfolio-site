import { useTheme } from "../contexts/ThemeContext";
import { ArrowLeft, ChevronDown } from "lucide-react";
import ContactSection from "../components/ContactSection";
import { useState, useEffect } from "react";
import SectionHeader from "../components/SectionHeader";
import VaServices from "../components/vaServices";
import { services } from "../data/portfolioData";
import DownloadCVButton from "../components/DownloadCVButton";
import { Resume } from "../components/Resume";
import VAPortfolioSection from "../components/VAPortfolioSection";
import ProjectDetailView from "../components/ProjectDetailView";
import { portfolioCategories } from "../data/vaPortfolioData";

interface VAPageProps {
  onNavigate: (page: string) => void;
}

interface CarouselImage {
  id: number;
  url: string;
  alt: string;
}

const carouselImages: CarouselImage[] = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=1920",
    alt: "Remote workspace setup",
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/5797903/pexels-photo-5797903.jpeg?auto=compress&cs=tinysrgb&w=1920",
    alt: "Calendar and scheduling interface",
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=1920",
    alt: "Spreadsheet and dashboard workspace",
  },
  {
    id: 4,
    url: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=1920",
    alt: "Professional administrative workspace",
  },
];

export default function VAPage({ onNavigate }: VAPageProps) {
  const { theme } = useTheme();
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const scrollToPortfolio = () => {
    document.getElementById("portfolio-section")?.scrollIntoView({ behavior: "smooth" });
  };

  // Find the featured project matching the selected ID across all categories
  const selectedProject = selectedProjectId
    ? portfolioCategories.find((c) => c.featured.id === selectedProjectId)?.featured ?? null
    : null;

  // If a project is selected, render its detail page
  if (selectedProject) {
    return (
      <ProjectDetailView
        project={selectedProject}
        onBack={() => setSelectedProjectId(null)}
      />
    );
  }

  return (
    <div
      className={`min-h-screen pt-2 ${
        theme === "dark"
          ? "bg-gradient-to-b from-purple-950 to-[#0a0a0a]"
          : "bg-gradient-to-b from-gray-50 to-white text-gray-600"
      }`}
    >
      {/* ── Hero Carousel ── */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          {carouselImages.map((image, index) => (
            <div
              key={image.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <img src={image.url} alt={image.alt} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/30" />
            </div>
          ))}
        </div>

        <div className="relative z-10 h-full flex flex-col px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pt-20">
          <button
            onClick={() => onNavigate("home")}
            className="inline-flex items-center space-x-2 text-white hover:text-emerald-300 mb-8 font-medium transition-colors self-start"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>

          <div className="flex-1 flex flex-col items-center justify-center text-center space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white animate-fade-in">
              <span className={theme === "dark" ? "text-emerald-200" : "text-red-200"}>
                Esther Okon
              </span>{" "}
              <br />
              A Tech-Savvy Research &amp; Administrative Virtual Assistant
            </h1>

            <p className="text-white text-lg sm:text-xl lg:text-2xl max-w-4xl leading-relaxed animate-fade-in-delay">
              I help founders, startups, and remote teams stay organized, data-driven, and
              efficient through structured operations support, research, and smart use of digital tools.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-8">
              <button
                onClick={scrollToPortfolio}
                className={`group px-8 py-4 ${
                  theme === "dark" ? "bg-purple-800" : "bg-purple-600"
                } hover:bg-purple-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg`}
              >
                View My Work
                <ChevronDown className="inline-block ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </button>
              <DownloadCVButton
                cvType="va"
                buttonText="Download VA Resume"
                className="px-8 py-4 bg-white hover:bg-gray-100 text-purple-600 font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg flex items-center gap-2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── About Me ── */}
      <section className={`py-16 ${theme === "dark" ? "bg-transparent" : "bg-gray-100"}`}>
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader title="About me" />
          <div
            className={`p-8 rounded-xl ${
              theme === "dark" ? "bg-gray-700/50" : "bg-white"
            } shadow-[0_0_15px_rgba(0,0,0,0.3)]`}
          >
            <p className={`text-lg leading-relaxed ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
              I am a detail-oriented virtual assistant specializing in operations and administrative
              support with a strong foundation in research and documentation.
              <br /><br />
              I excel at managing data, creating clear reports, and implementing efficient systems
              using modern digital tools.
              <br /><br />
              My approach combines technical proficiency with high confidentiality and
              professionalism, making me a reliable partner for founders and teams navigating
              complex operational challenges.
            </p>
          </div>
        </div>
      </section>

      {/* ── Core Services & Tools ── */}
      <section className={`py-16 mt-2 ${theme === "dark" ? "bg-transparent" : "bg-gray-100"}`}>
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            title="Core Services & Tools"
            subtitle="Comprehensive virtual assistant services designed to streamline your operations and support your growth."
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {services.map((service) => (
              <VaServices key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Portfolio ── */}
      <section
        id="portfolio-section"
        className={`py-20 px-4 sm:px-6 lg:px-8 ${
          theme === "dark" ? "mt-5 bg-gray-900/50" : "mt-2 bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Case Studies & Sample Work"
            subtitle="Real projects demonstrating expertise across operations, data, research, and documentation."
          />

          <div className="space-y-20">
            {portfolioCategories.map((category) => (
              <VAPortfolioSection
                key={category.id}
                category={category}
                onFeaturedPageClick={(id) => setSelectedProjectId(id)}
              />
            ))}
          </div>

          {/* Confidentiality note */}
          <div className="mt-12 text-center">
            <p
              className={`text-sm rounded-lg p-4 inline-block transition-colors duration-300 border ${
                theme === "dark"
                  ? "text-gray-400 bg-amber-900/30 border-amber-800"
                  : "text-gray-600 bg-amber-50 border-amber-200"
              }`}
            >
              <strong>Confidentiality Note:</strong> All samples shown are anonymized or recreated
              using mock data to maintain client confidentiality.
            </p>
          </div>
        </div>
      </section>

      {/* ── Resume Download ── */}
      <Resume
        cvType="va"
        buttonText="Download VA Resume"
        title="Virtual Assistant Resume"
        description="Download my VA-focused CV showcasing my administrative and operations expertise."
      />

      <ContactSection />

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in       { animation: fade-in 0.8s ease-out; }
        .animate-fade-in-delay { animation: fade-in 0.8s ease-out 0.2s both; }
      `}</style>
    </div>
  );
}
