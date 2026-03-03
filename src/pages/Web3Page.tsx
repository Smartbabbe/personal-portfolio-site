import { useTheme } from '../contexts/ThemeContext';
import { Download, Coins, Users, BookOpen, Award, ExternalLink } from 'lucide-react';
import ContactSection from '../components/ContactSection';

export default function Web3Page() {
  const { theme } = useTheme();

  const portfolioProjects = [
    {
      title: 'DeFi Protocol Community Management',
      description: 'Led community engagement for a decentralized finance protocol, growing the community from 500 to 5,000+ active members.',
      tools: ['Discord', 'Twitter', 'Telegram', 'Notion'],
      category: 'Community Leadership'
    },
    {
      title: 'Web3 Educational Content Series',
      description: 'Created comprehensive educational content explaining DeFi concepts, smart contracts, and blockchain technology to newcomers.',
      tools: ['Medium', 'Twitter Threads', 'Video Scripts'],
      category: 'Education'
    },
    {
      title: 'Token Launch Support',
      description: 'Supported token launch operations including documentation, community coordination, and user onboarding.',
      tools: ['Smart Contracts', 'Documentation', 'Community Tools'],
      category: 'Operations'
    },
    {
      title: 'DAO Governance Participation',
      description: 'Active participation in DAO governance, proposal creation, and community voting coordination.',
      tools: ['Snapshot', 'Discord', 'Governance Forums'],
      category: 'Governance'
    }
  ];

  return (
    <div className={`min-h-screen pt-20 ${theme === 'dark' ? 'bg-[#031323]' : 'bg-gradient-to-b from-blue-50 via-white to-gray-50'}`}>
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-6">
          <h1 className={`text-5xl md:text-6xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'} animate-fade-in`}>
            Web3 & DeFi Specialist
          </h1>
          <p className={`text-xl md:text-2xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} max-w-4xl mx-auto animate-fade-in-delay`}>
            I bridge the gap between complex blockchain technology and user-friendly experiences, specializing in community leadership, DeFi education, and Web3 operations.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-8">
            <button className="px-8 py-4 bg-[#031323] hover:bg-[#042a4a] text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg">
              View Projects
            </button>
            <button className={`px-8 py-4 ${theme === 'dark' ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-white hover:bg-gray-100 text-[#031323]'} font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg flex items-center gap-2`}>
              <Download className="w-5 h-5" />
              Download CV
            </button>
          </div>
        </div>
      </section>

      <section className={`py-16 ${theme === 'dark' ? 'bg-white/5' : 'bg-white'}`}>
        <div className="max-w-5xl mx-auto px-6">
          <h2 className={`text-4xl font-bold mb-8 text-center ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            About My Web3 Journey
          </h2>
          <div className={`p-8 rounded-xl ${theme === 'dark' ? 'bg-white/5' : 'bg-gray-50'} shadow-xl`}>
            <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} leading-relaxed mb-4`}>
              My journey in Web3 and DeFi combines technical understanding with community-first thinking. I specialize in making complex blockchain concepts accessible, building engaged communities around decentralized protocols, and supporting the operational aspects of Web3 projects.
            </p>
            <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
              From managing vibrant Discord communities to creating educational content that demystifies DeFi, I'm passionate about helping people understand and participate in the decentralized future.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className={`text-4xl font-bold mb-12 text-center ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Core Expertise
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-white/5' : 'bg-white'} shadow-xl hover:scale-105 transition-transform`}>
              <Users className={`w-12 h-12 mb-4 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`} />
              <h3 className={`text-xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Community Leadership
              </h3>
              <ul className={`space-y-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                <li>• Discord & Telegram management</li>
                <li>• Community growth strategies</li>
                <li>• Event coordination</li>
                <li>• Conflict resolution</li>
              </ul>
            </div>

            <div className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-white/5' : 'bg-white'} shadow-xl hover:scale-105 transition-transform`}>
              <BookOpen className={`w-12 h-12 mb-4 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`} />
              <h3 className={`text-xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                DeFi Education
              </h3>
              <ul className={`space-y-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                <li>• Educational content creation</li>
                <li>• Technical documentation</li>
                <li>• User onboarding</li>
                <li>• Workshop facilitation</li>
              </ul>
            </div>

            <div className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-white/5' : 'bg-white'} shadow-xl hover:scale-105 transition-transform`}>
              <Coins className={`w-12 h-12 mb-4 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`} />
              <h3 className={`text-xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                DeFi Operations
              </h3>
              <ul className={`space-y-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                <li>• Protocol operations support</li>
                <li>• Token launch coordination</li>
                <li>• User support & troubleshooting</li>
                <li>• Analytics & reporting</li>
              </ul>
            </div>

            <div className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-white/5' : 'bg-white'} shadow-xl hover:scale-105 transition-transform`}>
              <Award className={`w-12 h-12 mb-4 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`} />
              <h3 className={`text-xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                DAO Governance
              </h3>
              <ul className={`space-y-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                <li>• Proposal creation & review</li>
                <li>• Voting coordination</li>
                <li>• Community governance support</li>
                <li>• Forum moderation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={`py-16 ${theme === 'dark' ? 'bg-white/5' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className={`text-4xl font-bold mb-12 text-center ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {portfolioProjects.map((project, idx) => (
              <div
                key={idx}
                className={`p-8 rounded-xl ${theme === 'dark' ? 'bg-white/5' : 'bg-gray-50'} shadow-xl hover:shadow-2xl transition-all group cursor-pointer`}
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h4 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'} group-hover:text-blue-500 transition-colors`}>
                      {project.title}
                    </h4>
                    <ExternalLink className={`w-5 h-5 ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'} group-hover:text-blue-500 transition-colors`} />
                  </div>
                  <span className={`inline-block px-3 py-1 rounded-full text-sm ${theme === 'dark' ? 'bg-blue-900/50 text-blue-300' : 'bg-blue-100 text-blue-700'}`}>
                    {project.category}
                  </span>
                  <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 rounded-full text-sm ${theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'}`}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className={`p-8 rounded-xl ${theme === 'dark' ? 'bg-yellow-900/20 border-yellow-700/50' : 'bg-yellow-50 border-yellow-200'} border-2 text-center`}>
            <p className={`text-lg ${theme === 'dark' ? 'text-yellow-300' : 'text-yellow-800'} font-medium`}>
              Note: Project details have been generalized to protect client confidentiality and protocol privacy.
            </p>
          </div>
        </div>
      </section>

      <ContactSection />

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-fade-in-delay {
          animation: fade-in 0.8s ease-out 0.2s both;
        }
      `}</style>
    </div>
  );
}
