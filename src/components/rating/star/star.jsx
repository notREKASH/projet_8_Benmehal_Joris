import React from "react";
import "./star.scss";

function Star({ filled }) {
  return (
    <>
      <span className={filled ? "star-filled" : "star-empty"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path d="M12 2l2.4 7.2h7.6l-6.2 4.56l2.4 7.2L12 16.4l-6.2 4.56l2.4-7.2L2 9.2h7.6L12 2z" />
        </svg>
      </span>
    </>
  );
}

export default Star;
