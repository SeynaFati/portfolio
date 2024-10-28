import React, { useState } from "react";
import "../styles/Collapse.css"; // Crée un fichier CSS pour gérer le style du collapse

const Collapse = ({ description, githubLink }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse-container">
      <button onClick={toggleCollapse} className="collapse-button">
        {isOpen ? "Masquer la description" : "Voir plus"}
      </button>

      {isOpen && (
        <div className="collapse-content">
          <p>{description}</p>

          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="github-button"
          >
            Consulter le site
          </a>
        </div>
      )}
    </div>
  );
};

export default Collapse;
