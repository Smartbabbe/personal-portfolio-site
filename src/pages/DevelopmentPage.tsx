import { useTheme } from '../contexts/ThemeContext';
import { Download, Code, Layout, Smartphone, Zap, ExternalLink } from 'lucide-react';
import ContactSection from '../components/ContactSection';

export default function DevelopmentPage() {
  const { theme } = useTheme();

  const portfolioProjects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-featured e-commerce platform with shopping cart, payment integration, and admin dashboard.',
      tools: ['React', 'TypeScript', 'Tailwind CSS', 'Stripe'],
      category: 'Web Application'
    },
    {
      title: 'Task Management Dashboard',
      description: 'Intuitive task management system with real-time updates, team collaboration, and progress tracking.',
      tools: ['React', 'Supabase', 'PostgreSQL', 'Vite'],
      category: 'SaaS Application'
    },
    {
      title: 'Portfolio Website',
      description: 'Modern, responsive portfolio website with smooth animations and optimized performance.',
      tools: ['React', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
      category: 'Marketing Site'
    },
    {
      title: 'Real-Time Chat Application',
      description: 'WebSocket-based chat application with user authentication, message history, and file sharing.',
      tools: ['React', 'WebSockets', 'Node.js', 'MongoDB'],
      category: 'Real-Time App'
    }
  ];

  const technicalSkills = [
    {
      category: 'Frontend Development',
      skills: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS']
    },
    {
      category: 'Backend & Database',
      skills: ['Node.js', 'Supabase', 'PostgreSQL', 'REST APIs', 'Authentication']
    },
    {
      category: 'Tools & Workflow',
      skills: ['Git', 'GitHub', 'Vite', 'npm', 'VS Code', 'Chrome DevTools']
    },
    {
      category: 'Design & UX',
      skills: ['Responsive Design', 'Mobile-First', 'Accessibility', 'UI/UX Principles']
    }
  ];

  return (
    <div className={`min-h-screen pt-20 ${theme === 'dark' ? 'bg-gradient-to-b from-[#1D4D3A] via-gray-900 to-black' : 'bg-gradient-to-b from-green-50 via-white to-gray-50'}`}>
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-6">
          <h1 className={`text-5xl md:text-6xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'} animate-fade-in`}>
            Frontend Developer
          </h1>
          <p className={`text-xl md:text-2xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} max-w-4xl mx-auto animate-fade-in-delay`}>
            I build fast, responsive, and user-friendly web applications using modern technologies and best practices in frontend development.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-8">
            <button className="px-8 py-4 bg-[#1D4D3A] hover:bg-[#2a6b51] text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg">
              View Projects
            </button>
            <button className={`px-8 py-4 ${theme === 'dark' ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-white hover:bg-gray-100 text-[#1D4D3A]'} font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg flex items-center gap-2`}>
              <Download className="w-5 h-5" />
              Download CV
            </button>
          </div>
        </div>
      </section>

      <section className={`py-16 ${theme === 'dark' ? 'bg-white/5' : 'bg-white'}`}>
        <div className="max-w-5xl mx-auto px-6">
          <h2 className={`text-4xl font-bold mb-8 text-center ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            About My Development Work
          </h2>
          <div className={`p-8 rounded-xl ${theme === 'dark' ? 'bg-white/5' : 'bg-gray-50'} shadow-xl`}>
            <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} leading-relaxed mb-4`}>
              I specialize in creating intuitive, performant web applications with a focus on user experience and clean code. My approach combines technical expertise with an eye for design, ensuring that every project is both functional and beautiful.
            </p>
            <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
              From single-page applications to complex dashboards, I leverage modern frameworks and tools to deliver solutions that exceed expectations and drive results.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className={`text-4xl font-bold mb-12 text-center ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            What I Do
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-white/5' : 'bg-white'} shadow-xl hover:scale-105 transition-transform`}>
              <Code className={`w-12 h-12 mb-4 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`} />
              <h3 className={`text-xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Web Application Development
              </h3>
              <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                Building scalable, maintainable web applications with React, TypeScript, and modern frontend frameworks.
              </p>
            </div>

            <div className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-white/5' : 'bg-white'} shadow-xl hover:scale-105 transition-transform`}>
              <Layout className={`w-12 h-12 mb-4 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`} />
              <h3 className={`text-xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                UI/UX Implementation
              </h3>
              <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                Translating designs into pixel-perfect, responsive interfaces with attention to detail and user experience.
              </p>
            </div>

            <div className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-white/5' : 'bg-white'} shadow-xl hover:scale-105 transition-transform`}>
              <Smartphone className={`w-12 h-12 mb-4 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`} />
              <h3 className={`text-xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Responsive Design
              </h3>
              <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                Creating mobile-first, responsive designs that work seamlessly across all devices and screen sizes.
              </p>
            </div>

            <div className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-white/5' : 'bg-white'} shadow-xl hover:scale-105 transition-transform`}>
              <Zap className={`w-12 h-12 mb-4 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`} />
              <h3 className={`text-xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Performance Optimization
              </h3>
              <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                Optimizing applications for speed, efficiency, and excellent user experience through best practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`py-16 ${theme === 'dark' ? 'bg-white/5' : 'bg-white'}`}>
        <div className="max-w-5xl mx-auto px-6">
          <h2 className={`text-4xl font-bold mb-12 text-center ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {technicalSkills.map((skillGroup, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-white/5' : 'bg-gray-50'} shadow-xl`}
              >
                <h3 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.skills.map((skill, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 rounded-full text-sm ${theme === 'dark' ? 'bg-green-900/50 text-green-300' : 'bg-green-100 text-green-700'}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
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
                <div className={`aspect-video rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'} flex items-center justify-center mb-6`}>
                  <Code className={`w-16 h-16 ${theme === 'dark' ? 'text-gray-600' : 'text-gray-400'}`} />
                </div>
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h4 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'} group-hover:text-green-500 transition-colors`}>
                      {project.title}
                    </h4>
                    <ExternalLink className={`w-5 h-5 ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'} group-hover:text-green-500 transition-colors`} />
                  </div>
                  <span className={`inline-block px-3 py-1 rounded-full text-sm ${theme === 'dark' ? 'bg-green-900/50 text-green-300' : 'bg-green-100 text-green-700'}`}>
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
