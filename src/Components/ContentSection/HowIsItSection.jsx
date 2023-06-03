import React, { useState } from "react";

const HowIsItSection = () => {
  const signUpText = `We like to keep it simple. Tell us your name, contact
    information, and a little bit about you and your kids. Just
    like that, you're all set.`;
  const bookSitterText = `Book a sitter now and enjoy peace of mind knowing your kids are in good hands.`;
  const getCareText = `Get the care your family needs and pay hassle-free with our convenient payment options.`;

  const [buttonContent, setButtonContent] = useState({
    content: signUpText,
    image:
      "https://assets.website-files.com/6424ac4b25764708c6aa49f7/64307bc13be141600626c749_Sign%20up%202-p-500.webp",
  });

  const [activeButton, setActiveButton] = useState("signUp");

  const handleButtonClick = (content, image, buttonId) => {
    setButtonContent({
      content: content,
      image: image,
    });
    setActiveButton(buttonId);
  };

  return (
    <div className="second-slide-main">
      <div className="row py-5">
        <div className="col-7">
          <p className="fw-bolder">HOW IT WORKS</p>
          <h1 className="display-4 fw-bold">
            We help families find reliable, flexible kidcare
          </h1>
          <p className="h2 fw-light">
            We'll match you with sitters based on your family's needs and their
            availability.
          </p>
          <div className="my-5 pointer how-button-section">
            <h6>
              <a
                href="#signUp"
                className={`text-decoration-none  btn-color ${
                  activeButton === "signUp"
                    ? "active-link shadow px-4 p-3 border-radius"
                    : ""
                }`}
                onClick={() =>
                  handleButtonClick(
                    signUpText,
                    "https://assets.website-files.com/6424ac4b25764708c6aa49f7/64307bc13be141600626c749_Sign%20up%202-p-500.webp",
                    "signUp"
                  )
                }
              >
                {activeButton === "signUp" && <span className="dot" />}
                Sign Up
              </a>
            </h6>
          </div>
          <div className="my-5">
            <h6>
              <a
                href="#bookSitter"
                className={`text-decoration-none  btn-color ${
                  activeButton === "bookSitter"
                    ? "active-link shadow  px-4 p-3 border-radius"
                    : ""
                }`}
                onClick={() =>
                  handleButtonClick(
                    bookSitterText,
                    "https://assets.website-files.com/6424ac4b25764708c6aa49f7/642f2d3ee36e48735a4de936_home%20tabs%20%E2%80%93%20book.webp",
                    "bookSitter"
                  )
                }
              >
                {activeButton === "bookSitter" && <span className="dot" />}
                Book a sitter
              </a>
            </h6>
          </div>
          <div className="my-4">
            <h6>
              <a
                href="#getCare"
                className={`text-decoration-none btn-color ${
                  activeButton === "getCare"
                    ? "active-link shadow  px-4 p-3 border-radius"
                    : ""
                }`}
                onClick={() =>
                  handleButtonClick(
                    getCareText,
                    "https://assets.website-files.com/6424ac4b25764708c6aa49f7/642f2d3e943ed08537d65d7e_home%20tabs%20%E2%80%93%20heda%20out.webp",
                    "getCare"
                  )
                }
              >
                {activeButton === "getCare" && <span className="dot" />}
                Get care & pay
              </a>
            </h6>
          </div>
        </div>
        <div className="col-5 py-5">
          <div className="shadow" style={{ borderRadius: "10%" }}>
            <div>
              <div className="p-3">
                <img
                  className="shadow"
                  style={{ borderRadius: "15%" }}
                  width={"100%"}
                  src={buttonContent.image}
                  alt="We help families find reliable, flexible kidcare"
                />
                <p className="mt-4 text-center how-button-section-content">
                  {buttonContent.content}
                  </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowIsItSection;
