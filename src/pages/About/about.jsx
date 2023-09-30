import React from "react";
import "./about.scss";
import Header from "../../components/header/header";
import Image from "../../assets/Images/bg2.png";
import Collapse from "../../components/collapse/collapse";
import Footer from "../../components/footer/footer";

function About() {
  return (
    <>
      <div className="container">
        <Header />
        <div className="about">
          <div className="about--overlay">
            <img src={Image} alt="" />
            <div></div>
          </div>
          <Collapse
            title={"Fiabilité"}
            description={
              "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
            }
          />
          <Collapse
            title={"Respect"}
            description={
              "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
            }
          />
          <Collapse
            title={"Service"}
            description={
              "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
            }
          />
          <Collapse
            title={"Sécurité"}
            description={
              "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
            }
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
export default About;