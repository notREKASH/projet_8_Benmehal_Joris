import React from "react";
import "./notFound.scss";
import Header from "../../components/header/header";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/footer";

function NotFound() {
  return (
    <>
      <div className="container">
        <Header />
        <div className="notFound">
          <h2>404</h2>
          <p>Oups! La page que vous demandez n'existe pas.</p>
          <Link to="/">Retourner sur la page d’accueil</Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default NotFound;
