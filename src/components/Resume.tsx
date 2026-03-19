import DownloadCVButton from "./DownloadCVButton";
import { useTheme } from "../contexts/ThemeContext";

interface ResumeProps {
  cvType: "web3" | "va" | "dev" | "home";
  buttonText?: string;
  title?: string;
  description?: string;
  buttonClassName?: string;
  className?: string;
}

export const Resume = ({ 
  cvType, 
  buttonText = "Download CV",
  title = "Resume / CV",
  description = "Download my comprehensive CV to learn more about my experience and qualifications.",
  buttonClassName,
  className
}: ResumeProps) => {
  const { theme } = useTheme();
  
  // Default button styles if none provided
  const defaultButtonClassName = `px-8 py-4 ${theme === "dark" ? "bg-purple-800 hover:bg-gray-700" : "bg-purple-600 hover:bg-purple-900"} text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg flex items-center gap-2 mx-auto`;

  return (
    <section
      className={` ${className} py-16 mt-2 ${theme === "dark" ? "bg-gray-600/30" : "bg-gray-50"}`}
    >
      <div className="max-w-5xl mx-auto px-6 text-center space-y-6">
        <h2
          className={`text-4xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}
        >
          {title}
        </h2>
        <p
          className={`text-lg ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
        >
          {description}
        </p>
        <DownloadCVButton
          cvType={cvType}
          buttonText={buttonText}
          className={buttonClassName || defaultButtonClassName}
        />
      </div>
    </section>
  );
};


/* 
<Resume 
  cvType="web3"
  buttonText="Download Web3 CV"
  title="Web3 Developer Resume"
  description="Get my Web3 development CV highlighting blockchain and smart contract experience."
  buttonClassName={`px-8 py-4 ${theme === "dark" ? "bg-cyan-600 hover:bg-cyan-700" : "bg-cyan-500 hover:bg-cyan-600"} text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg flex items-center gap-2 mx-auto`}
/>



<Resume 
  cvType="dev"
  buttonText="Download Developer CV"
  title="Developer Resume"
  description="Download my comprehensive developer CV with full-stack development experience."
  buttonClassName={`px-8 py-4 ${theme === "dark" ? "bg-emerald-600 hover:bg-emerald-700" : "bg-emerald-500 hover:bg-emerald-600"} text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg flex items-center gap-2 mx-auto`}
/>

*/