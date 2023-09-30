import React from "react";
import "./backgroundImage.scss";

function BackgroundImage({ src, height }) {
  return (
    <>
      <div className="bg-image" data-height={height}>
        <img className="" src={src} alt="#"></img>
        <div>
          <h2>
            Chez vous, <br className="sautDeLigne" /> partout et ailleurs
          </h2>
        </div>
      </div>
    </>
  );
}
export default BackgroundImage;
