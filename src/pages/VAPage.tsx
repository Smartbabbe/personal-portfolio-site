import { useTheme } from "../contexts/ThemeContext";
import {
  ArrowLeft,
  Download,
  FileText,
  Database,
  ExternalLink,
  ChevronDown,
} from "lucide-react";
import ContactSection from "../components/ContactSection";
import { useState, useEffect } from "react";
import SectionHeader from "../components/SectionHeader";
import VaServices from "../components/vaServices";
import { services } from "../data/portfolioData";
import DownloadCVButton from "../components/DownloadCVButton";
import { Confidentiality } from "../components/Confidentiality";
import { Resume } from "../components/Resume";
// import { Link } from "react-router-dom";

interface VAPageProps {
  onNavigate: (page: string) => void;
}

// Carousel images interface
interface CarouselImage {
  id: number;
  url: string;
  alt: string;
}

export default function VAPage({ onNavigate }: VAPageProps) {
  const { theme } = useTheme();
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Define your carousel images here
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

  // Carousel auto-rotate effect
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, carouselImages.length]);

  // Scroll to portfolio section
  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById("portfolio-section");
    portfolioSection?.scrollIntoView({ behavior: "smooth" });
  };

  const portfolioCategories = [
    {
      title: "Research & Documentation",
      featured: {
        title: "Web & Market Research Report",
        description:
          "A structured research project analyzing market trends, competitors, and opportunities to support informed business decisions.",
        tools: ["Google Docs", "Google Sheets", "Web Research Tools"],
        skills: ["Market Analysis", "Competitor Research", "Data Compilation"],
      },
      other: [
        {
          title: "Academic Research Compilation",
          description: "Organized academic sources with proper referencing",
        },
        {
          title: "Recruitment Research Documentation",
          description: "Candidate sourcing and analysis report",
        },
      ],
    },
    {
      title: "Proposals & Reports",
      featured: {
        title: "Business Proposal Development",
        description:
          "Comprehensive business proposal with market analysis, financial projections, and strategic recommendations.",
        tools: ["Google Docs", "Google Sheets", "Canva"],
        skills: [
          "Business Writing",
          "Financial Analysis",
          "Strategic Planning",
        ],
      },
      other: [
        {
          title: "Project Proposal & Operational Reporting",
          description: "Detailed project documentation and progress reports",
        },
      ],
    },
    {
      title: "Data & Dashboards",
      featured: {
        title: "Operations Data Tracking Dashboard",
        description:
          "Interactive dashboard for tracking key operational metrics, team performance, and project milestones.",
        tools: ["Google Sheets", "Excel", "Data Visualization"],
        skills: ["Data Analysis", "Dashboard Design", "Metrics Tracking"],
      },
      other: [
        {
          title: "Client & Records Data Management System",
          description: "Organized database for client information and records",
        },
      ],
    },
    {
      title: "Operations & Administrative Support",
      featured: {
        title: "Scheduling & Inbox Management System",
        description:
          "Streamlined calendar management and email organization system for executive support.",
        tools: ["Google Calendar", "Gmail", "Automation Tools"],
        skills: ["Executive Support", "Time Management", "Email Organization"],
      },
      other: [
        {
          title: "Task & Team Coordination Workflow",
          description: "Project management system for team collaboration",
        },
        {
          title: "Email Template Design",
          description:
            "Professional email templates for business communication",
        },
      ],
    },
  ];

  if (selectedProject === "Web & Market Research Report") {
    return (
      <div
        className={`min-h-screen pt-20 ${theme === "dark" ? "bg-gradient-to-b from-purple-900 via-gray-900 to-black" : "bg-gradient-to-b from-purple-50 via-white to-gray-50"}`}
      >
        <div className="max-w-5xl mx-auto px-6 py-16">
          <button
            onClick={() => setSelectedProject(null)}
            className={`mb-8 ${theme === "dark" ? "text-purple-400 hover:text-purple-300" : "text-purple-600 hover:text-purple-700"} font-medium transition-colors`}
          >
            ← Back to Portfolio
          </button>

          <div className="space-y-12">
            <div>
              <h1
                className={`text-4xl md:text-5xl font-bold mb-4 ${theme === "dark" ? "text-white" : "text-gray-900"}`}
              >
                Web & Market Research Report
              </h1>
              <p
                className={`text-xl ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}
              >
                A structured research project analyzing market trends,
                competitors, and opportunities to support informed business
                decisions.
              </p>
            </div>

            <div
              className={`p-8 rounded-xl ${theme === "dark" ? "bg-gray-800/50" : "bg-white"} shadow-xl`}
            >
              <h2
                className={`text-2xl font-bold mb-4 ${theme === "dark" ? "text-white" : "text-gray-900"}`}
              >
                The Problem
              </h2>
              <p
                className={`${theme === "dark" ? "text-gray-300" : "text-gray-700"} leading-relaxed`}
              >
                The client needed reliable insights into their market and
                competitors. Information was scattered across multiple online
                sources, making it difficult to get a clear picture. They needed
                the research organized into a clear, usable format that could
                inform strategic decisions and business planning.
              </p>
            </div>

            <div
              className={`p-8 rounded-xl ${theme === "dark" ? "bg-gray-800/50" : "bg-white"} shadow-xl`}
            >
              <h2
                className={`text-2xl font-bold mb-4 ${theme === "dark" ? "text-white" : "text-gray-900"}`}
              >
                What I Did
              </h2>
              <ul
                className={`space-y-3 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
              >
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>
                    Conducted structured web and market research using credible
                    online sources
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>Analyzed competitors, trends, and positioning</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>
                    Compiled findings into a well-organized research report
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>
                    Presented insights in a format suitable for strategic
                    planning
                  </span>
                </li>
              </ul>
            </div>

            <div
              className={`p-8 rounded-xl ${theme === "dark" ? "bg-gray-800/50" : "bg-white"} shadow-xl`}
            >
              <h2
                className={`text-2xl font-bold mb-4 ${theme === "dark" ? "text-white" : "text-gray-900"}`}
              >
                Tools Used
              </h2>
              <div className="flex flex-wrap gap-3">
                {[
                  "Google Docs",
                  "Google Sheets",
                  "Web Research Tools",
                  "Online Sources",
                ].map((tool) => (
                  <span
                    key={tool}
                    className={`px-4 py-2 rounded-full ${theme === "dark" ? "bg-purple-900/50 text-purple-300" : "bg-purple-100 text-purple-700"} font-medium`}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div
              className={`p-8 rounded-xl ${theme === "dark" ? "bg-gray-800/50" : "bg-white"} shadow-xl`}
            >
              <h2
                className={`text-2xl font-bold mb-6 ${theme === "dark" ? "text-white" : "text-gray-900"}`}
              >
                Visual Samples
              </h2>
              <div className="space-y-6">
                <div
                  className={`p-6 rounded-lg ${theme === "dark" ? "bg-gray-700/50" : "bg-gray-100"} border-2 border-dashed ${theme === "dark" ? "border-gray-600" : "border-gray-300"}`}
                >
                  <div className="aspect-video flex items-center justify-center">
                    <FileText
                      className={`w-16 h-16 ${theme === "dark" ? "text-gray-600" : "text-gray-400"}`}
                    />
                  </div>
                  <p
                    className={`text-center mt-4 ${theme === "dark" ? "text-gray-400" : "text-gray-600"} text-sm`}
                  >
                    Sample research structure using anonymized or mock data
                  </p>
                </div>
                <div
                  className={`p-6 rounded-lg ${theme === "dark" ? "bg-gray-700/50" : "bg-gray-100"} border-2 border-dashed ${theme === "dark" ? "border-gray-600" : "border-gray-300"}`}
                >
                  <div className="aspect-video flex items-center justify-center">
                    <Database
                      className={`w-16 h-16 ${theme === "dark" ? "text-gray-600" : "text-gray-400"}`}
                    />
                  </div>
                  <p
                    className={`text-center mt-4 ${theme === "dark" ? "text-gray-400" : "text-gray-600"} text-sm`}
                  >
                    Example of compiled findings and analysis format
                  </p>
                </div>
              </div>
            </div>

            <div
              className={`p-8 rounded-xl ${theme === "dark" ? "bg-gray-800/50" : "bg-white"} shadow-xl`}
            >
              <h2
                className={`text-2xl font-bold mb-4 ${theme === "dark" ? "text-white" : "text-gray-900"}`}
              >
                Outcome / Value Delivered
              </h2>
              <p
                className={`${theme === "dark" ? "text-gray-300" : "text-gray-700"} leading-relaxed`}
              >
                The research clarified the market landscape and provided
                actionable insights for the client's strategic planning. It
                improved their understanding of competitors and opportunities in
                their space. The structured report made insights easy to review
                and apply to their business decisions, saving them significant
                time and effort in their planning process.
              </p>
            </div>

            <div
              className={`p-6 rounded-xl ${theme === "dark" ? "bg-yellow-900/20 border-yellow-700/50" : "bg-yellow-50 border-yellow-200"} border-2`}
            >
              <p
                className={`${theme === "dark" ? "text-yellow-300" : "text-yellow-800"} font-medium`}
              >
                Confidentiality Note: All data and visuals shown have been
                anonymized or recreated using mock information to respect client
                confidentiality.
              </p>
            </div>

            <div className="text-center">
              <button className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg">
                Request Similar Research
              </button>
            </div>
          </div>
        </div>
        <ContactSection />
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen pt-2 ${theme === "dark" ? "bg-gradient-to-b from-purple-950 to-[#0a0a0a]" : "bg-gradient-to-b from-gray-50 to-white text-gray-600"}`}
    >
      {/* Hero Carousel Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Carousel */}
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
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/30"></div>
            </div>
          ))}
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 h-full flex flex-col px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pt-20">
          {/* Back to Home Button */}
          <button
            onClick={() => onNavigate("home")}
            className={`inline-flex items-center space-x-2 ${theme === "dark" ? "text-white hover:text-emerald-300" : "text-white hover:text-emerald-700"} mb-8 font-medium transition-colors self-start`}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>

          {/* Hero Content */}
          <div className="flex-1 flex flex-col items-center justify-center text-center space-y-6">
            <h1
              className={`text-4xl ${theme === "dark" ? "text-white" : "text-white"} sm:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in`}
            >
              <span
                className={`${theme === "dark" ? "text-emerald-200" : "text-red-200"}`}
              >
                Esther Okon
              </span>{" "}
              <br />A Tech-Savvy Research & Administrative Virtual Assistant
            </h1>

            <p
              className={`${theme === "dark" ? "" : "text-white"} text-lg sm:text-xl lg:text-2xl max-w-4xl leading-relaxed animate-fade-in-delay`}
            >
              I help founders, startups, and remote teams stay organized,
              data-driven, and efficient through structured operations support,
              research, and smart use of digital tools.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4 pt-8">
              <button
                onClick={scrollToPortfolio}
                className={`group px-8 py-4 ${theme === "dark" ? "bg-purple-800" : "bg-purple-600"} hover:bg-purple-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg`}
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

      {/* About Me Section */}
      <section
        className={`py-16 ${theme === "dark" ? "bg-transparent" : "bg-gray-100"}`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader title="About me" />
          <div
            className={`p-8 rounded-xl ${theme === "dark" ? "bg-gray-700/50" : "bg-white"} shadow-[0_0_15px_rgba(0,0,0,0.3)]`}
          >
            <p
              className={`text-lg ${theme === "dark" ? "text-gray-400" : "text-gray-600"} leading-relaxed`}
            >
              I am a detail-oriented virtual assistant specializing in
              operations and administrative support with a strong foundation in
              research and documentation. <br /> <br />I excel at managing data,
              creating clear reports, and implementing efficient systems using
              modern digital tools. <br /> <br /> My approach combines technical
              proficiency with high confidentiality and professionalism, making
              me a reliable partner for founders and teams navigating complex
              operational challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Services & Tools Section */}
      <section
        className={`py-16 mt-2 ${theme === "dark" ? "bg-transparent" : "bg-gray-100"}`}
      >
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

      {/* Portfolio Section */}
      <section
        id="portfolio-section"
        className={`py-16 ${theme === "dark" ? "mt-5 bg-gray-700/50" : "mt-2 bg-gray-100"}`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <h2
            className={`text-4xl font-bold mb-12 text-center ${theme === "dark" ? "text-white" : "text-gray-900"}`}
          >
            Portfolio
          </h2>

          <div className="space-y-16">
            {portfolioCategories.map((category, idx) => (
              <div key={idx} className="space-y-6">
                <h3
                  className={`text-3xl font-bold ${theme === "dark" ? "text-purple-400" : "text-purple-600"}`}
                >
                  {category.title}
                </h3>

                <div
                  className={`p-8 rounded-xl ${theme === "dark" ? "bg-gray-800/50" : "bg-white"} shadow-xl hover:shadow-2xl transition-all cursor-pointer group`}
                  onClick={() => setSelectedProject(category.featured.title)}
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    <div
                      className={`md:w-1/3 aspect-video rounded-lg ${theme === "dark" ? "bg-gray-700" : "bg-gray-200"} flex items-center justify-center`}
                    >
                      <FileText
                        className={`w-16 h-16 ${theme === "dark" ? "text-gray-600" : "text-gray-400"}`}
                      />
                    </div>
                    <div className="md:w-2/3 space-y-4">
                      <h4
                        className={`text-2xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"} group-hover:text-purple-500 transition-colors`}
                      >
                        {category.featured.title}
                      </h4>
                      <p
                        className={`${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
                      >
                        {category.featured.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {category.featured.tools.map((tool, i) => (
                          <span
                            key={i}
                            className={`px-3 py-1 rounded-full text-sm ${theme === "dark" ? "bg-purple-900/50 text-purple-300" : "bg-purple-100 text-purple-700"}`}
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                      <button className="flex items-center gap-2 text-purple-500 font-semibold group-hover:gap-3 transition-all">
                        View Project
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 ml-4">
                  {category.other.map((project, i) => (
                    <div
                      key={i}
                      className={`p-4 ${theme === "dark" ? "hover:bg-gray-800/30" : "hover:bg-gray-50"} rounded-lg transition-colors`}
                    >
                      <h5
                        className={`font-semibold ${theme === "dark" ? "text-white" : "text-gray-900"} mb-1`}
                      >
                        {project.title}
                      </h5>
                      <p
                        className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}
                      >
                        {project.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Confidentiality Notice */}
      <Confidentiality />

      {/* Resume / CV Section */}
      <Resume
        cvType="va"
        buttonText="Download VA Resume"
        title="Virtual Assistant Resume"
        description="Download my VA-focused CV showcasing my administrative and operations expertise."
      />

      <ContactSection />

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-fade-in-delay {
          animation: fade-in 0.8s ease-out 0.2s both;
        }
      `}</style>
    </div>
  );
}
