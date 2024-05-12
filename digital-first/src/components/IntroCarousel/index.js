import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import Intro1 from '../../assets/images/intro1.png'
import Intro2 from '../../assets/images/intro2.png'
import Intro3 from '../../assets/images/intro3.png'
import TextButtonSmall from '../Buttons/TextButtonSmall';


const IntroCarousel = ({brand, theme, lang="en"}) => {
  const carouselData = [
    {
      heading: "No hanging around, go digital",
      image: Intro1,
      text: "Why wait for a card to arrive? Apply and start using your new Digital Debit card right away."
    },
    {
      heading: "Take charge of your card",
      image: Intro2,
      text: "Control card access and settings straight from your smartphone, anywhere, anytime.",
    },
    {
      heading: "Zero fees",
      image: Intro3,
      text: "Seamless transactions, zero fees. Your money, your freedom.",
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
            <button className='text-button-small button-text-primary space8'>
              Skip
            </button>
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
              <button className='primary-button-medium button-text'>
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