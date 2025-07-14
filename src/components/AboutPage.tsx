import React from 'react';
import TechStack from './TechStack';
import Experience from './Experience';
import GitHubStats from './GitHubStats';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2"
                alt="Profile"
                className="w-32 h-32 rounded-full border-4 border-blue-400"
              />
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl font-bold text-white mb-4">关于我</h1>
                <p className="text-xl text-gray-300 mb-6">
                  我是一名充满热情的全栈开发工程师，专注于创建现代化的Web应用程序。
                </p>
                <p className="text-gray-400 leading-relaxed mb-6">
                  拥有多年的软件开发经验，熟练掌握前端和后端技术栈。热衷于学习新技术，
                  喜欢解决复杂的技术挑战，并将创意转化为高质量的代码。在开源社区积极贡献，
                  致力于技术分享和知识传播。
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">React专家</span>
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm">Node.js</span>
                  <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm">TypeScript</span>
                  <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm">AWS</span>
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
  );
};

export default AboutPage;