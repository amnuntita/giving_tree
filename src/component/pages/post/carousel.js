import React from "react";
import {Carousel} from "react-bootstrap";

const MyCarousel = () => {

  return (
    <div>
    <Carousel interval={null}>
    <Carousel.Item>
    <div className="carousel-box">
      <img
        className="d-block carousel-i"
        src="/assets/images/book1.jpg"
        alt="Second slide"
      />
  
      </div>
    </Carousel.Item>
    <Carousel.Item>
      <div className="carousel-box">
      <img
        className="d-block carousel-i"
        src="/assets/images/book2.jpg"
        alt="Second slide"
      />
  
      </div>
    </Carousel.Item>
    <Carousel.Item>
    <div className="carousel-box">
      <img
        className="d-block carousel-i"
        src="/assets/images/book3.jpg"
        alt="Second slide"
      />
  
      </div>
    </Carousel.Item>
  </Carousel>
  </div>
  );
};

export default MyCarousel;
