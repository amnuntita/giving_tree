import React from "react";
import { Carousel } from "react-bootstrap";

const MyCarousel = (props) => {
  const items = props.items;

  return (
    <div>
      <Carousel interval={null}>
        {items.map((source,index) => {
          return (
            <Carousel.Item>
              <div className="carousel-box">
                <img
                  className="carousel-i"
                  src = {source}
                  alt= {index+1}
                />
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default MyCarousel;
