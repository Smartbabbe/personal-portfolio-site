import { FileText, ExternalLink } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import type { FeaturedProject } from "../data/vaPortfolioData";

interface VAFeaturedProjectCardProps {
  project: FeaturedProject;
  onViewProject: () => void;
}

export default function VAFeaturedProjectCard({ project, onViewProject }: VAFeaturedProjectCardProps) {
  const { theme } = useTheme();
  const dark = theme === "dark";

  return (
    <div
      className={`p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all group
        ${dark ? "bg-gray-800/50" : "bg-white"}`}
    >
      <div className="flex flex-col md:flex-row gap-6">
        {/* Thumbnail */}
        <div
          onClick={onViewProject}
          className={`md:w-1/3 aspect-video rounded-lg flex flex-col items-center justify-center gap-2 cursor-pointer
            ${dark ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-200 hover:bg-gray-300"} transition-colors`}
        >
          <FileText className={`w-16 h-16 ${dark ? "text-gray-600" : "text-gray-400"}`} />
          <span className={`text-xs px-4 text-center ${dark ? "text-gray-500" : "text-gray-400"}`}>
            {project.visuals[0]?.caption}
          </span>
        </div>

        <div className="md:w-2/3 space-y-4">
          <h4
            className={`text-2xl font-bold group-hover:text-purple-500 transition-colors
              ${dark ? "text-white" : "text-gray-900"}`}
          >
            {project.title}
          </h4>

          <p className={`${dark ? "text-gray-300" : "text-gray-700"}`}>
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool: string) => (
              <span
                key={tool}
                className={`px-3 py-1 rounded-full text-sm
                  ${dark ? "bg-purple-900/50 text-purple-300" : "bg-purple-100 text-purple-700"}`}
              >
                {tool}
              </span>
            ))}
          </div>

          <button
            onClick={onViewProject}
            className="flex items-center gap-2 text-purple-500 font-semibold group-hover:gap-3 transition-all"
          >
            View Full Project
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}