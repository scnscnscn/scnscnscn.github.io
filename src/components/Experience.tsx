import React from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

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
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">工作经历</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-colors"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                <div className="flex items-center space-x-4 text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Briefcase size={16} />
                    <span>{exp.company}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin size={16} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-1 text-blue-400 mt-2 md:mt-0">
                <Calendar size={16} />
                <span className="font-medium">{exp.period}</span>
              </div>
            </div>
            
            <p className="text-gray-300 mb-4">{exp.description}</p>
            
            <div className="space-y-2">
              <h4 className="text-white font-medium">主要成就:</h4>
              <ul className="list-disc list-inside space-y-1">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx} className="text-gray-400">{achievement}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;