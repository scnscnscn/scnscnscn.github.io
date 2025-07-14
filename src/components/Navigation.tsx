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
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Developer
            </div>
            <div className="hidden md:flex space-x-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => onPageChange(item.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-full smooth-transition ${
                      currentPage === item.id
                        ? 'glass-light text-white shadow-lg'
                        : 'text-gray-300 hover:text-white hover:glass-effect'
                    }`}
                  >
                    <Icon size={16} />
                    <span className="text-sm font-medium">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            {[
              { href: "https://github.com", icon: Github },
              { href: "mailto:your@email.com", icon: Mail },
              { href: "https://linkedin.com", icon: Linkedin }
            ].map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('http') ? "_blank" : undefined}
                  rel={social.href.startsWith('http') ? "noopener noreferrer" : undefined}
                  className="text-gray-300 hover:text-white smooth-transition p-2 rounded-full hover:glass-effect"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;