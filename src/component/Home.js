import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css"; // Assurez-vous d'ajouter un fichier CSS pour le style

const Home = () => {
  const navigate = useNavigate(); // Créer une instance de l'historique

  const handleExplore = () => {
    navigate("/projects"); // Redirige vers la page des projets
  };

  return (
    <div className="home-page">
      <img
        src="/home-picture.webp" // Assurez-vous que le chemin de l'image est correct
        alt="Your Name"
        className="background-photo"
      />
      <h1 className="name">Fati Seynabou</h1>
      <p className="description">Web Développeuse</p>
      <button className="explore-button" onClick={handleExplore}>
        EXPLORE
      </button>
    </div>
  );
};

export default Home;
