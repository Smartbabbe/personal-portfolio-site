import { FileText, Database, BarChart2, Calendar } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import ContactSection from "./ContactSection";
import type { FeaturedProject, ProjectVisual } from "../data/vaPortfolioData";

interface ProjectDetailViewProps {
  project: FeaturedProject;
  onBack: () => void;
}

const iconMap: Record<ProjectVisual["icon"], React.ElementType> = {
  file: FileText,
  database: Database,
  chart: BarChart2,
  calendar: Calendar,
};

export default function ProjectDetailView({ project, onBack }: ProjectDetailViewProps) {
  const { theme } = useTheme();
  const dark = theme === "dark";

  return (
    <div
      className={`min-h-screen pt-20 ${
        dark
          ? "bg-gradient-to-b from-purple-900 via-gray-900 to-black"
          : "bg-gradient-to-b from-purple-50 via-white to-gray-50"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Back button */}
        <button
          onClick={onBack}
          className={`mb-8 font-medium transition-colors ${
            dark ? "text-purple-400 hover:text-purple-300" : "text-purple-600 hover:text-purple-700"
          }`}
        >
          ← Back to Portfolio
        </button>

        <div className="space-y-12">

          {/* Title & description */}
          <div>
            <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${dark ? "text-white" : "text-gray-900"}`}>
              {project.title}
            </h1>
            <p className={`text-xl ${dark ? "text-gray-400" : "text-gray-600"}`}>
              {project.description}
            </p>
          </div>

          {/* Problem, What I Did, Outcome */}
          {[
            { heading: "The Problem", body: project.problem, list: null },
            { heading: "What I Did", body: null, list: project.whatIDid },
            { heading: "Outcome / Value Delivered", body: project.outcome, list: null },
          ].map(({ heading, body, list }) => (
            <div
              key={heading}
              className={`p-8 rounded-xl shadow-xl ${dark ? "bg-gray-800/50" : "bg-white"}`}
            >
              <h2 className={`text-2xl font-bold mb-4 ${dark ? "text-white" : "text-gray-900"}`}>
                {heading}
              </h2>
              {body && (
                <p className={`leading-relaxed ${dark ? "text-gray-300" : "text-gray-700"}`}>
                  {body}
                </p>
              )}
              {list && (
                <ul className={`space-y-3 ${dark ? "text-gray-300" : "text-gray-700"}`}>
                  {list.map((item: string) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-purple-500 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {/* Tools Used */}
          <div className={`p-8 rounded-xl shadow-xl ${dark ? "bg-gray-800/50" : "bg-white"}`}>
            <h2 className={`text-2xl font-bold mb-4 ${dark ? "text-white" : "text-gray-900"}`}>
              Tools Used
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.tools.map((tool: string) => (
                <span
                  key={tool}
                  className={`px-4 py-2 rounded-full font-medium ${
                    dark ? "bg-purple-900/50 text-purple-300" : "bg-purple-100 text-purple-700"
                  }`}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Skills Demonstrated */}
          <div className={`p-8 rounded-xl shadow-xl ${dark ? "bg-gray-800/50" : "bg-white"}`}>
            <h2 className={`text-2xl font-bold mb-4 ${dark ? "text-white" : "text-gray-900"}`}>
              Skills Demonstrated
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.skills.map((skill: string) => (
                <span
                  key={skill}
                  className={`px-4 py-2 rounded-full font-medium border ${
                    dark
                      ? "border-gray-600 text-gray-300 bg-gray-800"
                      : "border-gray-300 text-gray-600 bg-gray-50"
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Visual Samples */}
          <div className={`p-8 rounded-xl shadow-xl ${dark ? "bg-gray-800/50" : "bg-white"}`}>
            <h2 className={`text-2xl font-bold mb-6 ${dark ? "text-white" : "text-gray-900"}`}>
              Visual Samples
            </h2>
            <div className="space-y-6">
              {project.visuals.map((visual) => {
                const Icon = iconMap[visual.icon];
                return (
                  <div
                    key={visual.caption}
                    className={`p-6 rounded-lg border-2 border-dashed ${
                      dark ? "bg-gray-700/50 border-gray-600" : "bg-gray-100 border-gray-300"
                    }`}
                  >
                    <div className="aspect-video flex items-center justify-center">
                      <Icon className={`w-16 h-16 ${dark ? "text-gray-600" : "text-gray-400"}`} />
                    </div>
                    <p className={`text-center mt-4 text-sm ${dark ? "text-gray-400" : "text-gray-600"}`}>
                      {visual.caption}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Confidentiality */}
          <div
            className={`p-6 rounded-xl border-2 ${
              dark ? "bg-yellow-900/20 border-yellow-700/50" : "bg-yellow-50 border-yellow-200"
            }`}
          >
            <p className={`font-medium ${dark ? "text-yellow-300" : "text-yellow-800"}`}>
              Confidentiality Note: All data and visuals shown have been anonymized or recreated
              using mock information to respect client confidentiality.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <button className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg">
              {project.ctaLabel}
            </button>
          </div>

        </div>
      </div>
      <ContactSection />
    </div>
  );
}
