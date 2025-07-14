import React from 'react';
import { Star, GitFork, Eye, ExternalLink } from 'lucide-react';

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
    if (count === 0) return 'bg-gray-700';
    if (count <= 2) return 'bg-green-900';
    if (count <= 4) return 'bg-green-700';
    if (count <= 6) return 'bg-green-500';
    return 'bg-green-300';
  };

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">GitHub 统计</h2>
      
      {/* Contribution Heatmap */}
      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 mb-8">
        <h3 className="text-xl font-bold text-white mb-4">贡献热力图</h3>
        <div className="overflow-x-auto">
          <div className="inline-flex flex-col space-y-1 min-w-max">
            {Array.from({ length: 7 }, (_, weekday) => (
              <div key={weekday} className="flex space-x-1">
                {contributionData
                  .filter((_, index) => index % 7 === weekday)
                  .map((day, index) => (
                    <div
                      key={index}
                      className={`w-3 h-3 rounded-sm ${getContributionColor(day.count)}`}
                      title={`${day.date}: ${day.count} contributions`}
                    />
                  ))}
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between mt-4 text-sm text-gray-400">
          <span>过去一年的贡献活动</span>
          <div className="flex items-center space-x-2">
            <span>Less</span>
            <div className="flex space-x-1">
              <div className="w-3 h-3 bg-gray-700 rounded-sm" />
              <div className="w-3 h-3 bg-green-900 rounded-sm" />
              <div className="w-3 h-3 bg-green-700 rounded-sm" />
              <div className="w-3 h-3 bg-green-500 rounded-sm" />
              <div className="w-3 h-3 bg-green-300 rounded-sm" />
            </div>
            <span>More</span>
          </div>
        </div>
      </div>

      {/* Featured Repositories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {repositories.map((repo, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-colors group"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-lg font-bold text-blue-400 group-hover:text-blue-300 transition-colors">
                {repo.name}
              </h3>
              <a
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <ExternalLink size={16} />
              </a>
            </div>
            
            <p className="text-gray-300 text-sm mb-4 line-clamp-2">
              {repo.description}
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-blue-500 rounded-full" />
                <span className="text-gray-400 text-sm">{repo.language}</span>
              </div>
              
              <div className="flex items-center space-x-4 text-gray-400 text-sm">
                <div className="flex items-center space-x-1">
                  <Star size={14} />
                  <span>{repo.stars}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <GitFork size={14} />
                  <span>{repo.forks}</span>
                </div>
                <div className="flex items-center space-x-1">
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