import React from 'react';
import './Projects.css';

const ProjectDetail = ({ project }) => {
  const handleProjectClick = (e) => {
    e.preventDefault();
    window.open(project.link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="project-detail">
      <h2>{project.title}</h2>
      <img src={project.image} alt={project.title} className="project-image" />
      <p>{project.description}</p>
      <div className="project-technologies">
        <h3>Technologies utilisées :</h3>
        <ul>
          {project.technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>
      <a href={project.link} onClick={handleProjectClick} className="project-link">
        Voir le projet
      </a>
    </div>
  );
};

export default ProjectDetail;