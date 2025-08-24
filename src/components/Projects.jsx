import React, { useEffect } from 'react';
import '../style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import projectImg2 from '../assets/student-employee-management.png';
import projectImg1 from '../assets/todo-app.png';
import projectImg3 from '../assets/resume-builder.png';
import projectImg4 from '../assets/charvin-app.png';

const projectList = [
  {
  title: "Charvin - App",
  image: projectImg4,
  bullets: [
    "Developed a cross-platform food ordering app using React Native and Expo.",
    "Implemented modern UI with smooth navigation, category browsing, and dish details.",
    "Built cart functionality with add/remove items and dynamic order summary.",
  ],
  tech: [
    { name: "React Native", icon: "📱" },
    { name: "Expo", icon: "🚀" },
    { name: "JavaScript", icon: "📜" },
    { name: "React Navigation", icon: "🧭" },
    { name: "Context API", icon: "🗂️" },
    { name: "Responsive UI", icon: "🎨" }
  ],
  alt: "https://drive.google.com/drive/folders/1OP8EZFbmuf7dfk2niSwIW_MWKyC0YArD?usp=drive_link",
  demo: "https://expo.dev/accounts/udaykiranmuthineni/projects/charvin-app/builds/1c584fdf-5b46-4270-b32f-81742de7e1dc"
},
  {
    title: "Advanced ToDo List App",
    image: projectImg1,
    bullets: [
      "Made a single-page app to manage ToDos, notes, events, expenses, and birthdays.",
      "Everything is stored offline using localStorage - no sign in or cloud needed.",
      "You can set deadlines, priorities, or repeat tasks and view them on the calendar.",
      "Clicking any date opens a side panel with the tasks and events for that day."
    ],
    tech: [
      { name: "HTML", icon: "🌐" },
      { name: "CSS", icon: "🎨" },
      { name: "JavaScript", icon: "📜" },
      { name: "Responsive", icon: "📱" },
      { name: "LocalStorage", icon: "💾" }
    ],
    github: "https://github.com/udaykiranmuthineni/All-in-One-Productivity-App",
    demo: "https://all-in-one-productivity-app.netlify.app/"
  },
  {
    title: "Student and Employee System",
    image: projectImg2,
    bullets: [
      "Built an admin dashboard to manage student and employee records with full access.",
      "Each form handles personal, academic, and work details in a clean UI layout.",
      "IDs are auto-generated and the system blocks duplicate entries instantly.",
      "Works with login-based access and supports both online and offline storage."
    ],
    tech: [
      { name: "HTML", icon: "🌐" },
      { name: "CSS", icon: "🎨" },
      { name: "JavaScript", icon: "📜" },
      { name: "Node.js", icon: "🟩" },
      // { name: "Express", icon: "⚡" },
      { name: "MongoDB", icon: "🍃" }
    ],
    github: "https://github.com/udaykiranmuthineni/student-and-employee-management-system",
    demo: "https://student-and-employee-management.netlify.app/"
  },
  {
    title: "Resume Builder",
    image: projectImg3,
    bullets: [
      "Built a resume builder with live preview and multiple template download options.",
      "Users can fill personal, education, and work details into clean editable sections.",
      "Dynamic fields like {{name}} auto-update the resume in real-time as you type.",
      "Stores data in localStorage and exports resumes as A4-ready printable PDFs."
    ],
    tech: [
      { name: "HTML", icon: "🌐" },
      { name: "CSS", icon: "🎨" },
      { name: "JavaScript", icon: "📜" },
      { name: "Responsive", icon: "📱" },
      { name: "LocalStorage", icon: "💾" }
    ],
    github: "https://github.com/udaykiranmuthineni/Resume-Builder",
    demo: "https://resume-builder-project-demo.netlify.app/"
  },
];

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">My Projects</h2>

      <div className="project-grid">
        {projectList.map((proj, index) => (
          <div className="project-wrapper" key={index}>
            <div className="project-row" data-aos="fade-up">
              {/* Left: Image + Links */}
              <div className="project-image-card">
                <img src={proj.image} alt={proj.title} />
                <div className="project-links under-image">
  {/* Show GitHub only if it exists */}
  {proj.github && (
    <a href={proj.github} target="_blank" rel="noreferrer">🔗 GitHub</a>
  )}

  {/* Show Demo only if it exists */}
  {proj.demo && (
    <a href={proj.demo} target="_blank" rel="noreferrer">🌐 Live Demo</a>
  )}

  {/* Optional: Add a custom link if no GitHub */}
  {!proj.github && proj.alt && (
    <a href={proj.alt} target="_blank" rel="noreferrer">📁 Resource</a>
  )}
</div>

              </div>

              {/* Right: Content */}
              <div className="project-content">
                <h3 className="project-heading">{proj.title}</h3>
                <ul className="project-points">
                  {proj.bullets.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>

                {/* ✅ Tech badges here */}
                <div className="project-tech">
                  {proj.tech.map((stack, i) => (
                    <div className="tech-badge" key={i}>
                      <span className="tech-icon">{stack.icon}</span>
                      <span className="tech-name">{stack.name}</span>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
