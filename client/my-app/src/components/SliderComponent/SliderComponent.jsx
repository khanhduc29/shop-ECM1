import React from "react";
import Slider from "react-slick";
import { SliderContainer, SliderImage, SliderOverlay } from "./style";

const SliderComponent = ({ arrImages }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
  };

  return (
    <Slider {...settings}>
      {arrImages.map((image, index) => (
        <SliderContainer key={index}>
          <SliderImage src={image} alt={`slider-${index}`} />
          <SliderOverlay>
            <h3>{index + 1}</h3>
          </SliderOverlay>
        </SliderContainer>
      ))}
    </Slider>
  );
};

export default SliderComponent;
