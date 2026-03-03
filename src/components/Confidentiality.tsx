import { useTheme } from "../contexts/ThemeContext";

export const Confidentiality = () => {
  const { theme } = useTheme();
  return (
    <section
      className={`py-10 mt-2 ${theme === "dark" ? " bg-transparent" : "bg-gray-100"}`}
    >
      <div className="max-w-5xl mx-auto px-6">
        <div
          className={`p-8 rounded-xl ${theme === "dark" ? "bg-yellow-900/20 border-yellow-700/50" : "bg-yellow-50 border-yellow-200"} border-2 text-center`}
        >
          <p
            className={`text-lg ${theme === "dark" ? "text-yellow-300" : "text-yellow-800"} font-medium`}
          >
            Confidentiality Notice: All client work displayed has been
            anonymized or recreated using mock data to respect confidentiality
            agreements.
          </p>
        </div>
      </div>
    </section>
  );
};
