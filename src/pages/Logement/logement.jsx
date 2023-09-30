import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Header from "../../components/header/header";
import "./logement.scss";
import Carousel from "../../components/carousel/carousel";
import Tag from "../../components/tag/tag";
import Footer from "../../components/footer/footer";
import Rating from "../../components/rating/rating";
import InformationName from "../../components/informationName/informationName";
import Collapse from "../../components/collapse/collapse";
import NotFound from "../NotFound/NotFound";

function Logement() {
  const { id } = useParams();
  const [logements, setLogements] = useState([]);
  const logement = logements.find((item) => item.id.toString() === id);

  useEffect(() => {
    fetch("/api/logement.json")
      .then((response) => response.json())
      .then((data) => {
        setLogements(data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des logements:", error);
      });
  }, []);

  if (!logement) {
    return <NotFound />;
  }

  return (
    <>
      <div className="container">
        <Header />
        <div className="logement">
          <Carousel images={logement.pictures} />
          <div className="logement__container">
            <div className="logement__container--location">
              <h2>{logement.title}</h2>
              <h3>{logement.location}</h3>
              <Tag tags={logement.tags} />
            </div>
            <div className="logement__container--information">
              <Rating rate={logement.rating} />
              <InformationName profile={logement.host} />
            </div>
          </div>
          <div className="logement__collapseContainer">
            <Collapse
              title={"Description"}
              description={logement.description}
            />
            <Collapse title={"Équipements"} description={logement.equipments} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Logement;
