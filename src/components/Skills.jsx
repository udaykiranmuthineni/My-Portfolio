import React from 'react';
import '../style.css';

const skills = [
  { name: 'HTML', icon: '🌐' },
  { name: 'CSS', icon: '🎨' },
  { name: 'JavaScript', icon: '📜' },
  { name: 'React.js', icon: '⚛️' },
  { name: 'Node.js', icon: '🌿' },
  { name: 'Git & GitHub', icon: '🔧' },
  { name: 'SQL', icon: '🗄️' },
  { name: 'Java', icon: '☕' }
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
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
