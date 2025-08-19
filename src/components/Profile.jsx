import React from 'react';
import profileImg from '../assets/avatar1.png'; // ✅ move to top

const Profile = () => {
  return (
    <section id="profile" className="hero-section">
      <div className="hero-left">
        <h1 className="hero-heading">
          Hi <span classname="hide">There, </span><br />
          I'm <span className="highlight-orange">Uday</span> <span className="highlight-blue">Kiran</span>
        </h1>
        <p>
  <span className="highlight-red">Welcome</span> to my digital space 🚀<br />
  A showcase of my skills, projects, and journey in tech.<br />
  Dive in and discover what I’ve been creating!
</p>


        <a href="#about" className="btn-primary">
          Connect with me ↓
        </a>

        <div className="social-icons">
          <a href="https://www.linkedin.com/in/uday-kiran-muthineni-5a00892b7/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i></a>
          <a href="https://github.com/udaykiranmuthineni" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i></a>
          <a href="https://www.instagram.com/mr.udayvarma?igsh=czU4eTMyMDB4a3Fj" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i></a>
          <a href="https://x.com/i/flow/signup" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i></a>
          <a href="https://telegram.org/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-telegram"></i></a>
        </div>
      </div>

      <div className="hero-right">
        <div className="profile-pic-bg">
  <img src={profileImg} alt="Profile" className="profile-pic" />
</div>

      </div>
    </section>
  );
};

export default Profile;


