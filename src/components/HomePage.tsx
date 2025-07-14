import React from 'react';
import { ChevronDown, Code, Database, Globe, Sparkles } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* 背景装饰元素 */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl float-animation" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl float-animation" style={{ animationDelay: '4s' }} />
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center px-4 pt-16">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="mb-8">
            <div className="relative inline-block">
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2"
                alt="Profile"
                className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-white/20 shadow-2xl glass-effect p-1"
              />
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                <Sparkles size={16} className="text-white" />
              </div>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-8 text-shadow">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Hello, I'm
            </span>
            <br />
            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Developer
            </span>
          </h1>
          
          <div className="glass-effect rounded-3xl p-8 mb-8 max-w-3xl mx-auto">
            <p className="text-2xl md:text-3xl text-white/90 mb-4 font-light">
              全栈开发工程师 · 开源爱好者 · 技术分享者
            </p>
            
            <p className="text-lg text-white/70 leading-relaxed">
              专注于现代Web开发技术，热衷于创建优雅的用户体验和高性能的应用程序。
              在React、Node.js和云原生技术方面有丰富经验。
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { icon: Code, label: "Frontend", color: "from-blue-500 to-cyan-400" },
              { icon: Database, label: "Backend", color: "from-green-500 to-emerald-400" },
              { icon: Globe, label: "Full Stack", color: "from-purple-500 to-pink-400" }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="glass-effect rounded-2xl px-6 py-4 hover-lift smooth-transition group"
                >
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-xl bg-gradient-to-r ${item.color}`}>
                      <Icon className="text-white" size={20} />
                    </div>
                    <span className="text-white/90 font-medium group-hover:text-white smooth-transition">
                      {item.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          
          <button className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white font-semibold py-4 px-10 rounded-full smooth-transition transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25 relative overflow-hidden group">
            <span className="relative z-10">查看我的作品</span>
            <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 smooth-transition" />
          </button>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 glass-effect rounded-full p-3">
          <ChevronDown className="text-white/70 animate-bounce" size={24} />
        </div>
      </section>
      
      {/* Quick Stats */}
      <section className="py-24 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: "50+", label: "项目经验", color: "from-blue-500 to-cyan-400" },
              { number: "3+", label: "工作年限", color: "from-green-500 to-emerald-400" },
              { number: "1000+", label: "GitHub 贡献", color: "from-purple-500 to-pink-400" }
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center glass-effect rounded-3xl p-8 hover-lift smooth-transition group"
              >
                <div className={`text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-4 group-hover:scale-110 smooth-transition`}>
                  {stat.number}
                </div>
                <div className="text-white/80 text-lg font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;