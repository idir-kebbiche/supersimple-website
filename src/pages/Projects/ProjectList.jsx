import React, { useState } from 'react';
import ProjectDetail from './ProjectDetail';
import './Projects.css';

const ProjectList = () => {
  const [projects] = useState([
    {
      id: 1,
      title: "Projet 1",
      description: (
        <div className="project-description">
          <p>
            Description du projet 1: <br></br>Ce projet est une page HTML qui présente un classement des meilleures actrices avec leurs meilleurs films. La page inclut une section principale avec les actrices et leurs descriptions, ainsi qu'une section de menu de boutons pour naviguer rapidement vers chaque actrice. Le design utilise des images en noir et blanc avec des effets de couleur au survol, et il inclut des liens vers des feuilles de style CSS et des scripts JavaScript pour l'interaction.
          </p>
        </div>
      ),
      image: "public/assets/images/projet1.jpg",
      technologies: ["HTML", "CSS", "jQuery"],
      link: "/ProjetjQuery/index.html"
    },
    {
      id: 2,
      title: "Projet 2",
      description: (
        <div className="project-description">
          <p>
            Description du projet 2: <br></br>Ce jeu du serpent classique est codé en JavaScript et HTML5 Canvas. Le joueur contrôle un serpent qui se déplace à travers une grille. Le but est de manger des pommes pour marquer des points sans heurter les murs ou se mordre la queue. Lorsque le serpent se déplace, il grandit, ce qui complique la navigation. Le jeu se termine si le serpent heurte un mur ou lui-même. Pour recommencer après une défaite, il suffit d'appuyer sur la barre d'espace. Le jeu affiche également le score actuel à mesure que le serpent mange des pommes.
          </p>
        </div>
      ),
      image: "/assets/images/projet2.jpg",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "/JeuSerpent/index.html"
    },
    
  ]);

  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="projects-container">
      <h1>Mes Projets</h1>
      <div className="project-list">
        {projects.map(project => (
          <div key={project.id} className="project-item" onClick={() => setSelectedProject(project)}>
            <h3>{project.title}</h3>
            <img src={project.image} alt={project.title} className="project-thumbnail" />
          </div>
        ))}
      </div>
      {selectedProject && <ProjectDetail project={selectedProject} />}
    </div>
  );
};

export default ProjectList;