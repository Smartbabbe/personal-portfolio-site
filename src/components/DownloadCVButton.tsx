import { Download } from "lucide-react";

interface DownloadCVButtonProps {
  cvType: "web3" | "va" | "dev" | "home";
  className?: string;
  buttonText?: string;
  iconClassName?: string;
  showIcon?: boolean;
}

export default function DownloadCVButton({ 
  cvType, 
  className = "", 
  buttonText = "Download CV",
  iconClassName = "w-5 h-5",
  showIcon = true
}: DownloadCVButtonProps) {
  
  // Map CV types to their file paths and names
  const cvConfig = {
    web3: {
      path: "/cv/esther-web3-cv.pdf",
      filename: "Esther-Okon-Web3-CV.pdf"
    },
    va: {
      path: "/cv/esther-va-cv.pdf",
      filename: "Esther-Okon-VA-CV.pdf"
    },
    dev: {
      path: "/cv/esther-dev-cv.pdf",
      filename: "Esther-Okon-Developer-CV.pdf"
    },
    home: {
      path: "/cv/esther-general-cv.pdf",
      filename: "Esther-Okon-CV.pdf"
    }
  };

  const handleDownload = () => {
    const config = cvConfig[cvType];
    const link = document.createElement('a');
    link.href = config.path;
    link.download = config.filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button 
      onClick={handleDownload}
      className={className}
    >
      {showIcon && <Download className={iconClassName} />}
      {buttonText}
    </button>
  );
}