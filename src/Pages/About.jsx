import React from 'react';
import './About.css';
import profilePic from '../assets/profile.jpg';  // ✅ Import the image from assets

const About = () => {
  return (
    <section>
      <h2>About Me</h2>
      <img src={profilePic} alt="My Profile" className="profile-pic" />
      <p>Hello! I'm a passionate data analyst & web developer with experience in React, JavaScript, SQL, & Python. I'm interested in AdTech and BI tools, and solving complex problems.</p>
    </section>
  );
};

export default About;
