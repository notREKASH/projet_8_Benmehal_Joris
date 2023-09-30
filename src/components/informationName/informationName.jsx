import React from "react";
import "./informationName.scss";

function InformationName({ profile }) {
  const [firstName, lastName] = profile.name.split(" ");
  return (
    <>
      <div className="profile">
        <p>
          {firstName}
          <br />
          {lastName}
        </p>
        <img src={profile.picture} alt={profile.name} />
      </div>
    </>
  );
}

export default InformationName;
