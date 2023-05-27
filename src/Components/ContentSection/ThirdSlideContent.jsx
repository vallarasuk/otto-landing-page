import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import CardSlide from "./CardSlide";

const ThirdSlideContent = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
  const cardContainerRef = useRef(null);
  const cardSlides = [
    {
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ea tenetur molestias soluta ipsam quibusdam inventore accusantium laudantium minima repellat, sapiente iure impedit dolor eaque asperiores doloribus at praesentium mollitia?",
      author: "- John Doe",
      className: "card-one",
    },
    {
      quote:
        "Soluta ipsam quibusdam inventore accusantium laudantium minima repellat, sapiente iure impedit dolor eaque asperiores doloribus at praesentium mollitia? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ea tenetur molestias",
      author: "- Jane Smith",
      className: "card-two",
    },
    {
      quote:
        "Quo ea tenetur molestias soluta ipsam quibusdam inventore accusantium laudantium minima repellat, sapiente iure impedit dolor eaque asperiores doloribus at praesentium mollitia? Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      author: "- Mark Johnson",
      className: "card-three",
    },
    {
      quote:
        "Soluta ipsam quibusdam inventore accusantium laudantium minima repellat, sapiente iure impedit dolor eaque asperiores doloribus at praesentium mollitia? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ea tenetur molestias",
      author: "- Jane Smith",
      className: "card-four",
    },
  ];

//   const handlePrevSlide = () => {
//     setCurrentSlide((prevSlide) =>
//       prevSlide === 0 ? cardSlides.length - 1 : prevSlide - 1
//     );
//   };

//   const handleNextSlide = () => {
//     setCurrentSlide((prevSlide) =>
//       prevSlide === cardSlides.length - 1 ? 0 : prevSlide + 1
//     );
//   };

  const slideCardContainer = (direction) => {
    const container = cardContainerRef.current;
    const cardWidth = container.offsetWidth;
    const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
    container.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="second-slide-main">
      <div className="my-5">
        <div className="row">
          <div className="col-5">
            <h5>TESTIMONIALS</h5>
            <div className="fw-bolder display-3 mt-4">
              <p>What our Village is saying</p>
            </div>
            <p className="display-6">
              Otter sitters step in when things come up.
            </p>
            <div className="row mb-5 mt-4 pointer">
              <div className="col d-flex mx-4">
                <span
                  className="move-icon mx-2 p-4 shadow"
                  onClick={() => slideCardContainer("left")}
                >
                  <FontAwesomeIcon icon={faChevronLeft} size="lg" />
                </span>
                <span
                  className="move-icon mx-2 p-4 shadow"
                  onClick={() => slideCardContainer("right")}
                >
                  <FontAwesomeIcon icon={faChevronRight} size="lg" />
                </span>
              </div>
            </div>
          </div>

          <div className="col-7 d-flex section-card">
            <div
              className="mt-sm-4 col-12 col-lg-12 col-md-12 d-flex section-card"
              style={{
                overflowX: "hidden",
                marginTop: "50px",
                marginBottom: "72px",
              }}
            >
              <div
                className="row demo"
                style={{
                  overflowX: "scroll",
                  scrollBehavior: "smooth",
                }}
                ref={cardContainerRef}
              >
                <div className="col-12 col-lg-12 col-md-12 col-sm-12 d-flex w-lg-100 mb-sm-3">
                  {cardSlides.map((slide, index) => (
                    <CardSlide
                      key={index}
                      quote={slide.quote}
                      author={slide.author}
                      className={slide.className}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSlideContent;