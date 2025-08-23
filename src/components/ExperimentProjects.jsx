// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// import projectImg1 from '../assets/todo-app.png';
// import projectImg2 from '../assets/student-employee-management.png';
// import projectImg3 from '../assets/resume-builder.png';
// import projectImg4 from '../assets/personal-portfolio.png';
// const updatedProjectList = [
//   {
//     title: "Advanced ToDo List App",
//     image: projectImg1,
//     description: "Single-page app to manage ToDos, notes, events, and birthdays.",
//     tech: [
//       { name: "HTML", icon: "🌐" },
//       { name: "CSS", icon: "🎨" },
//       { name: "JavaScript", icon: "📜" },
//       { name: "LocalStorage", icon: "💾" }
//     ],
//     github: "https://github.com/udaykiranmuthineni/All-in-One-Productivity-App",
//     demo: "https://all-in-one-productivity-app.netlify.app/"
//   },
//   {
//     title: "Student and Employee System",
//     image: projectImg2,
//     description: "Admin dashboard to manage student and employee records efficiently.",
//     tech: [
//       { name: "HTML", icon: "🌐" },
//       { name: "CSS", icon: "🎨" },
//       { name: "JavaScript", icon: "📜" },
//       { name: "Node.js", icon: "🟩" },
//       { name: "MongoDB", icon: "🍃" }
//     ],
//     github: "https://github.com/udaykiranmuthineni/student-and-employee-management-system",
//     demo: "https://student-and-employee-management.netlify.app/"
//   },
//   {
//     title: "Resume Builder",
//     image: projectImg3,
//     description: "Build and download resumes with live previews and templates.",
//     tech: [
//       { name: "HTML", icon: "🌐" },
//       { name: "CSS", icon: "🎨" },
//       { name: "JavaScript", icon: "📜" },
//       { name: "LocalStorage", icon: "💾" }
//     ],
//     github: "https://github.com/udaykiranmuthineni/Resume-Builder",
//     demo: "https://resume-builder-project-demo.netlify.app/"
//   },
//   {
//     title: "Personal Portfolio",
//     image: projectImg4,
//     description: "Showcase your work, skills, and contact info in a modern portfolio.",
//     tech: [
//       { name: "HTML", icon: "🌐" },
//       { name: "CSS", icon: "🎨" },
//       { name: "JavaScript", icon: "📜" },
//       { name: "Bootstrap", icon: "🅱️" },
//       { name: "React JS", icon: "⚛️" }
//     ],
//     github: "https://github.com/udaykiranmuthineni/My-Portfolio",
//     demo: "https://muthineni-uday-portfolio.netlify.app/"
//   }
// ];

// const ExperimentProjects = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);

//   return (
//     <section id="experiment-projects" className="projects-section">
//       <h2 className="section-title">My Projects</h2>

//       <div className="project-grid">
//         {updatedProjectList.map((proj, index) => (
//           <div className="project-card" key={index} data-aos="fade-up">
//             <img src={proj.image} alt={proj.title} />
//             <div className="title-row">
//               <h3>{proj.title}</h3>
//               <div className="emoji-links">
//                 <a href={proj.demo} target="_blank" rel="noreferrer">🌐</a>
//                 <a href={proj.github} target="_blank" rel="noreferrer">🐱</a>
//               </div>
//             </div>
//             <p>{proj.description}</p>
//             <div className="project-tech">
//               {proj.tech.map((t, idx) => (
//                 <div className="tech-badge" key={idx}>
//                   <span>{t.icon}</span>
//                   <span>{t.name}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>

//       <style>{`
//         .projects-section {
//           padding: 60px 20px;
//         }
//         .section-title {
//           text-align: center;
//           font-size: 32px;
//           margin-bottom: 40px;
//         }
//         .project-grid {
//           display: grid;
//           grid-template-columns: repeat(3, 1fr);
//           gap: 20px;
//           max-width: 1200px;
//           margin: 0 auto;
//         }
//         .project-card {
//           background: #fff;
//           border-radius: 12px;
//           padding: 15px;
//           box-shadow: 0 4px 12px rgba(0,0,0,0.15);
//           display: flex;
//           flex-direction: column;
//           text-align: left;
//         }
//         .project-card img {
//           width: 100%;
//           height: 150px;
//           object-fit: cover;
//           border-radius: 10px;
//           margin-bottom: 10px;
//         }
//         .title-row {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           margin-bottom: 8px;
//         }
//         .title-row h3 {
//           font-size: 1.2rem;
//           margin: 0;
//         }
//         .emoji-links a {
//           text-decoration: none;
//           font-size: 1.2rem;
//           margin-left: 6px;
//         }
//         .emoji-links a:hover {
//           transform: scale(1.2);
//         }
//         .project-card p {
//           font-size: 0.9rem;
//           margin-bottom: 10px;
//         }
//         .project-tech {
//           display: flex;
//           flex-wrap: wrap;
//           gap: 6px;
//           justify-content: flex-start;
//         }
//         .tech-badge {
//           background: #f5f5f5;
//           padding: 4px 8px;
//           border-radius: 12px;
//           font-size: 0.75rem;
//           display: flex;
//           align-items: center;
//           gap: 4px;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default ExperimentProjects;
