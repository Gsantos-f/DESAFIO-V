import React, { useState, useEffect, useRef } from 'react';

const Carousel = ({ images = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideInterval = 3000;
  const totalSlides = images.length;
  const carouselRef = useRef(null);
  const artesanatoRef = useRef(null);
  const festasRef = useRef(null);
  const turismoRef = useRef(null);

  useEffect(() => {
    const autoSlideInterval = setInterval(() => {
      moveSlide(1);
    }, slideInterval);

    return () => clearInterval(autoSlideInterval);
  }, [currentIndex]);

  useEffect(() => {
    const offset = -currentIndex * 900; // Largura das imagens
    if (carouselRef.current) {
        carouselRef.current.style.transform = `translateX(${offset}px)`;
    }
    if (artesanatoRef.current) {
      artesanatoRef.current.style.transform = `translateX(${offset}px)`;
    }
    if (festasRef.current) {
      festasRef.current.style.transform = `translateX(${offset}px)`;
    }
    if (turismoRef.current) {
      turismoRef.current.style.transform = `translateX(${offset}px)`;
    }
  }, [currentIndex]);

  const showSlide = (index) => {
    if (index >= totalSlides) {
      setCurrentIndex(0);
    } else if (index < 0) {
      setCurrentIndex(totalSlides - 1);
    } else {
      setCurrentIndex(index);
    }
  };

  const moveSlide = (step) => {
    showSlide(currentIndex + step);
  };

  return (
    <div className="carousel">
      <div className="carousel-images" ref={carouselRef}>
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Slide ${index}`} />
        ))}
      </div>
      <button className="prev" onClick={() => moveSlide(-1)}>&#10094;</button>
      <button className="next" onClick={() => moveSlide(1)}>&#10095;</button>
    </div>
  );
};

export default Carousel;
