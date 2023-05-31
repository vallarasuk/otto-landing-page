import React from "react";

const RowSectionContent = () => {
  return (
    <div className="my-5 second-slide-main shadow border-radius">
      <div className="row  py-5">
        <div className="col-4">
          <img
            src="https://assets.website-files.com/6424ac4b25764708c6aa49f7/642f270c9bf5fd7d72ae9b2e_woman%20on%20phone.webp"
            alt="row-img"
            width={"100%"}
            height={"100%"}
          />
        </div>
        <div className="col-4 text-center my-5">
          <div className="display-5 fw-bold">In a Pinch</div>
          <h4 className="py-3 fw-light">
            Emergency? Sick nanny? No problem, we can help! We can fill requests
            with as little as two hours' notice.
          </h4>
        </div>
        <div className="col-4">
          <img
            src="https://assets.website-files.com/6424ac4b25764708c6aa49f7/642f270c40ba075baaae4f89_man%20on%20phone.webp"
            alt="row-img"
            width={"100%"}
            height={"100%"}
          />
        </div>
      </div>
    </div>
  );
};

export default RowSectionContent;
