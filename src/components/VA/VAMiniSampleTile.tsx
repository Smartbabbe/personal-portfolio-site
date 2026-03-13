// import { FileText } from "lucide-react";
import { FileText } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";
import type { SampleProject } from "../../data/vaPortfolioData";

interface VAMiniSampleTileProps {
  project: SampleProject;
  onClick: () => void;
}

export default function VAMiniSampleTile({
  project,
  onClick,
}: VAMiniSampleTileProps) {
  const { theme } = useTheme();

  return (
    <div
      onClick={onClick}
      className={`group cursor-pointer rounded-xl overflow-hidden border transition-all duration-300 hover:scale-[1.02] hover:shadow-lg
        ${
          theme === "dark"
            ? "bg-gray-800/50 border-gray-700 hover:border-purple-500 hover:shadow-purple-900/30"
            : "bg-white border-gray-200 hover:border-purple-400 hover:shadow-purple-100"
        }`}
    >
      {/* Thumbnail */}
      <div
        className={`aspect-video flex items-center justify-center overflow-hidden
    ${theme === "dark" ? "bg-gray-700/60" : "bg-gray-100"}`}
      >
        {project.thumbnail ? (
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover object-top"
          />
        ) : (
          <FileText
            className={`w-10 h-10 transition-colors duration-300
        ${
          theme === "dark"
            ? "text-gray-500 group-hover:text-purple-400"
            : "text-gray-400 group-hover:text-purple-500"
        }`}
          />
        )}
      </div>

      {/* Info */}
      <div className="p-4">
        <h5
          className={`font-semibold text-md mb-5 transition-colors duration-300
            ${
              theme === "dark"
                ? "text-white group-hover:text-purple-300"
                : "text-gray-900 group-hover:text-purple-600"
            }`}
        >
          {project.title}
        </h5>
        <p
          className={`text-xs leading-relaxed transition-colors duration-300 mb-3
            ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}
        >
          {project.description}
        </p>
        <small
          className={`text-sm leading-relaxed italic transition-colors duration-300 hover:text-purple-400
            ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}
        >
          Click to view details
        </small>
      </div>
    </div>
  );
}
