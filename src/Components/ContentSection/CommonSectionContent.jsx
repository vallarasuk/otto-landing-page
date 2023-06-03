import React, { useState } from "react";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const CommonSectionContent = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const accordionItems = [
    {
      title: "What is Otter?",
      content: `Otter is the childcare solution we wished existed, so we created it! We match families who need care with trusted sitters in their community, on-demand. If you've ever thought about sending the "bat signal" when you're in a kidcare bind, us too. That's why our care options are designed to cater to both future plans and unplanned schedule changes. Sitters benefit from the flexibility to earn money on their schedules while providing quality care.`,
    },
    {
      title: "How is Otter different from other childcare options?",
      content: `There are a few mainstays parents typically turn to when trying to grow their network of sitters; from asking friends who they use and recommend to turning to platforms where you have to do the legwork of searching, negotiating, and scheduling yourself.  All those options add to your mental load. Otter aims to reduce your load. From pre-vetting sitters, matching your availability, offering clear transparent pricing, and showing up when your plan A falls through, think of Otter as your easy button for childcare. Just tell us when you need care and we take care of the rest.`,
    },
    {
      title: "Does Otter offer last-minute backup care?",
      content: `Sure do! We can often confirm sitters in as little as 2 hours notice. The sooner you let us know though, the better; 24-48 hours advance notice is ideal.`,
    },
    {
      title: "How are Otter's sitters vetted?",
      content: `Our community is made up of highly vetted sitters who have been selected based on their ability to create a safe environment for your children. We can confidently say that we’d leave our own children with Otter sitters in a heartbeat – and we do! 

      In order to be active on Otter, every sitter goes through a multi-point vetting process including a skills assessment, background-check, and reference check from previous families.  Otter also offers free CPR and First Aid training opportunities for sitters. `,
    },
    {
      title: "Where is Otter available?",
      content: `Otter is currently available in the South Bay, California area (Palo Alto, Menlo Park, and the surrounding areas) and Chicago, IL (city limits). We hope to expand to new cities soon. If we're not currently in one of our service areas, you can sign up for our waitlist to be notified when we launch in your city.`,
    },
  ];

  const renderAccordionItem = (item, index) => {
    const isActive = index === activeIndex;

    return (
      <React.Fragment key={index}>
        <div
          className="p-4 shadow "
          style={{ borderRadius: "40px" }}
          onClick={() => toggleAccordion(index)}
        >
          <div className="d-flex justify-content-between px-3">
            <h3>{item.title}</h3>
            <div className="icon-section align-item-center my-2 mx-3">
              <FontAwesomeIcon size="xl" icon={isActive ? faMinus : faPlus} />
            </div>
          </div>
          {isActive && (
            <div className="accordion-content active ">
              <p>{item.content}</p>
            </div>
          )}
        </div>
        <br />
      </React.Fragment>
    );
  };

  return (
    <div className="second-slide-main">
      <div className="d-flex justify-content-evenly my-3">
        <div>
          <div className="text-start display-2 fw-bold second-slide-main">
            Common questions
          </div>
        </div>
        <div className="mt-4">
          <Button
            href={"https://withotter.com/faq"}
            buttonText={"View All FAQs"}
            className={"second-slide-main"}
          />
        </div>
      </div>
      <div className="mx-5 px-5">
        {accordionItems.map((item, index) => renderAccordionItem(item, index))}
      </div>
    </div>
  );
};

export default CommonSectionContent;
