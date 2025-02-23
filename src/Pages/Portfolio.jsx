import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const projects = [
    { 
      title: "Weather Dashboard", 
      image: "/images/weather-dashboard.jpg",  // Now using actual image
      url: "https://github.com/iaplesnyc", // Placeholder for Live Demo
      repo: "https://github.com/iaplesnyc/Weather-Dashboard" // Correct repo link
    },
    { 
      title: "Task Manager App", 
      image: "/images/task-manager.jpg", 
      url: "https://github.com/iaplesnyc", // Placeholder for now
      repo: "https://github.com/iaplesnyc" // Change when repo is ready
    },
    { 
      title: "E-commerce Store", 
      image: "/images/ecommerce-store.jpg", 
      url: "https://github.com/iaplesnyc", // Placeholder for now
      repo: "https://github.com/iaplesnyc" // Change when repo is ready
    },
    { 
      title: "Portfolio Website", 
      image: "/images/portfolio-site.jpg", 
      url: "https://github.com/iaplesnyc", // Placeholder for now
      repo: "https://github.com/iaplesnyc" // Change when repo is ready
    }
  ];

  return (
    <section className="portfolio">
      <h2>Iliana's Portfolio</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={`Screenshot of ${project.title}`} className="project-image"/>
            <h3>{project.title}</h3>
            <div className="project-links">
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn">Live Demo</a>
              <a href={project.repo} target="_blank" rel="noopener noreferrer" className="btn">GitHub Repo</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
