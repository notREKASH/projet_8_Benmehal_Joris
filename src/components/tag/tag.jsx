import React from "react";
import "./tag.scss";

function Tag({ tags }) {
  return (
    <section className="tag">
      {tags.map((tag, index) => (
        <button key={index}>{tag}</button>
      ))}
    </section>
  );
}
export default Tag;
