import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";
import { projects } from "../../data/Dev/devPortfolioData";

export default function DevProjectGrid() {
  const { theme } = useTheme();
  const dark = theme === "dark";

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="dev-animate mb-14">
          <p
            className={`text-xs font-semibold tracking-widest uppercase mb-3 ${dark ? "text-purple-400" : "text-purple-600"}`}
          >
            Portfolio
          </p>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <h2
              className={`dev-heading text-4xl md:text-5xl font-bold ${dark ? "text-white" : "text-gray-950"}`}
            >
              More Projects
            </h2>
            <a
              href="https://github.com/Smartbabbe?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${dark ? "text-gray-400 hover:text-white" : "text-gray-500 hover:text-gray-800"}`}
            >
              <Github className="w-4 h-4" />
              View all on GitHub
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`dev-animate group rounded-2xl overflow-hidden transition-all duration-300
                ${
                  dark
                    ? "bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 hover:border-white/10"
                    : "bg-gray-50 hover:bg-white border border-gray-100 hover:border-gray-200 hover:shadow-lg"
                }`}
              style={{ transitionDelay: `${(i % 6) * 0.05}s` }}
            >
              {/* Image placeholder */}
              <div
                className="aspect-video relative overflow-hidden flex items-center justify-center"
                style={{ background: project.gradient }}
              >
                {project.thumbnail ? (
                  <div className="absolute inset-[5%] rounded-xl overflow-hidden shadow-lg">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                ) : (
                  <>
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                      style={{
                        background: `radial-gradient(circle at center, ${project.accent}, transparent)`,
                      }}
                    />
                    <span
                      className="dev-heading text-5xl font-black opacity-[0.08] group-hover:opacity-[0.15] transition-opacity select-none"
                      style={{ color: project.accent }}
                    >
                      {project.title.charAt(0)}
                    </span>
                  </>
                )}
                {project.comingSoon ? (
                  <span
                    className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider"
                    style={{
                      background: "rgba(245,158,11,0.15)",
                      color: "#F59E0B",
                      border: "1px solid rgba(245,158,11,0.2)",
                    }}
                  >
                    Coming Soon
                  </span>
                ) : (
                  <ArrowUpRight
                    className="absolute top-3 right-3 w-4 h-4 opacity-0 group-hover:opacity-60 transition-all duration-300"
                    style={{ color: project.accent }}
                  />
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <span
                  className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider mb-3"
                  style={{
                    background: `${project.accent}15`,
                    color: project.accent,
                  }}
                >
                  {project.category}
                </span>
                <h4
                  className={`dev-heading text-base font-bold mb-2 leading-snug ${dark ? "text-white" : "text-gray-950"}`}
                >
                  {project.title}
                </h4>
                <p
                  className={`text-xs leading-relaxed mb-4 ${dark ? "text-gray-400" : "text-gray-600"}`}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tools.map((t) => (
                    <span
                      key={t}
                      className={`px-2 py-0.5 rounded-md text-[10px] font-medium ${dark ? "bg-gray-800 text-gray-400" : "bg-gray-100 text-gray-600"}`}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {!project.comingSoon && (
                  <div
                    className={`flex gap-4 pt-3 border-t ${dark ? "border-white/5" : "border-gray-100"}`}
                  >
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-semibold transition-colors"
                        style={{ color: project.accent }}
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-1.5 text-xs font-semibold transition-colors ${dark ? "text-gray-400 hover:text-white" : "text-gray-500 hover:text-gray-800"}`}
                      >
                        <Github className="w-3.5 h-3.5" />
                        GitHub
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
