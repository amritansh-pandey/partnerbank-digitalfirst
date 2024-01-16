import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Entertainment, Utility, Others, Travel, Shopping, Grocery,Food } from '../Icons';
import './style.css'; // Check the correct path to your CSS file

const CardCarousel = () => {
  const data = [73.56, 122.61, 147.14, 188.02, 40.88, 163.49, 81.74];
  const labels = ['Entertainment', 'Grocery', 'Food & dining', 'Shopping', 'Travel', 'Utility & bills', 'Others'];

  const iconComponents = [
    <Entertainment />,
    <Grocery />,
    <Food />,
    <Shopping/>,
    <Travel />,
    <Utility />,
    <Others />,
  ];

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 2,
    variableWidth: true,
    centerMode: false,
  };

  return (
    <Slider {...settings}>
      {data.map((value, index) => (
        <div key={index} className={`carousel-item color-${index + 1}`}>
          <div className="carousel-content">
            <div className="carousel-icon">{iconComponents[index]}</div>
            <div className="carousel-label subheading2">{labels[index]}</div>
            <div className="carousel-value caption">${value}</div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default CardCarousel;