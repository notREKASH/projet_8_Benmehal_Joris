import React from "react";
import "./accueil.scss";
import Header from "../../components/header/header";
import BackgroundImage from "../../components/backgroundImage/backgroundImage";
import Image from "../../assets/Images/bg1.png";
import LogementList from "../../components/logementList/logementList";
import Footer from "../../components/footer/footer";

function Accueil() {
  return (
    <>
      <div className="container">
        <Header />
        <BackgroundImage src={Image} height={"111px"} />
        <LogementList />
      </div>
      <Footer />
    </>
  );
}
export default Accueil;
