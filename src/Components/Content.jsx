import React from "react";
import "./style.css";
const Content = () => {
  return (
    <div
      style={{
        backgroundImage: "url('https://picsum.photos/seed/picsum/200/300')",
        backgroundSize: "100% auto",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "100%",
        height: "100vh",
        borderRadius: "10%",
        // display: "flex",
        // alignItems: "center",
        // justifyContent: "center",
      }}
    >
      {/* <div className="container text-center text-white">
    <h1 className="display-1 fw-bold heading d-flex justify-content-center align-items-center w-75 bg-danger">
      Reliable kidcare on demand
    </h1>
    <p>
      Otter matches parents who need care with trusted sitters in their community, on-demand.
    </p>
    <button className="btn btn-primary rounded-6">Sign Up</button>
  </div> */}

      <div className="row text-center text-white">
        <div className="col-2 col-sm-2"><h1></h1></div>
        <div className="col-8 col-sm-12">
          <h1 className="display-1 fw-bold heading ">
            Reliable kidcare on demand
          </h1>
          <p>
      Otter matches parents who need care with trusted sitters in their community, on-demand.
    <button className="btn btn-primary rounded-6">Sign Up</button>
    </p>
        </div>
        <div className="col-2 col-sm-2 "></div>
      </div>
    </div>
  );
};

export default Content;
