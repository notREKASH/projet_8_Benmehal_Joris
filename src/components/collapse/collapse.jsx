import React, { useState } from "react";
import "./collapse.scss";

function Collapse({ title, description }) {
  const [showContent, setShowContent] = useState(false);

  function openContent() {
    setShowContent((prevState) => !prevState);
  }

  let content;
  if (Array.isArray(description)) {
    content = (
      <ul>
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  } else {
    content = <p>{description}</p>;
  }

  return (
    <>
      <div className="collapse">
        <button onClick={openContent}>{title}</button>
        <svg
          onClick={openContent}
          className={showContent ? "rotate open" : "rotate"}
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M11.1931 10.5029C11.6394 10.0566 12.3642 10.0566 12.8104 10.5029L19.6653 17.3578C20.1116 17.8041 20.1116 18.5288 19.6653 18.9751C19.219 19.4214 18.4943 19.4214 18.048 18.9751L12 12.9271L5.95203 18.9715C5.50575 19.4178 4.78099 19.4178 4.33471 18.9715C3.88843 18.5252 3.88843 17.8005 4.33471 17.3542L11.1896 10.4994L11.1931 10.5029Z"
            fill="white"
          />
        </svg>
        <div className={showContent ? "content-show" : "content-hidden"}>
          {content}
        </div>
      </div>
    </>
  );
}
export default Collapse;
