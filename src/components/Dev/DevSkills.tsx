import { useTheme } from '../../contexts/ThemeContext';

const skillGroups = [
  {
    label: 'Core Languages',
    color: '#6EE7B7',
    skills: [
      { name: 'HTML5', icon: 'html5' },
      { name: 'CSS3', icon: 'css3' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'Solidity', icon: 'solidity' },
    ],
  },
  {
    label: 'Frameworks & Libraries',
    color: '#3B82F6',
    skills: [
      { name: 'React.js', icon: 'react' },
      { name: 'Next.js', icon: 'nextjs' },
      { name: 'Tailwind CSS', icon: 'tailwindcss' },
    ],
  },
  {
    label: 'Tools & Workflow',
    color: '#8B5CF6',
    skills: [
      { name: 'Git', icon: 'git' },
      { name: 'GitHub', icon: 'github' },
      { name: 'Vite', icon: 'vitejs' },
      { name: 'VS Code', icon: 'vscode' },
      { name: 'Figma', icon: 'figma' },
      { name: 'Vercel', icon: 'vercel' },
    ],
  },
  {
    label: 'Other Skills',
    color: '#F59E0B',
    skills: [
      { name: 'REST APIs', icon: 'fastapi' },
      { name: 'Notion', icon: 'notion' },
      { name: 'Slack', icon: 'slack' },
      { name: 'Trello', icon: 'trello' },
    ],
  },
];

export default function DevSkills() {
  const { theme } = useTheme();
  const dark = theme === 'dark';

  return (
    <section className={`py-24 ${dark ? 'bg-white/[0.02]' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Section header */}
        <div className="dev-animate mb-14">
          <p
            className="tag-pill mb-3 text-xs font-semibold tracking-widest uppercase"
            style={{ color: dark ? '#6EE7B7' : '#059669' }}
          >
            Tech Stack
          </p>
          <h2 className={`dev-heading text-4xl md:text-5xl font-bold ${dark ? 'text-white' : 'text-gray-950'}`}>
            Tools I work with
          </h2>
        </div>

        {/* Skill groups */}
        <div className="space-y-12">
          {skillGroups.map((group) => (
            <div key={group.label} className="dev-animate">
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: group.color }}
                />
                <p
                  className="text-sm font-semibold tracking-wide"
                  style={{ color: group.color }}
                >
                  {group.label}
                </p>
                <div className={`flex-1 h-px ${dark ? 'bg-white/5' : 'bg-gray-100'}`} />
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
                {group.skills.map((skill, i) => (
                  <div
                    key={skill.name}
                    className={`skill-icon flex flex-col items-center gap-2.5 p-4 rounded-2xl cursor-default transition-all duration-200
                      ${dark ? 'bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-white/10' : 'bg-gray-50 hover:bg-white border border-gray-100 hover:border-gray-200 hover:shadow-md'}`}
                    style={{ transitionDelay: `${i * 0.04}s` }}
                  >
                    <i
                      className={`devicon-${skill.icon}-plain colored text-3xl`}
                      title={skill.name}
                    />
                    <span className={`text-[11px] font-medium text-center leading-tight ${dark ? 'text-gray-400' : 'text-gray-500'}`}>
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
