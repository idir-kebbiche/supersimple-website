import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="home__intro">
        <img src="public/assets/images/ma-photo.jpg" alt="" className="home__photo" />
        <div className="home__text">
          <h1>Bienvenue sur mon Portfolio</h1>
          <p>Je m'appelle IDIR KEBBICHE, et je suis Développeur Web.</p>
          <p>Voici un aperçu de mes compétences et de mes projets.</p>
        </div>
      </div>
      <div className="home__skills">
        <h2>Compétences</h2>
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>SQL</li>
        </ul>
      </div>
      <div className="home__frameworks">
        <h2>Frameworks</h2>
        <ul>
          <li>React</li>
          <li>Angular</li>
          <li>Vue.js</li>
          <li>Express</li>
          <li>Sequelize</li>
        </ul>
      </div>
      <div className="home__education">
        <h2>Éducation</h2>
        <p>College La Cite, DEC en Programmation Informatique</p>
      </div>
      <div className="home__projects">
        <h2>Projets</h2>
        <p>Découvrez quelques-uns de mes projets sur ma <a href="/projects">page des projets</a>.</p>
      </div>
    </div>
  );
};

export default Home;
