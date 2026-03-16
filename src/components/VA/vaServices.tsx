import {
  Briefcase,
  BarChart3,
  FileText,
  Search,
  CheckCircle2,
  Hammer,
} from "lucide-react";
import { Service } from "../../data/VA/portfolioData";
import { useTheme } from "../../contexts/ThemeContext";

interface vaServicesSectionProps {
  service: Service;
}

const iconMap = {
  briefcase: Briefcase,
  "bar-chart-3": BarChart3,
  "file-text": FileText,
  search: Search,
  toolbox: Hammer,
};

export default function VaServices({ service }: vaServicesSectionProps) {
  const { theme } = useTheme();
  const Icon = iconMap[service.icon as keyof typeof iconMap];

  return (
    <div
      className={` ${theme === "dark" ? "bg-gray-700/30" : "bg-white"} ${service.classes ? service.classes : ''} rounded-xl shadow-xl hover:shadow-xl transition-all duration-300 p-8 `}
    >
      <div className={`flex flex-col sm:flex-row items-start gap-4 mb-6`}>
        <div className={`p-3 rounded-lg `}>
          <Icon
            className={`w-8 h-8 ${theme === "dark" ? "text-gray-300" : "text-gray-800 bg-purple-200 p-1"}`}
          />
        </div>
        <div className={`flex-1`}>
          <h3
            className={`${theme === "dark" ? "text-white" : "text-gray-900"} text-2xl font-bold mb-2 transition-colors duration-300`}
          >
            {service.title}
          </h3>
          <p
            className={`${theme === "dark" ? "text-gray-400" : "text-gray-600"} transition-colors duration-300`}
          >
            {service.description}
          </p>
        </div>
      </div>

      <ul className="space-y-3">
        {service.items.map((item, index) => (
          <li key={index} className={`flex items-start gap-3`}>
            <CheckCircle2
              className={`${theme === "dark" ? "text-purple-400" : "text-purple-600"} w-5 h-5 flex-shrink-0 mt-0.5 transition-colors duration-300`}
            />
            <span
              className={`${theme === "dark" ? "text-gray-300" : "text-gray-700"}  transition-colors duration-300`}
            >
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
