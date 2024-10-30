import React, { useEffect } from "react"; // Ajout de useEffect
import "../styles/Projects.css";
import NavBar from "./NavBar";
import Skills from "./Skills";
import Contact from "./Contact";
import Collapse from "./Collapse";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });

    const typeWriter = (element, text, index = 0) => {
      if (index < text.length) {
        element.innerHTML += text.charAt(index);
        setTimeout(() => typeWriter(element, text, index + 1), 50);
      }
    };

    const bubbles = document.querySelectorAll(".text-bubble");
    bubbles.forEach((bubble, index) => {
      const text = bubble.textContent.trim();
      bubble.textContent = "";

      setTimeout(() => {
        typeWriter(bubble, text);
      }, index * 800);
    });
  }, []);

  return (
    <section id="projects" className="projects-section">
      <NavBar />

      <div className="header-container">
        <img src="/HELLO.webp" alt="Hello-pic" className="header-picture" />
        <div className="mind-map">
          <div className="text-bubble top-left">
            Formation intensive de 8 mois en développement web.
          </div>
          <div className="text-bubble top-right">
            Éventail de compétences techniques couvrant à la fois le front-end
            et le back-end.
          </div>
          <div className="text-bubble bottom-left">
            Mes compétences s'élargissent en explorant de nouvelles technologies
            comme PHP.
          </div>
        </div>

        <div className="revisited-mind-map">
          <div className="text">
            Formation intensive de 8 mois en développement web.
          </div>
          <div className="text">
            Éventail de compétences techniques couvrant à la fois le front-end
            et le back-end.
          </div>
          <div className="text">
            Mes compétences s'élargissent en explorant de nouvelles technologies
            comme PHP.
          </div>
          <div className="text">
            <a
              href="/CV.pdf"
              className="cv-links"
              target="_blank"
              rel="noopener noreferrer"
            >
              Consultez mon CV
            </a>
          </div>
        </div>
      </div>

      <h2> Mes Projets</h2>
      <div className="project-list">
        {/* Projet 1 */}
        <div className="project-item" data-aos="flip-left">
          <img src="/booki.png" alt="Booki-pic" className="project-picture" />
          <div className="project-details">
            <h3>
              Projet 1: Booki - Plateforme de réservation d'hébergements et
              d'activités touristiques
            </h3>
            <p>
              Booki est un site de réservation permettant aux utilisateurs de
              trouver des hébergements et des activités selon leur destination.
              Le projet se concentre sur la maquette fournie et la mise en page
              responsive pour offrir une expérience utilisateur agréable sur
              tous types d’appareils.
            </p>
            <Collapse
              description=" Problématiques rencontrées:

                            • Réaliser un site entièrement responsive tout en respectant la maquette fournie.

                            • Structurer le code pour faciliter les futures modifications.

                            Solutions apportées:

                            • Utilisation du CSS Flexbox et Grid pour organiser les éléments de manière fluide et responsive.

                            • Adoption de la méthodologie BEM (Block, Element, Modifier) pour une meilleure structure du CSS.

                            Compétences développées:

                            • Intégration de maquettes en HTML/CSS.

                            • Création d’un site responsive.

                            • Utilisation de Flexbox et CSS Grid."
              githubLink="https://reservation-booki.netlify.app/"
              projectId="project1"
            />
          </div>
        </div>

        {/* Projet 2 */}
        <div className="project-item" data-aos="flip-left">
          <img src="/SB.png" alt="sb-pic" className="project-picture" />
          <div className="project-details">
            <h3>Projet 2: Sophie Bluel - Portfolio de photographe</h3>
            <p>
              Création du portfolio d’une photographe freelance, Sophie Bluel,
              qui permet de gérer ses galeries de photos via un back-office. Les
              utilisateurs peuvent visualiser son travail tandis qu’elle peut
              gérer les images de manière autonome.
            </p>
            <Collapse
              description="Problématiques rencontrées:

                            • Implémenter un système de gestion des photos accessible via une interface administrateur.

                            • Garantir la fluidité de l’expérience utilisateur lors de l’ajout, la suppression ou la modification des photos.

                            Solutions apportées:

                            • Mise en place d’un back-office sécurisé avec authentification.

                            • Gestion des images via un service d’upload et d’optimisation.

                            Compétences développées:

                            • Création d’un back-office sécurisé.

                            • Gestion de l’authentification et de la sécurité.

                            • Optimisation et gestion des images."
              githubLink="https://github.com/SeynaFati/S.Bluel"
              projectId="project2"
            />
          </div>
        </div>

        <div className="project-item" data-aos="flip-left">
          <img src="/NINAC.png" alt="NINA-pic" className="project-picture" />
          <div className="project-details">
            <h3>Projet 3: Nina Carducci - Portfolio d’architecte</h3>
            <p>
              Développement du portfolio de Nina Carducci, une architecte
              souhaitant mettre en valeur ses projets. Le site présente ses
              réalisations avec des descriptions détaillées, des images en haute
              qualité et une navigation simple.
            </p>
            <Collapse
              description="Problématiques rencontrées:

                    • Assurer une présentation visuelle soignée et un chargement rapide malgré l’utilisation de nombreuses images haute définition.

                    • Maintenir une expérience utilisateur fluide sur différents appareils.

                    Solutions apportées:

                    • Optimisation des images pour réduire leur poids tout en maintenant une haute qualité.

                    • Utilisation de transitions et animations pour améliorer l’interactivité.

                    Compétences développées:

                    • Optimisation d’images pour la performance web.

                    • Maîtrise des animations CSS pour améliorer l’expérience utilisateur.

                    • Création d’un site responsive avec un design centré sur l’image."
              githubLink="https://seynafati.github.io/Nina-Carducci/"
              projectId="project3"
            />
          </div>
        </div>

        <div className="project-item" data-aos="flip-left">
          <img
            src="/Kasa-logo.png"
            alt="Kasa-pic"
            className="project-picture"
          />
          <div className="project-details">
            <h3>Projet 4: Kasa - Application de location de logements</h3>
            <p>
              Kasa est une plateforme permettant aux utilisateurs de consulter
              et de réserver des logements. Le site propose un affichage
              dynamique des annonces avec des filtres de recherche avancés.
            </p>
            <Collapse
              description="Problématiques rencontrées: Affichage dynamique des logements avec un système de tri par critères. Solutions apportées: Utilisation de React pour afficher dynamiquement les logements."
              githubLink="https://github.com/SeynaFati/KASA1"
              projectId="project4"
            />
          </div>
        </div>

        <div className="project-item" data-aos="flip-left">
          <img src="/mvg-logo.png" alt="MVG-pic" className="project-picture" />
          <div className="project-details">
            <h3>
              Projet 5: Mon Vieux Grimoire - Site de gestion et de notation de
              livres
            </h3>
            <p>
              Développement d’un site permettant aux utilisateurs d’ajouter,
              modifier, et noter des livres. L’application inclut une gestion
              des images optimisée et une sécurité renforcée via
              l’authentification JWT.
            </p>
            <Collapse
              description="Problématiques rencontrées:
                            • Gestion des utilisateurs et des authentifications JWT pour sécuriser l’accès aux fonctionnalités de l’application.
                            • Gestion des images pour assurer une bonne performance du site et un affichage optimisé.
                            Solutions apportées:
                            • Mise en place d'un middleware pour gérer l'upload et l'optimisation des images.
                            • Utilisation de JWT pour sécuriser les requêtes et permettre l'authentification.
                            Compétences développées:
                            • Sécurisation des API avec JWT.
                            • Gestion d’images via Node.js (Sharp).
                            • Développement back-end avec Express.js et MongoDB."
              githubLink="https://github.com/SeynaFati/Mon-vieux-grimoire"
              projectId="project5"
            />
          </div>
        </div>

        <div className="project-item" data-aos="flip-left">
          <img src="/QWENTA.png" alt="QWENTA-pic" className="project-picture" />
          <div className="project-details">
            <h3>
              Projet 6: Menu Maker by Qwenta - Site de création et diffusion de
              menus pour restaurateurs
            </h3>
            <p>
              Menu Maker est un projet développé pour permettre aux
              restaurateurs de créer et personnaliser facilement leurs menus en
              ligne. J’ai participé à la planification du projet, en
              collaboration avec l’équipe et le Product Owner. Le but était de
              concevoir un outil intuitif pour créer des menus en toute
              autonomie, avec différentes options de mise en page.
            </p>
            <Collapse
              description="Problématiques rencontrées:

            • Planifier les fonctionnalités essentielles pour répondre aux besoins des restaurateurs.

            • Collaborer avec l’équipe pour définir l’architecture du projet et le déroulement du développement.

            Solutions apportées:

            • Élaboration d’une roadmap avec des priorités claires pour le développement.

            • Conception des user stories et participation aux choix technologiques.

            Compétences développées:

            • Planification de projet web.

            • Collaboration avec une équipe en mode agile.

            • Définition des besoins fonctionnels et techniques."
              githubLink="https://www.figma.com/proto/Q6NEUPqwz1U3HFaCaVoF7N/Maquette-desktop---Menu-Maker-by-Qwenta?node-id=0-48&node-type=frame&t=HyXf2h0qykbXTEKn-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=0%3A658"
              projectId="project6"
            />
          </div>
        </div>
      </div>

      <Skills />
      <Contact />
    </section>
  );
};

export default Projects;
