import React, { useState } from 'react';
import { Calendar, User, Tag, Clock, Search } from 'lucide-react';

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: "React 18 新特性详解：并发渲染和自动批处理",
      excerpt: "深入探讨React 18带来的革命性变化，包括并发渲染、自动批处理和新的Hooks。了解这些新特性如何提升应用性能。",
      content: `React 18带来了许多令人兴奋的新特性，其中最重要的是并发渲染（Concurrent Rendering）。

## 并发渲染的核心概念

并发渲染允许React在处理用户输入的同时，继续渲染其他部分的UI。这意味着React可以：

- 暂停渲染工作
- 优先处理更重要的更新
- 恢复被暂停的工作

## 自动批处理

React 18引入了自动批处理功能，它可以将多个状态更新合并为一次重新渲染，从而提高性能。

\`\`\`jsx
// React 18之前，只有React事件处理程序中的更新会被批处理
// React 18中，所有更新都会被自动批处理
function App() {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);

  function handleClick() {
    setCount(c => c + 1);
    setFlag(f => !f);
    // React 18会将这两次更新批处理为一次重新渲染
  }

  return (
    <div>
      <button onClick={handleClick}>Next</button>
      <h1 style={{ color: flag ? "blue" : "black" }}>{count}</h1>
    </div>
  );
}
\`\`\`

这些特性使得React应用更加高效和响应迅速。`,
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
      content: `在大型TypeScript项目中，保持代码的类型安全和可维护性是一个重要挑战。

## 类型设计原则

### 1. 优先使用interface而不是type
\`\`\`typescript
// 推荐
interface User {
  id: string;
  name: string;
  email: string;
}

// 不推荐（在大多数情况下）
type User = {
  id: string;
  name: string;
  email: string;
}
\`\`\`

### 2. 使用严格的类型检查
在tsconfig.json中启用严格模式：

\`\`\`json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true
  }
}
\`\`\`

## 实用的类型工具

TypeScript提供了许多实用的类型工具，可以帮助我们创建更灵活的类型：

\`\`\`typescript
// Pick工具类型
type UserSummary = Pick<User, 'id' | 'name'>;

// Omit工具类型
type CreateUserRequest = Omit<User, 'id'>;

// Partial工具类型
type UpdateUserRequest = Partial<User>;
\`\`\`

这些实践可以帮助团队构建更加健壮和可维护的TypeScript应用。`,
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
      content: `现代前端开发需要一套完整的工作流程来确保代码质量和开发效率。

## 开发环境搭建

### 包管理器选择
推荐使用pnpm作为包管理器：

\`\`\`bash
# 安装pnpm
npm install -g pnpm

# 安装依赖
pnpm install

# 添加依赖
pnpm add react
\`\`\`

### 代码规范工具

#### ESLint配置
\`\`\`json
{
  "extends": [
    "@typescript-eslint/recommended",
    "prettier"
  ],
  "rules": {
    "no-console": "warn",
    "@typescript-eslint/no-unused-vars": "error"
  }
}
\`\`\`

#### Prettier配置
\`\`\`json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2
}
\`\`\`

## Git工作流

使用Git hooks确保代码质量：

\`\`\`json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged",
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  },
  "lint-staged": {
    "*.{ts,tsx,js,jsx}": [
      "eslint --fix",
      "prettier --write"
    ]
  }
}
\`\`\`

这套工作流程可以大大提升团队的开发效率和代码质量。`,
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
    <div className="min-h-screen bg-gray-900 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">技术博客</h1>
          <p className="text-xl text-gray-300">分享技术见解、开发经验和最佳实践</p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="搜索文章..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedTag('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedTag === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              全部
            </button>
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedTag === tag
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
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
              className="bg-gray-800 rounded-xl border border-gray-700 hover:border-gray-600 transition-colors overflow-hidden group"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                  <div className="flex items-center space-x-4 text-gray-400 text-sm">
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h2>

                <p className="text-gray-300 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <User className="text-gray-400" size={16} />
                    <span className="text-gray-400 text-sm">{post.author}</span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Tag className="text-gray-400" size={14} />
                    <div className="flex space-x-1">
                      {post.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="text-gray-400 text-sm">
                          #{tag}
                        </span>
                      ))}
                      {post.tags.length > 2 && (
                        <span className="text-gray-400 text-sm">+{post.tags.length - 2}</span>
                      )}
                    </div>
                  </div>
                </div>

                <button className="mt-4 text-blue-400 hover:text-blue-300 font-medium text-sm transition-colors">
                  阅读全文 →
                </button>
              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">没有找到匹配的文章</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;