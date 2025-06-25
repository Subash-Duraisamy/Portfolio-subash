import React from 'react';
import './Projects.css';

const projects = [
  {
    id: 1,
    name: "To-do Application",
    description: " helps to manage and maintain our regular schedules.",
     image: "/todo_2.png",
    link: "https://figual-todo.netlify.app/"
  },
  {
    id: 2,
    name: "Loan-connect Application",
    description: "A farmer's social network and marketplace in one platform",
    image: "/working.png",
    link: "https://figual-todo.netlify.app/"
  },
  {
    id: 3,
    name: "Banking-Application",
    description: "An Business networking banking application.",
    image: "/working.png",
    link: "https://figual-todo.netlify.app/"
  }
];

const Projects = () => {
  return (
    <div className="projects-page-wrapper">
      <div className="swinging-header-text">Projects</div>
      <div className="projects-container">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <img src={project.image} alt={project.name} className="project-image" />
            <div className="project-info">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">🔗 View Project</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
