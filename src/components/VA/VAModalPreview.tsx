import {
  X,
  FileText,
  Wrench,
  Lightbulb,
  Star,
  ExternalLink,
} from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";
import { useEffect } from "react";
import type {
  FeaturedProject,
  SampleProject,
} from "../../data/vaPortfolioData";

type ModalProject = FeaturedProject | SampleProject;

interface VAModalPreviewProps {
  project: ModalProject | null;
  onClose: () => void;
}

function isFeatured(p: ModalProject): p is FeaturedProject {
  return "problem" in p;
}

export default function VAModalPreview({
  project,
  onClose,
}: VAModalPreviewProps) {
  const { theme } = useTheme();

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  if (!project) return null;

  const dark = theme === "dark";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className={`relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl transition-colors duration-300
          ${dark ? "bg-gray-900 border border-gray-700" : "bg-white border border-gray-200"}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className={`sticky top-4 float-right mr-4 z-20 p-2 rounded-full transition-colors
            ${
              dark
                ? "text-gray-400 hover:text-white hover:bg-gray-800"
                : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
            }`}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image / Thumbnail section */}
        <div
          className={`w-full aspect-video flex flex-col items-center justify-center gap-3 rounded-t-2xl overflow-hidden
    ${dark ? "bg-gray-800" : "bg-gray-100"}`}
        >
          {!isFeatured(project) && project.thumbnail ? (
            <div
              className={`w-full overflow-auto rounded-t-2xl ${dark ? "bg-gray-800" : "bg-gray-100"}`}
              style={{ maxHeight: "500px" }}
            >
              <img
                src={project.thumbnail}
                alt={project.title}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          ) : (
            <div
              className={`w-full aspect-video flex flex-col items-center justify-center gap-3 rounded-t-2xl
      ${dark ? "bg-gray-800" : "bg-gray-100"}`}
            >
              <FileText
                className={`w-14 h-14 ${dark ? "text-gray-600" : "text-gray-400"}`}
              />
              <p
                className={`text-xs text-center px-8 ${dark ? "text-gray-400" : "text-gray-500"}`}
              >
                {isFeatured(project)
                  ? project.visuals[0]?.caption
                  : project.imagePlaceholder}
              </p>
              <p
                className={`text-xs italic ${dark ? "text-gray-600" : "text-gray-400"}`}
              >
                Mock / anonymized sample
              </p>
            </div>
          )}
        </div>

        {/* ── Content ── */}
        <div className="p-6 space-y-6">
          {/* Title & description */}
          <div>
            <h3
              className={`text-xl font-bold mb-2 ${dark ? "text-white" : "text-gray-900"}`}
            >
              {project.title}
            </h3>
            <p
              className={`text-sm leading-relaxed ${dark ? "text-gray-300" : "text-gray-600"}`}
            >
              {project.description}
            </p>
          </div>

          {/* Featured-only sections: Problem, What I Did, Outcome */}
          {isFeatured(project) && (
            <>
              <div>
                <h4
                  className={`flex items-center gap-2 text-sm font-semibold uppercase tracking-wide mb-2
                  ${dark ? "text-purple-400" : "text-purple-600"}`}
                >
                  <Lightbulb className="w-4 h-4" /> The Problem
                </h4>
                <p
                  className={`text-sm leading-relaxed ${dark ? "text-gray-300" : "text-gray-700"}`}
                >
                  {project.problem}
                </p>
              </div>

              <div>
                <h4
                  className={`flex items-center gap-2 text-sm font-semibold uppercase tracking-wide mb-2
                  ${dark ? "text-purple-400" : "text-purple-600"}`}
                >
                  <Star className="w-4 h-4" /> What I Did
                </h4>
                <ul className="space-y-2">
                  {project.whatIDid.map((item: string) => (
                    <li
                      key={item}
                      className={`flex items-start gap-2 text-sm
                      ${dark ? "text-gray-300" : "text-gray-700"}`}
                    >
                      <span className="text-purple-500 mt-0.5 shrink-0">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4
                  className={`flex items-center gap-2 text-sm font-semibold uppercase tracking-wide mb-2
                  ${dark ? "text-purple-400" : "text-purple-600"}`}
                >
                  <Star className="w-4 h-4" /> Outcome
                </h4>
                <p
                  className={`text-sm leading-relaxed ${dark ? "text-gray-300" : "text-gray-700"}`}
                >
                  {project.outcome}
                </p>
              </div>
            </>
          )}

          {/* Tools Used */}
          <div>
            <h4
              className={`flex items-center gap-2 text-sm font-semibold uppercase tracking-wide mb-3
              ${dark ? "text-purple-400" : "text-purple-600"}`}
            >
              <Wrench className="w-4 h-4" /> Tools Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool: string) => (
                <span
                  key={tool}
                  className={`px-3 py-1 rounded-full text-xs font-medium
                    ${dark ? "bg-purple-900/50 text-purple-300" : "bg-purple-100 text-purple-700"}`}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Skills Demonstrated */}
          <div>
            <h4
              className={`text-sm font-semibold uppercase tracking-wide mb-3
              ${dark ? "text-purple-400" : "text-purple-600"}`}
            >
              Skills Demonstrated
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.skills.map((skill: string) => (
                <span
                  key={skill}
                  className={`px-3 py-1 rounded-full text-xs font-medium border
                    ${
                      dark
                        ? "bg-gray-700 text-gray-300 border-gray-600"
                        : "bg-gray-100 text-gray-700 border-gray-300"
                    }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {!isFeatured(project) && project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center gap-2 w-full py-3 rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-105 ${
                dark
                  ? "bg-purple-700 hover:bg-purple-600 text-white"
                  : "bg-purple-600 hover:bg-purple-700 text-white"
              }`}
            >
              <ExternalLink className="w-4 h-4" />
              View Full Document
            </a>
          )}

          {/* Confidentiality Note */}
          <div
            className={`p-4 rounded-lg border text-xs font-medium
              ${
                dark
                  ? "bg-amber-900/20 border-amber-700/50 text-amber-300"
                  : "bg-amber-50 border-amber-200 text-amber-800"
              }`}
          >
            <strong>Confidentiality Note:</strong> All data and visuals shown
            have been anonymized or recreated using mock information to respect
            client confidentiality.
          </div>
        </div>
      </div>
    </div>
  );
}
