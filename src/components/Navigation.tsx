import { useState } from "react";
import { Moon, Sun, Menu, X} from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navigation({
  currentPage,
  onNavigate,
}: NavigationProps) {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Virtual Assistant", page: "va" },
    { label: "Web3 & DeFi", page: "web3" },
    { label: "Development", page: "development" },
    { label: "Contact", page: "contact" },
  ];

  const getNavLinkClass = (page: string) => {
    const isActive = currentPage === page;

    return `
      relative pb-1
      ${
        theme === "dark"
          ? "text-gray-300 hover:text-white after:bg-white"
          : "text-gray-700 hover:text-gray-900 after:bg-gray-900"
      }
      transition-colors
      after:absolute after:left-0 after:bottom-0
      after:h-[2px] after:w-full
      after:origin-center
      after:transition-transform after:duration-300
      ${isActive ? "after:scale-x-100 font-semibold" : "after:scale-x-0 hover:after:scale-x-100"}
    `;
  };

  const handleNavigate = (page: string) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 ${theme === "dark" ? "bg-gray-900/95" : "bg-white/95"} backdrop-blur-sm border-b ${theme === "dark" ? "border-gray-800" : "border-gray-800"}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Back Button */}

          <button
            className={`text-2xl font-bold ${
              theme === "dark" ? "text-white" : "text-gray-900"
            } hover:opacity-80 transition-opacity`}
          >
            EO
          </button>
  

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.page}
              onClick={() => handleNavigate(link.page)}
              className={getNavLinkClass(link.page)}
            >
              {link.label}
            </button>
          ))}

          {/* Theme Toggle (Animated) */}
          <button
            onClick={toggleTheme}
            className={`
              p-2 rounded-lg transition-all duration-300
              ${theme === "dark" ? "hover:bg-gray-800 rotate-180" : "hover:bg-gray-100 rotate-0"}
            `}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 text-yellow-400 transition-transform duration-500" />
            ) : (
              <Moon className="w-5 h-5 text-gray-700 transition-transform duration-500" />
            )}
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center gap-3">
          {/* Theme Toggle Mobile */}
          <button
            onClick={toggleTheme}
            className={`
              p-2 rounded-lg transition-all duration-300
              ${theme === "dark" ? "hover:bg-gray-800 rotate-180" : "bg-gray-300 hover:bg-gray-400 rotate-60"}
            `}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 text-yellow-400 transition-transform duration-500" />
            ) : (
              <Moon className="w-5 h-5 text-gray-700 transition-transform duration-500" />
            )}
          </button>

          {/* Hamburger Button */}
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className={`p-2 rounded-lg ${theme === "dark" ? "hover:bg-gray-800 rotate-60 " : "bg-gray-300 hover:bg-gray-500 text-black"} transition`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300
          ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
          ${theme === "dark" ? "bg-gray-900" : "bg-white"}
          border-t ${theme === "dark" ? "border-gray-600" : "border-gray-200"}
        `}
      >
        <div className="flex flex-col px-6 py-4 gap-4">
          {navLinks.map((link) => (
            <button
              key={link.page}
              onClick={() => handleNavigate(link.page)}
              className={`
                text-left py-2
                ${currentPage === link.page ? "font-semibold" : ""}
                ${theme === "dark" ? "text-gray-300 hover:text-white hover:bg-gray-800" : "text-gray-700 hover:bg-gray-200 hover:text-gray-900"}
                transition-colors
              `}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
