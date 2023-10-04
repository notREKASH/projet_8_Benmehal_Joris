import { useParams, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Header from "../../components/header/header";
import "./logement.scss";
import Carousel from "../../components/carousel/carousel";
import Tag from "../../components/tag/tag";
import Footer from "../../components/footer/footer";
import Rating from "../../components/rating/rating";
import InformationName from "../../components/informationName/informationName";
import Collapse from "../../components/collapse/collapse";

function Logement() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [logement, setLogement] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("/api/logement.json")
      .then((response) => response.json())
      .then((data) => {
        const temp = data.find((item) => item.id.toString() === id);
        if (!temp) {
          navigate("/404");
        } else {
          setLogement(temp);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        navigate("/404");
        console.error("Erreur lors de la récupération des logements:", error);
      });
  }, [navigate, id]);

  return (
    <>
      <div className="container">
        <Header />
        {isLoading ? (
          <div className="loading">Chargement...</div>
        ) : (
          <div className="logement">
            <Carousel images={logement?.pictures} />
            <div className="logement__container">
              <div className="logement__container--location">
                <h2>{logement?.title}</h2>
                <h3>{logement?.location}</h3>
                <Tag tags={logement?.tags} />
              </div>
              <div className="logement__container--information">
                <Rating rate={logement?.rating} />
                <InformationName profile={logement?.host} />
              </div>
            </div>
            <div className="logement__collapseContainer">
              <Collapse
                title={"Description"}
                description={logement?.description}
              />
              <Collapse
                title={"Équipements"}
                description={logement?.equipments}
              />
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Logement;
