import { useTheme } from "../contexts/ThemeContext";
import { ArrowRight } from "lucide-react";
import ContactSection from "../components/ContactSection";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen pt-20 ${theme === "dark" ? "bg-gradient-to-b from-teal-800 via-gray-800 to-black" : "bg-gradient-to-b from-teal-500 via-white to-gray-700"}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[70vh]">
          <div className="flex justify-center items-center">
            <div
              className={`w-80 h-80 rounded-full ${theme === "dark" ? "bg-gradient-to-br from-teal-800 to-gray-800" : "bg-gradient-to-br from-teal-200 to-gray-200"} flex items-center justify-center shadow-2xl`}
            >
              <div
                className={`text-6xl font-bold ${theme === "dark" ? "text-white" : "text-gray-800"}`}
              >
                EO
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h1
                className={`text-center md:text-justify text-5xl md:text-6xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}
              >
                Esther Okon
              </h1>
              <h2
                className={`text-center md:text-justify text-2xl md:text-3xl font-semibold ${theme === "dark" ? "text-teal-400" : "text-teal-600"}`}
              >
                Multi-disciplinary Operator in Tech, Web3 & Operations
              </h2>
              <p
                className={`text-center md:text-justify text-lg ${theme === "dark" ? "text-gray-300" : "text-gray-700"} leading-relaxed`}
              >
                I work across operations support, decentralized finance,
                frontend development, and community leadership — building
                systems, educating users, and supporting growth in fast-moving
                environments.
              </p>
            </div>

            <div className="flex flex-wrap md:flex-nowrap gap-3 pt-10">
              <button
                onClick={() => onNavigate("va")}
                className="group md:text-[0.8rem] relative w-full md:w-auto px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden"
                style={{
                  boxShadow: "0 0 20px rgba(147, 51, 234, 0.3)",
                  animation: "pulse-purple 3s ease-in-out infinite",
                }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Virtual Assistant
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>

              <button
                onClick={() => onNavigate("web3")}
                className="group relative w-full md:w-auto px-8 py-4 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden"
                style={{
                  backgroundColor: "#031323",
                  boxShadow: "0 0 20px rgba(3, 19, 35, 0.4)",
                  animation: "pulse-web3 3s ease-in-out infinite 1s",
                }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Web3 & DeFi
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#031323] to-[#042a4a] opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>

              <button
                onClick={() => onNavigate("development")}
                className="group relative w-full md:w-auto px-8 py-4 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden"
                style={{
                  backgroundColor: "#1D4D3A",
                  boxShadow: "0 0 20px rgba(29, 77, 58, 0.4)",
                  animation: "pulse-dev 3s ease-in-out infinite 2s",
                }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Development
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#1D4D3A] to-[#2a6b51] opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <ContactSection />

      <style>{`
        @keyframes pulse-purple {
          0%, 100% {
            box-shadow: 0 0 20px rgba(147, 51, 234, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(147, 51, 234, 0.6);
          }
        }

        @keyframes pulse-web3 {
          0%, 100% {
            box-shadow: 0 0 20px rgba(3, 19, 35, 0.4);
          }
          50% {
            box-shadow: 0 0 40px rgba(3, 19, 35, 0.7);
          }
        }

        @keyframes pulse-dev {
          0%, 100% {
            box-shadow: 0 0 20px rgba(29, 77, 58, 0.4);
          }
          50% {
            box-shadow: 0 0 40px rgba(29, 77, 58, 0.7);
          }
        }
      `}</style>
    </div>
  );
}
