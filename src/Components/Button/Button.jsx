import React from "react";

const Button = ({ link, buttonText, customStyle }) => {
  return (
    <button className="button-style ">
      <a
        className="text-decoration-none"
        style={customStyle}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {buttonText}
      </a>
    </button>
  );
};

export default Button;
