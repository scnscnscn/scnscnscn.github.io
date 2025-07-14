import React from 'react';
import { Github, Mail, Linkedin, User, BookOpen, Home } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, onPageChange }) => {
  const navItems = [
    { id: 'home', label: '首页', icon: Home },
    { id: 'about', label: '关于我', icon: User },
    { id: 'blog', label: '博客', icon: BookOpen },
  ];

  return (
    <nav className="bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Your Name
            </div>
            <div className="hidden md:flex space-x-6">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => onPageChange(item.id)}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                      currentPage === item.id
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-300 hover:text-white hover:bg-gray-800'
                    }`}
                  >
                    <Icon size={18} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-800"
            >
              <Github size={20} />
            </a>
            <a
              href="mailto:your@email.com"
              className="text-gray-300 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-800"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-800"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;