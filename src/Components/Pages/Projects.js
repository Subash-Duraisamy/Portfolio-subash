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
    name: "Mood Music",
    description: "The project addresses the challenge of enhancing the music listening experience by integrating emotional states into the recommendation process.",
    image: "/mood_music.png",
    link: "https://figual-mood-music.netlify.app/"
  },
  {
    id: 3,
    name: "Furniture Store Web",
    description: "A furniture store web description should highlight the quality and variety of furniture offered, emphasizing unique features and customization options",
    image: "/furniture.png",
    link: "https://figual-furniture.netlify.app/"
  }
  ,
  {
    id: 4,
    name: "Steganography Message",
    description: "Steganography is the art of hiding secret messages inside ordinary files, such as images or text, so that the existence of the message is concealed. This tool allows users to encode and decode secret messages safely in both images and text using a secret key.",
    image: "/steg.png",
    link: "https://figual-steganography-tool.netlify.app/"
  }
  ,
  {
    id: 5,
    name: "Banking Application",
    description: "An Business networking banking application.",
    image: "/working.png",
    link: "https://figual-todo.netlify.app/"
  },{
    id: 6,
    name: "Career Compass",
    description: "Career Compass is an intelligent web application designed to help students and early professionals discover the right career path based on their interests, skills, and personality traits. The platform uses Gemini AI, Python FastAPI backend, and a React frontend to generate personalized career recommendations, job-role insights, required skills, and step-by-step learning roadmaps.",
    image: "/careercompass.png",
    link: "https://figual-career-compass.netlify.app/"
  }
  ,{
    id: 7,
    name: "Skin Cancer Detection using ML",
    description: "An intelligent web application that uses machine learning to detect skin cancer from images. The project leverages deep learning models to analyze skin lesions and provide early detection insights.",
    image: "/working.png",
    link: "https://figual-todo.netlify.app/"
  }
  ,{
    id: 8,
    name: "Stock Market analysis using AI&ML",
    description: "An intelligent web application that uses machine learning to analyze stock market trends and predict future performance.",
    image: "/working.png",
    link: "https://figual-todo.netlify.app/"
  }
  ,{
    id: 9,
    name: "AI-Chat Event Manager for Mobile and Web app",
    description: "An intelligent web application that uses AI to manage events and provide chat-based assistance for users.",
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
