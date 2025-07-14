import React from 'react';
import { Star, GitFork, Eye, ExternalLink, TrendingUp } from 'lucide-react';

const GitHubStats: React.FC = () => {
  // 模拟的GitHub数据
  const repositories = [
    {
      name: "awesome-react-components",
      description: "一个精心整理的React组件库，包含常用的UI组件和业务组件",
      language: "TypeScript",
      stars: 234,
      forks: 45,
      watchers: 12,
      url: "https://github.com/username/awesome-react-components"
    },
    {
      name: "personal-blog-platform",
      description: "基于Next.js构建的个人博客平台，支持Markdown编辑和主题自定义",
      language: "JavaScript",
      stars: 156,
      forks: 28,
      watchers: 8,
      url: "https://github.com/username/personal-blog-platform"
    },
    {
      name: "api-gateway-service",
      description: "微服务架构下的API网关服务，支持负载均衡和请求路由",
      language: "Node.js",
      stars: 89,
      forks: 15,
      watchers: 5,
      url: "https://github.com/username/api-gateway-service"
    }
  ];

  // 生成贡献热力图数据（模拟）
  const generateContributionData = () => {
    const data = [];
    const today = new Date();
    const oneYear = 365;
    
    for (let i = oneYear; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      const contributions = Math.floor(Math.random() * 8); // 0-7 contributions per day
      data.push({
        date: date.toISOString().split('T')[0],
        count: contributions
      });
    }
    return data;
  };

  const contributionData = generateContributionData();

  const getContributionColor = (count: number) => {
    if (count === 0) return 'bg-white/10';
    if (count <= 2) return 'bg-green-900/60';
    if (count <= 4) return 'bg-green-700/80';
    if (count <= 6) return 'bg-green-500';
    return 'bg-green-300';
  };

  const languageColors: { [key: string]: string } = {
    TypeScript: 'bg-blue-500',
    JavaScript: 'bg-yellow-500',
    'Node.js': 'bg-green-500'
  };

  return (
    <section className="mb-20">
      <h2 className="text-4xl font-bold text-white mb-12 text-center text-shadow">GitHub 统计</h2>
      
      {/* Contribution Heatmap */}
      <div className="glass-effect rounded-3xl p-8 mb-8 hover-lift smooth-transition">
        <div className="flex items-center space-x-3 mb-6">
          <TrendingUp className="text-green-400" size={24} />
          <h3 className="text-2xl font-bold text-white">贡献热力图</h3>
        </div>
        <div className="overflow-x-auto">
          <div className="inline-flex flex-col space-y-1 min-w-max p-4 glass-dark rounded-2xl">
            {Array.from({ length: 7 }, (_, weekday) => (
              <div key={weekday} className="flex space-x-1">
                {contributionData
                  .filter((_, index) => index % 7 === weekday)
                  .map((day, index) => (
                    <div
                      key={index}
                      className={`w-3 h-3 rounded-sm ${getContributionColor(day.count)} hover:scale-125 smooth-transition`}
                      title={`${day.date}: ${day.count} contributions`}
                    />
                  ))}
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between mt-6 text-sm text-white/70">
          <span>过去一年的贡献活动</span>
          <div className="flex items-center space-x-3">
            <span>Less</span>
            <div className="flex space-x-1">
              <div className="w-3 h-3 bg-white/10 rounded-sm" />
              <div className="w-3 h-3 bg-green-900/60 rounded-sm" />
              <div className="w-3 h-3 bg-green-700/80 rounded-sm" />
              <div className="w-3 h-3 bg-green-500 rounded-sm" />
              <div className="w-3 h-3 bg-green-300 rounded-sm" />
            </div>
            <span>More</span>
          </div>
        </div>
      </div>

      {/* Featured Repositories */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {repositories.map((repo, index) => (
          <div
            key={index}
            className="glass-effect rounded-3xl p-6 hover-lift smooth-transition group"
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl font-bold text-blue-400 group-hover:text-blue-300 smooth-transition">
                {repo.name}
              </h3>
              <a
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white smooth-transition p-2 rounded-lg hover:glass-light"
              >
                <ExternalLink size={18} />
              </a>
            </div>
            
            <div className="glass-dark rounded-2xl p-4 mb-6">
              <p className="text-white/80 text-sm leading-relaxed">
                {repo.description}
              </p>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className={`w-3 h-3 ${languageColors[repo.language]} rounded-full`} />
                <span className="text-white/70 text-sm font-medium">{repo.language}</span>
              </div>
              
              <div className="flex items-center space-x-4 text-white/60 text-sm">
                <div className="flex items-center space-x-1 hover:text-white smooth-transition">
                  <Star size={14} />
                  <span>{repo.stars}</span>
                </div>
                <div className="flex items-center space-x-1 hover:text-white smooth-transition">
                  <GitFork size={14} />
                  <span>{repo.forks}</span>
                </div>
                <div className="flex items-center space-x-1 hover:text-white smooth-transition">
                  <Eye size={14} />
                  <span>{repo.watchers}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GitHubStats;