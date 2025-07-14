import React from 'react';
import { Calendar, MapPin, Briefcase, Award } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "高级全栈开发工程师",
      company: "科技公司 A",
      location: "北京",
      period: "2022 - 至今",
      description: "负责核心产品的前后端开发，团队技术架构设计，性能优化等工作。",
      achievements: [
        "主导重构了核心业务系统，性能提升40%",
        "建立了完整的CI/CD流程和代码规范",
        "指导初级开发者，提升团队整体技术水平"
      ]
    },
    {
      title: "前端开发工程师",
      company: "互联网公司 B",
      location: "上海",
      period: "2020 - 2022",
      description: "专注于React生态系统开发，参与多个大型项目的前端架构设计。",
      achievements: [
        "开发了公司内部的组件库，被多个项目采用",
        "优化了页面加载速度，首屏渲染时间减少50%",
        "参与了微前端架构的设计和实施"
      ]
    },
    {
      title: "初级开发工程师",
      company: "创业公司 C",
      location: "深圳",
      period: "2019 - 2020",
      description: "参与Web应用开发，学习现代前端技术栈，积累项目经验。",
      achievements: [
        "快速掌握React和TypeScript技术栈",
        "独立完成了多个功能模块的开发",
        "参与了敏捷开发流程的实践"
      ]
    }
  ];

  return (
    <section className="mb-20">
      <h2 className="text-4xl font-bold text-white mb-12 text-center text-shadow">工作经历</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="glass-effect rounded-3xl p-8 hover-lift smooth-transition group"
          >
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
              <div className="mb-4 lg:mb-0">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 smooth-transition">
                  {exp.title}
                </h3>
                <div className="flex flex-wrap items-center gap-4 text-white/70">
                  <div className="flex items-center space-x-2">
                    <Briefcase size={16} />
                    <span>{exp.company}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin size={16} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
              <div className="glass-light rounded-2xl px-4 py-2">
                <div className="flex items-center space-x-2 text-blue-400">
                  <Calendar size={16} />
                  <span className="font-medium">{exp.period}</span>
                </div>
              </div>
            </div>
            
            <div className="glass-dark rounded-2xl p-6 mb-6">
              <p className="text-white/90 text-lg">{exp.description}</p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-white/90">
                <Award size={18} />
                <h4 className="font-semibold">主要成就</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {exp.achievements.map((achievement, idx) => (
                  <div
                    key={idx}
                    className="glass-light rounded-xl p-4 hover-lift smooth-transition"
                  >
                    <p className="text-white/80 text-sm">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;