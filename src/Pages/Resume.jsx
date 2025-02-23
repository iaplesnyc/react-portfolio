import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <section className="resume">
      <h2>Resume</h2>
      <div className="resume-download">
        <a href="/Pena_Iliana_Resume.pdf" download="Pena_Iliana_Resume.pdf" className="btn">
          📄 Download My Resume
        </a>
      </div>

      <h3>Proficiencies</h3>
      <div className="skills">
        <ul className="skills-list">
          <li>JavaScript (ES6+)</li>
          <li>React.js</li>
          <li>Node.js</li>
          <li>SQL & NoSQL Databases</li>
          <li>RESTful APIs</li>
          <li>Data Visualization & Storytelling</li>
          <li>Git & Version Control</li>
          <li>Microsoft Office Suite</li>
          <li>Bilingual: English & Spanish</li>
        </ul>
      </div>
    </section>
  );
};

export default Resume;
