import React from 'react';
import TechStack from './TechStack';
import Experience from './Experience';
import GitHubStats from './GitHubStats';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Profile Section */}
          <section className="mb-20">
            <div className="glass-effect rounded-3xl p-8 md:p-12 hover-lift smooth-transition">
              <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-12">
                <div className="relative">
                  <img
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2"
                    alt="Profile"
                    className="w-48 h-48 rounded-3xl border-4 border-white/20 shadow-2xl"
                  />
                  <div className="absolute -bottom-4 -right-4 glass-light rounded-2xl p-3">
                    <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse" />
                  </div>
                </div>
                
                <div className="flex-1 text-center lg:text-left">
                  <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-shadow">
                    关于我
                  </h1>
                  <p className="text-2xl text-white/90 mb-8 font-light">
                    我是一名充满热情的全栈开发工程师，专注于创建现代化的Web应用程序。
                  </p>
                  <div className="glass-dark rounded-2xl p-6 mb-8">
                    <p className="text-white/80 leading-relaxed text-lg">
                      拥有多年的软件开发经验，熟练掌握前端和后端技术栈。热衷于学习新技术，
                      喜欢解决复杂的技术挑战，并将创意转化为高质量的代码。在开源社区积极贡献，
                      致力于技术分享和知识传播。
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {["React专家", "Node.js", "TypeScript", "AWS"].map((skill, index) => (
                      <span
                        key={index}
                        className="glass-light text-white px-4 py-2 rounded-full text-sm font-medium hover-lift smooth-transition"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <Experience />

          {/* Tech Stack Section */}
          <TechStack />

          {/* GitHub Stats Section */}
          <GitHubStats />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;