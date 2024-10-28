import React from "react";
import {
  FaNodeJs,
  FaDatabase,
  FaLock,
  FaReact,
  FaImage,
  FaTools,
} from "react-icons/fa";
import "../styles/Skills.css"; // Assurez-vous d'ajouter du style dans le fichier CSS

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2>Mes Compétences</h2>
      <div className="skills-grid">
        <div className="skill-card">
          <FaNodeJs className="skill-icon" />
          <h3>Back-end</h3>
          <p>
            Expertise en Node.js avec Express, gestion de bases de données
            MongoDB, implémentation de routes CRUD sécurisées, manipulation et
            traitement d’images.
          </p>
        </div>

        <div className="skill-card">
          <FaDatabase className="skill-icon" />
          <h3>API RESTful</h3>
          <p>
            Création et consommation d’API, gestion des authentifications via
            JWT, validation des données et middleware personnalisé.
          </p>
        </div>

        <div className="skill-card">
          <FaLock className="skill-icon" />
          <h3>Sécurité</h3>
          <p>
            Hachage de mots de passe avec bcrypt, gestion de sessions
            sécurisées, mise en place de politiques d’authentification.
          </p>
        </div>

        <div className="skill-card">
          <FaReact className="skill-icon" />
          <h3>Front-end</h3>
          <p>
            Familiarité avec React, création d’interfaces utilisateurs
            dynamiques et réactives.
          </p>
        </div>

        <div className="skill-card">
          <FaImage className="skill-icon" />
          <h3>Optimisation d'images</h3>
          <p>
            Traitement d’images pour optimiser leur performance dans les
            applications.
          </p>
        </div>

        <div className="skill-card">
          <FaTools className="skill-icon" />
          <h3>Outils de développement</h3>
          <p>
            Utilisation d’outils comme GitHub, Swagger, et Hoppscotch pour le
            développement, les tests et la collaboration.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
