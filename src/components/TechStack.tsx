import React from 'react';

const TechStack: React.FC = () => {
  const techCategories = [
    {
      title: "前端技术",
      color: "from-blue-500 to-cyan-500",
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
      color: "from-green-500 to-emerald-500",
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
      color: "from-purple-500 to-pink-500",
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
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">技术栈</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {techCategories.map((category, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-xl p-6 border border-gray-700"
          >
            <div className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${category.color} text-white font-medium mb-6`}>
              {category.title}
            </div>
            
            <div className="space-y-4">
              {category.technologies.map((tech, techIndex) => (
                <div key={techIndex} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-medium">{tech.name}</span>
                    <span className="text-gray-400 text-sm">{tech.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full bg-gradient-to-r ${category.color} transition-all duration-500`}
                      style={{ width: `${tech.level}%` }}
                    />
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