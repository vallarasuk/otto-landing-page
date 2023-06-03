import React from "react";

const WhyOtterSection = () => {
  return (
    <div className="my-5 py-5 second-slide-main">
      {/* first section row */}
      <div className="row">
        <div className="col-12 col-sm-3"></div>
        <div className="col-12 col-sm-6 text-center">
          <h6 className="text-uppercase">Why otter?</h6>
          <div className="display-6 fw-bold">We pop in so you can pop out</div>
          <h3 className="fw-light">
            Making the impossible things about childcare possible.
          </h3>
        </div>
        <div className="col-12 col-sm-3"></div>
      </div>
      {/* Second section row two card */}
      <div className="row d-flex justify-content-evenly align-items-center my-3 py-5">
        <div className="col-10 col-md-5 col-lg-5 border-radius shadow">
          <div className="row text-center py-3 ps-3 pe-0 my-5">
            <div className="col-12 col-md-7 col-lg-7">
              <div className="display-6 fw-bold">Looking Ahead</div>
              <h5 className="my-4">
                Look at you being so ahead of the game. We can book childcare up
                to a month out — we look forward to seeing you then.
              </h5>
            </div>
            <div className="col-12 col-md-5 col-lg-5 p-0 m-0">
              <img
                src="https://assets.website-files.com/6424ac4b25764708c6aa49f7/643431fd6fe1f0f8f77e2ad8_Illo%20Woman%20Calendar.webp"
                alt="look at being"
                className="w-100 h-100"
              />
            </div>
          </div>
        </div>
        <div className="col-10 col-md-5 col-lg-5 border-radius shadow">
          <div className="row text-center py-3 ps-3 pe-0 my-5">
            <div className="col-12 col-md-7 col-lg-7">
              <div className="display-6 fw-bold mt-4">A Night Out</div>
              <h5 className="my-4">
                Nothing should get in the way of the time you spend together,
                without your kids. Our sitters make date night easy to pull off.
              </h5>
            </div>
            <div className="col-12 col-md-5 col-lg-5 p-0 m-0">
              <img
                src="https://assets.website-files.com/6424ac4b25764708c6aa49f7/643431fe6d9690f21a955320_Illo%20Date%20Night-p-500.webp"
                alt="look at being"
                className="w-100 h-100"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyOtterSection;