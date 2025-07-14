import React, { useState } from 'react';
import { Calendar, User, Tag, Clock, Search, BookOpen } from 'lucide-react';

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: "React 18 新特性详解：并发渲染和自动批处理",
      excerpt: "深入探讨React 18带来的革命性变化，包括并发渲染、自动批处理和新的Hooks。了解这些新特性如何提升应用性能。",
      content: `React 18带来了许多令人兴奋的新特性，其中最重要的是并发渲染（Concurrent Rendering）。`,
      author: "开发者",
      date: "2024-01-15",
      readTime: "8 分钟",
      tags: ["React", "JavaScript", "前端"],
      category: "技术分享"
    },
    {
      id: 2,
      title: "TypeScript 最佳实践：构建类型安全的大型应用",
      excerpt: "分享在大型TypeScript项目中的实践经验，包括类型设计模式、代码组织和性能优化策略。",
      content: `在大型TypeScript项目中，保持代码的类型安全和可维护性是一个重要挑战。`,
      author: "开发者",
      date: "2024-01-10",
      readTime: "12 分钟",
      tags: ["TypeScript", "最佳实践", "架构"],
      category: "技术分享"
    },
    {
      id: 3,
      title: "现代前端开发工作流：从开发到部署的完整指南",
      excerpt: "探索现代前端开发的完整工作流程，包括开发环境搭建、代码规范、CI/CD和部署策略。",
      content: `现代前端开发需要一套完整的工作流程来确保代码质量和开发效率。`,
      author: "开发者",
      date: "2024-01-05",
      readTime: "15 分钟",
      tags: ["工作流", "DevOps", "工具"],
      category: "开发经验"
    }
  ];

  const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)));

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag === 'all' || post.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <BookOpen className="text-blue-400" size={32} />
              <h1 className="text-5xl md:text-6xl font-bold text-white text-shadow">技术博客</h1>
            </div>
            <p className="text-2xl text-white/80 font-light">分享技术见解、开发经验和最佳实践</p>
          </div>

          {/* Search and Filter */}
          <div className="mb-16 space-y-6">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60" size={20} />
              <input
                type="text"
                placeholder="搜索文章..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-6 py-4 glass-effect rounded-2xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500/50 smooth-transition"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              <button
                onClick={() => setSelectedTag('all')}
                className={`px-6 py-3 rounded-2xl text-sm font-medium smooth-transition ${
                  selectedTag === 'all'
                    ? 'glass-light text-white shadow-lg'
                    : 'glass-effect text-white/70 hover:text-white hover:glass-light'
                }`}
              >
                全部
              </button>
              {allTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-6 py-3 rounded-2xl text-sm font-medium smooth-transition ${
                    selectedTag === tag
                      ? 'glass-light text-white shadow-lg'
                      : 'glass-effect text-white/70 hover:text-white hover:glass-light'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredPosts.map(post => (
              <article
                key={post.id}
                className="glass-effect rounded-3xl p-8 hover-lift smooth-transition group"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="glass-light text-white px-4 py-2 rounded-2xl text-sm font-medium">
                    {post.category}
                  </span>
                  <div className="flex items-center space-x-4 text-white/60 text-sm">
                    <div className="flex items-center space-x-2">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 smooth-transition leading-tight">
                  {post.title}
                </h2>

                <div className="glass-dark rounded-2xl p-6 mb-6">
                  <p className="text-white/80 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <User className="text-white/60" size={16} />
                    <span className="text-white/70 text-sm font-medium">{post.author}</span>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Tag className="text-white/60" size={14} />
                    <div className="flex space-x-2">
                      {post.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="text-white/60 text-sm">
                          #{tag}
                        </span>
                      ))}
                      {post.tags.length > 2 && (
                        <span className="text-white/60 text-sm">+{post.tags.length - 2}</span>
                      )}
                    </div>
                  </div>
                </div>

                <button className="mt-6 text-blue-400 hover:text-blue-300 font-medium smooth-transition flex items-center space-x-2 group/btn">
                  <span>阅读全文</span>
                  <span className="transform group-hover/btn:translate-x-1 smooth-transition">→</span>
                </button>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <div className="glass-effect rounded-3xl p-12 max-w-md mx-auto">
                <p className="text-white/70 text-xl">没有找到匹配的文章</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;