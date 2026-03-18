import { ExternalLink, Github, Users, ChevronDown, ChevronUp } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { useState } from 'react';
import loanwiseDashboard from '../../../public/Dev/porfolio-proofs/loanwise-dashboard.png';
import loanwisePortfolio from '../../../public/Dev/porfolio-proofs/loanwise-portfolio.png';

const featuredProject = {
  title: "LoanWise — Fintech Dashboard",
  description:
    "A collaborative fintech platform where clients apply for loans, risk analysts review credit scores, and managers track portfolios in real time.",
  role: "Frontend Developer — Collaborative Team Project",
  contributions: [
    "Built the dashboard overview page with KPI summary cards and real-time data rendering",
    "Developed the portfolio page with filterable loan records and dynamic status indicators",
    "Integrated RESTful APIs to render live loan and user data across components",
    "Implemented responsive UI components for improved usability across all devices",
    "Debugged frontend logic and optimized state handling using React hooks",
    "Collaborated with team members via Git and GitHub for version control",
  ],
  tools: ["React.js", "REST APIs", "Tailwind CSS", "Vercel"],
  liveUrl: "https://loanwise-b-team.vercel.app/dashboard/overview",
  portfolioUrl: "https://loanwise-b-team.vercel.app/dashboard/portfolio",
  githubUrl: "https://github.com/loanwise-b-team",
  category: "Fintech · Team Project",
};

export default function DevFeaturedProject() {
  const { theme } = useTheme();
  const dark = theme === 'dark';
  const [expanded, setExpanded] = useState(false);

  return (
    <section className={`py-24 ${dark ? 'bg-white/[0.02]' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto px-6">

        <div className="dev-animate mb-12">
          <p className={`text-xs font-semibold tracking-widest uppercase mb-3 ${dark ? 'text-blue-400' : 'text-blue-600'}`}>
            Highlight
          </p>
          <h2 className={`dev-heading text-4xl md:text-5xl font-bold ${dark ? 'text-white' : 'text-gray-950'}`}>
            Featured Project
          </h2>
        </div>

        <div className={`dev-animate p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all group ${dark ? 'bg-gray-800/50' : 'bg-white'}`}>
          <div className="flex flex-col md:flex-row gap-6">

            {/* Details */}
            <div className="md:w-2/3 space-y-4">
              <div className="flex items-center gap-3 flex-wrap">
                <h4 className={`text-2xl font-bold transition-colors dev-heading ${dark ? 'text-white group-hover:text-emerald-400' : 'text-gray-900 group-hover:text-emerald-600'}`}>
                  {featuredProject.title}
                </h4>
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium" style={{ background: 'rgba(59,130,246,0.1)', color: '#3B82F6' }}>
                  <Users className="w-3 h-3" />
                  {featuredProject.category}
                </span>
              </div>

              <p className={`${dark ? 'text-gray-300' : 'text-gray-700'}`}>
                {featuredProject.description}
              </p>

              {/* Expandable section */}
              {expanded && (
                <div className="space-y-4">
                  <div>
                    <p className={`text-xs font-bold uppercase tracking-widest mb-2 ${dark ? 'text-gray-500' : 'text-gray-400'}`}>
                      My Contributions
                    </p>
                    <ul className="space-y-1.5">
                      {featuredProject.contributions.map((c) => (
                        <li key={c} className={`flex items-start gap-2 text-sm ${dark ? 'text-gray-300' : 'text-gray-700'}`}>
                          <span className="mt-2 w-1 h-1 rounded-full shrink-0 bg-emerald-400" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Tools */}
              <div className="flex flex-wrap gap-2">
                {featuredProject.tools.map((tool) => (
                  <span key={tool} className={`px-3 py-1 rounded-full text-sm ${dark ? 'bg-emerald-900/30 text-emerald-300' : 'bg-emerald-50 text-emerald-700'}`}>
                    {tool}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="space-y-3 pt-1">
                <a href="https://loanwise-b-team.vercel.app/" target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2 font-semibold transition-all group-hover:gap-3 ${dark ? 'text-emerald-400 hover:text-emerald-300' : 'text-emerald-600 hover:text-emerald-700'}`}>
                  View Live Project
                  <ExternalLink className="w-4 h-4" />
                </a>
                <p className={`text-xs leading-relaxed ${dark ? 'text-gray-500' : 'text-gray-400'}`}>
                  I specifically built these two pages — click to view my direct contributions:
                </p>
                <div className="flex items-center gap-4 flex-wrap">
                  <a href="https://loanwise-b-team.vercel.app/dashboard/overview" target="_blank" rel="noopener noreferrer" className={`flex items-center gap-1.5 text-xs font-medium transition-colors ${dark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-800'}`}>
                    <ExternalLink className="w-3.5 h-3.5" />
                    Dashboard Overview
                  </a>
                  <a href="https://loanwise-b-team.vercel.app/dashboard/portfolio" target="_blank" rel="noopener noreferrer" className={`flex items-center gap-1.5 text-xs font-medium transition-colors ${dark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-800'}`}>
                    <ExternalLink className="w-3.5 h-3.5" />
                    Portfolio Page
                  </a>
                  <a href="https://github.com/loanwise-b-team" target="_blank" rel="noopener noreferrer" className={`flex items-center gap-1.5 text-xs font-medium transition-colors ${dark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-800'}`}>
                    <Github className="w-3.5 h-3.5" />
                    GitHub
                  </a>
                </div>
              </div>

              {/* See More / See Less */}
              <button
                onClick={() => setExpanded(!expanded)}
                className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${dark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-800'}`}
              >
                {expanded ? (
                  <>See Less <ChevronUp className="w-4 h-4" /></>
                ) : (
                  <>See More <ChevronDown className="w-4 h-4" /></>
                )}
              </button>
            </div>

    
{/* Images*/}
<div className="md:w-1/3 flex flex-col gap-2 self-stretch">
  <div className="flex-1 rounded-lg overflow-hidden">
    <img
      src={loanwiseDashboard}
      alt="LoanWise Dashboard Overview"
      className="w-full h-full object-cover object-top"
    />
  </div>
  <div className="flex-1 rounded-lg overflow-hidden">
    <img
      src={loanwisePortfolio}
      alt="LoanWise Portfolio Page"
      className="w-full h-full object-cover object-top"
    />
  </div>
</div>
          </div>
        </div>
      </div>
    </section>
  );
}