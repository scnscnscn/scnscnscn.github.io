import React from 'react';
import { ChevronDown, Code, Database, Globe } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2"
              alt="Profile"
              className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-blue-400 shadow-2xl"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Hello, I'm Developer
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            全栈开发工程师 · 开源爱好者 · 技术分享者
          </p>
          
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            专注于现代Web开发技术，热衷于创建优雅的用户体验和高性能的应用程序。
            在React、Node.js和云原生技术方面有丰富经验。
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <div className="flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-700">
              <Code className="text-blue-400" size={20} />
              <span className="text-gray-300">Frontend</span>
            </div>
            <div className="flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-700">
              <Database className="text-green-400" size={20} />
              <span className="text-gray-300">Backend</span>
            </div>
            <div className="flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-700">
              <Globe className="text-purple-400" size={20} />
              <span className="text-gray-300">Full Stack</span>
            </div>
          </div>
          
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
            查看我的作品
          </button>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <ChevronDown className="text-gray-400 animate-bounce" size={24} />
        </div>
      </section>
      
      {/* Quick Stats */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <div className="text-4xl font-bold text-blue-400 mb-2">50+</div>
              <div className="text-gray-300">项目经验</div>
            </div>
            <div className="text-center bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <div className="text-4xl font-bold text-green-400 mb-2">3+</div>
              <div className="text-gray-300">工作年限</div>
            </div>
            <div className="text-center bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <div className="text-4xl font-bold text-purple-400 mb-2">1000+</div>
              <div className="text-gray-300">GitHub 贡献</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;