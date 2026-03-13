import { useState } from "react";
import { useTheme } from "../../contexts/ThemeContext";
import VAFeaturedProjectCard from "../VA/VAFeaturedProjectCard";
import VAMiniSampleTile from "../VA/VAMiniSampleTile";
import VAModalPreview from "../VA/VAModalPreview";
import type {
  PortfolioCategory,
  SampleProject,
} from "../../data/VA/vaPortfolioData";

interface VAPortfolioSectionProps {
  category: PortfolioCategory;
  onFeaturedPageClick: (projectId: string) => void;
}

export default function VAPortfolioSection({
  category,
  onFeaturedPageClick,
}: VAPortfolioSectionProps) {
  const { theme } = useTheme();
  const [modalProject, setModalProject] = useState<SampleProject | null>(null);
  const dark = theme === "dark";

  return (
    <div>
      {/* Category heading — purple bar style */}
      <h3 className={`text-2xl font-bold mb-8 flex items-center gap-3 transition-colors duration-300
          ${dark ? "text-white" : "text-gray-900"}`}>
        <div
          className={`w-1 h-8 rounded-full ${dark ? "bg-purple-500" : "bg-purple-600"}`}
        />
        {category.title}
      </h3>

      <div className="space-y-8">
        {/* Single featured project card */}
        <VAFeaturedProjectCard
          project={category.featured}
          onViewProject={() => onFeaturedPageClick(category.featured.id)}
        />

        {/* Sample mini tiles */}
        {category.samples.length > 0 && (
          <div>
            <h4
              className={`text-lg font-semibold mb-4 transition-colors duration-300
                ${dark ? "text-gray-300" : "text-gray-700"}`}
            >
              Sample Projects
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.samples.map((project) => (
                <VAMiniSampleTile
                  key={project.id}
                  project={project}
                  onClick={() => setModalProject(project)}
                />
              ))}
              
            </div>
          </div>
        )}
      </div>

      {/* Modal for sample tile previews */}
      <VAModalPreview
        project={modalProject}
        onClose={() => setModalProject(null)}
      />
    </div>
  );
}
