import React from 'react';
import '../style.css';

const skills = {
  frontend: [
    { name: 'HTML', icon: '🌐' },
    { name: 'CSS', icon: '🎨' },
    { name: 'Bootstrap', icon: '🅱️' },
    { name: 'JavaScript', icon: '📜' },
    { name: 'React.js', icon: '⚛️' }
  ],
  backend: [
    { name: 'Node.js', icon: '🌿' },
    // { name: 'Express.js', icon: '🚀' },
    { name: 'SQL', icon: '🗄️' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'Java (Core)', icon: '☕' },
    { name: 'Python', icon: '🐍' },
    { name: 'Spring Boot', icon: '🌱' },
    // { name: 'JSP & Servlets', icon: '📑' }
  ],
  mobile: [
    { name: 'React Native', icon: '📱' },
    { name: 'Expo', icon: '⚡' }
  ],
  tools: [
    { name: 'Git & GitHub', icon: '🔧' },
    { name: 'NPM', icon: '📦' }
  ]
};

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">My Skills</h2>

      {/* Frontend */}
      <h3 className="skills-subtitle">Frontend</h3>
      <div className="skills-grid">
        {skills.frontend.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">{skill.icon}</div>
            <div className="skill-name">{skill.name}</div>
          </div>
        ))}
      </div>

      {/* Backend */}
      <h3 className="skills-subtitle">Backend</h3>
      <div className="skills-grid">
        {skills.backend.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">{skill.icon}</div>
            <div className="skill-name">{skill.name}</div>
          </div>
        ))}
      </div>

      {/* Mobile */}
      <h3 className="skills-subtitle">Mobile Development</h3>
      <div className="skills-grid">
        {skills.mobile.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">{skill.icon}</div>
            <div className="skill-name">{skill.name}</div>
          </div>
        ))}
      </div>

      {/* Tools */}
      <h3 className="skills-subtitle">Tools & Others</h3>
      <div className="skills-grid">
        {skills.tools.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">{skill.icon}</div>
            <div className="skill-name">{skill.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
