import React from "react";
import { Carousel } from "react-bootstrap";
import BaseUrl from './../../../BaseUrl.js';


const MyCarousel = (props) => {
  const items = props.items;

  console.log(items)

  return (
    <div>
      <Carousel interval={null}>
        {items.map((source,index) => {
          let s = BaseUrl+"/"+source+".jpg"
          return (
            <Carousel.Item>
              <div className="carousel-box">
                <img
                  className="carousel-i"
                  src = {s}
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
