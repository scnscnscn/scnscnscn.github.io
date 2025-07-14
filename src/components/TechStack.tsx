import React from 'react';

const TechStack: React.FC = () => {
  const techCategories = [
    {
      title: "前端技术",
      color: "from-blue-500 to-cyan-400",
      technologies: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Vue.js", level: 75 }
      ]
    },
    {
      title: "后端技术",
      color: "from-green-500 to-emerald-400",
      technologies: [
        { name: "Node.js", level: 90 },
        { name: "Express", level: 85 },
        { name: "Python", level: 80 },
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 80 }
      ]
    },
    {
      title: "工具和平台",
      color: "from-purple-500 to-pink-400",
      technologies: [
        { name: "AWS", level: 80 },
        { name: "Docker", level: 85 },
        { name: "Git", level: 95 },
        { name: "Webpack", level: 75 },
        { name: "Kubernetes", level: 70 }
      ]
    }
  ];

  return (
    <section className="mb-20">
      <h2 className="text-4xl font-bold text-white mb-12 text-center text-shadow">技术栈</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {techCategories.map((category, index) => (
          <div
            key={index}
            className="glass-effect rounded-3xl p-8 hover-lift smooth-transition group"
          >
            <div className={`inline-flex items-center px-6 py-3 rounded-2xl bg-gradient-to-r ${category.color} text-white font-semibold mb-8 shadow-lg`}>
              {category.title}
            </div>
            
            <div className="space-y-6">
              {category.technologies.map((tech, techIndex) => (
                <div key={techIndex} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-medium text-lg">{tech.name}</span>
                    <span className="text-white/70 text-sm font-medium">{tech.level}%</span>
                  </div>
                  <div className="relative">
                    <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                      <div
                        className={`h-3 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out shadow-lg`}
                        style={{ width: `${tech.level}%` }}
                      />
                    </div>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent shimmer" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;