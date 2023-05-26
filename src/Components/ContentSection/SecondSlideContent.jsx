import React from "react";
// import Button from "../Button/Button";

const SecondSlideContent = () => {
  // const signUpStyle = {
  //   borderRadius: "50px",
  //   backgroundColor: "#ffffff",
  //   padding: "10px 25px",
  //   border: "none",
  //   fontWeight: "bold",
  //   color: "#00373e",
  // };

  const signUpText = `We like to keep it simple. Tell us your name, contact
    information, and a little bit about you and your kids. Just
    like that, you're all set.`;

  return (
    <div className=" second-slide-main">
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
          {/* <Button
            link="https://withotter.com/#"
            customStyle={signUpStyle}
            buttonText={"Sign Up"}
          /> */}
           <div className="my-5 pointer">
            <h6>Sign Up</h6>
          </div>
          <div className="my-5">
            <h6>Book a sitter</h6>
          </div>
          <div className="my-4">
            <h6>Get care & pay</h6>
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
                  src="https://assets.website-files.com/6424ac4b25764708c6aa49f7/64307bc13be141600626c749_Sign%20up%202-p-500.webp"
                  alt="We help families find reliable, flexible kidcare"
                />
                <p className="mt-4 text-center">{signUpText}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSlideContent;
