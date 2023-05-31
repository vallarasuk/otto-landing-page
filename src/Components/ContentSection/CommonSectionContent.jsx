import React from "react";
import Button from "../Button/Button";

const CommonSectionContent = () => {
  return (
    <div className=" d-flex justify-content-evenly my-5 ">
      <div className="">
        <div className="text-start display-2 fw-bold second-slide-main">
          Common questions
        </div>
      </div>
      <div className=" mt-4">
        <Button
          href={"https://withotter.com/faq"}
          buttonText={"View All FAQs"}
          className={"second-slide-main"}
        />
      </div>
    </div>
  );
};

export default CommonSectionContent;
