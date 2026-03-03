import { useTheme } from "../contexts/ThemeContext";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeader({ title, subtitle, centered = true }: SectionHeaderProps) {
    const { theme } = useTheme();
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className={`text-3xl sm:text-4xl font-bold ${theme === "dark" ? "text-white" : "text-gray-600"} mb-4 transition-colors duration-300`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg ${theme === "dark" ? "text-white" : "text-gray-600"} max-w-5xl mx-auto transition-colors duration-300`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}