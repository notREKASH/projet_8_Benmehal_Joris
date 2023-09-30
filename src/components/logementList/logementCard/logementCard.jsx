import React, { useEffect, useState } from "react";
import "./logementCard.scss";
import { Link } from "react-router-dom";

function LogementCard({ limit }) {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    fetch("/api/logement.json")
      .then((response) => response.json())
      .then((data) => {
        if (limit) {
          setLogements(data.slice(0, limit));
        } else {
          setLogements(data);
        }
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des logements:", error);
      });
  }, [limit]);

  return (
    <section className="containerCard">
      <div className="card">
        {logements.map((logement) => (
          <Link key={logement.id} to={`/logement/${logement.id}`}>
            <article>
              <div>
                <h2>{logement.title}</h2>
              </div>
              <img src={logement.cover} alt={logement.description} />
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default LogementCard;
