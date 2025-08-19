import React from 'react';
import profileImg from '../assets/logo192.png';
import resumePDF from '../assets/my resume.pdf';
import '../style.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2 className="section-title">About Me</h2>

      {/* Top Row */}
      <div className="about-top-row">
        {/* Image */}
        <div className="about-image-box">
          <img src={profileImg} alt="Profile" />
        </div>

        {/* Description aligned to top of image */}
        <div className="about-description">
          <h3 className="aligned-role">Full Stack Developer</h3>
          <p>
            I’m Muthineni Uday Kiran, a BSc Computer Science graduate with hands-on
            experience in both front-end and back-end development. I have strong analytical
            and problem-solving skills, and a solid understanding of data structures and algorithms.
            I love building efficient and scalable web applications.
          </p>

         <a href={resumePDF} className="resume-btn" target="_blank" rel="noopener noreferrer">
         Download Resume
         </a>

        </div>
      </div>

      {/* Education Label + Cards */}
     <div className="education-wrapper">
  <div className="education-vertical-label">Education</div>

  <div className="education-cards-row">
    <div className="edu-card">
      <h4>Degree</h4>
      <p>B.Sc Computer Science</p>
      <p>Vaagdevi Degree & P.G College</p>
      <p>CGPA: 65%</p>
      <p>2020-2023</p>
      <p>Hanamkonda</p>
      {/* <span>CGPA: 65%</span> */}
    </div>

    <div className="edu-card">
      <h4>Intermediate</h4>
      <p>Sri Vedha Junior College</p>
      <p>CGPA: 54%</p>
      <p>2018-2020</p>
      <p>Bheemaram</p>
      {/* <span>CGPA: 54%</span> */}
    </div>

    <div className="edu-card">
      <h4>School</h4>
      <p>Saketha High School</p>
      <p>CGPA: 86%</p>
      <p>2016-2018</p>
      <p>Bheemaram</p>
      {/* <span>CGPA: 86%</span> */}
    </div>
  </div>
</div>

    </section>
  );
};

export default About;
