import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { importImage } from '../../utils';
// import Intro1 from '../../assets/images/partnerbank/light/intro1.png';
import Intro2 from '../../assets/images/partnerbank/light/intro2.png';
import Intro3 from '../../assets/images/partnerbank/light/intro3.png';
import TextButtonSmall from '../Buttons/TextButtonSmall';
import data from '../../assets/data/data.json';

const IntroCarousel = ({brand, theme, lang="en"}) => {
  const carouselData = [
    {
      heading: data['carousel-intro1-heading'][lang],
      image: importImage(brand, theme, "intro1"),
      text: data['carousel-intro1-text'][lang]
    },
    {
      heading: 'Take charge of your card',
      image: Intro2,
      text: 'Control card access and settings straight from your smartphone, anywhere, anytime.',
    },
    {
      heading: 'Zero fees',
      image: Intro3,
      text: 'Seamless transactions, zero Fees. Your Money, your freedom.',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < carouselData.length - 1) {
      setCurrentSlide((prevSlide) => prevSlide + 1);
    }
  };

  return (
    <div className="intro-carousel">
      <div className="intro-skip-container">
        {currentSlide !== carouselData.length - 1 && (
           <Link to="/getting-started" style={{ textDecoration: "none" }}>
          <TextButtonSmall text={"Skip"} />
          </Link>
        )}
      </div>

      <div className='intro-main-container'>
        <div className='intro-title-container'>
          <span className="title2">{carouselData[currentSlide].heading}</span>
        </div>

        <div className='intro-image-container'>
          <img src={carouselData[currentSlide].image} alt={`Slide ${currentSlide + 1}`} />
        </div>

        <div className='intro-body-container'>
          <span className="body1">{carouselData[currentSlide].text}</span>
        </div>

        <div className="carousel-indicators">
          {carouselData.map((_, index) => (
            <div
              key={index}
              className={`carousel-indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>

        <div className="carousel-controls">
          {currentSlide === carouselData.length - 1 ? (
            <Link to="/getting-started" style={{ textDecoration: "none" }}>
              <button className='primary-button-medium button-text-white'>
                Continue
              </button>
            </Link>
          ) : (
            <button className='primary-button-medium button-text' onClick={nextSlide}>Next</button>
          )}
        </div>

        <div >
          <span className='body1'> Existing user?</span>
          <Link to="/login-faceid" style={{ textDecoration: "none" }}>
            <button className='text-button-small button-text-primary space8'>
              Log in
            </button>
          </Link>
        </div>

      </div>


    </div>
  );
};

export default IntroCarousel;