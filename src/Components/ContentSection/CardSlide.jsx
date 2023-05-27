import React from "react";

const CardSlide = ({ quote, author, className }) => {
  return (
    <div
      className={`card card-width my-5 shadow ${className}`}
      style={{
        margin: "0px 10px",
        minWidth: "356px",
        backgroundColor: "#fff",
        borderRadius: "10%",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        border: "none",
      }}
    >
      <div
        className="card-body h5"
        style={{ flex: "1 1 auto", padding: "2.25rem" }}
      >
        <q>{quote}</q>
      </div>
      <div className="text-start p-4">{author}</div>
    </div>
  );
};

export default CardSlide;
