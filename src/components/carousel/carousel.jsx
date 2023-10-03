import React, { useState } from "react";
import "./carousel.scss";

function Carousel({ images }) {
  // État pour garder une trace de l'image actuellement affichée
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  function handlePrevClick() {
    const newIndex = currentImageIndex - 1;
    setCurrentImageIndex(newIndex < 0 ? images.length - 1 : newIndex);
  }

  function handleNextClick() {
    const newIndex = currentImageIndex + 1;
    setCurrentImageIndex(newIndex % images.length);
  }

  return (
    <div className="carousel">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          style={{ display: index === currentImageIndex ? "block" : "none" }}
        />
      ))}
      <div>
        {images.length > 1 ? (
          <p>
            {
              <svg
                onClick={handleNextClick}
                id="nextBtn"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <g clipPath="url(#clip0_194943_254)">
                  <path
                    d="M6.48999 21.0106L8.25999 22.7806L18.16 12.8806L8.25999 2.98059L6.48999 4.75059L14.62 12.8806L6.48999 21.0106Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_194943_254">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(0 0.880615)"
                    />
                  </clipPath>
                </defs>
              </svg>
            }
            {
              <svg
                onClick={handlePrevClick}
                id="previousBtn"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <g clipPath="url(#clip0_194943_257)">
                  <path
                    d="M17.51 4.75064L15.74 2.98064L5.83995 12.8806L15.7399 22.7806L17.5099 21.0106L9.37995 12.8806L17.51 4.75064Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_194943_257">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(24 24.8806) rotate(-180)"
                    />
                  </clipPath>
                </defs>
              </svg>
            }
          </p>
        ) : (
          ""
        )}
      </div>
      <div id="indexOfImage">
        {images.length === 1 ? (
          ""
        ) : (
          <p>{`${currentImageIndex + 1}/${images.length}`}</p>
        )}
      </div>
    </div>
  );
}

export default Carousel;
