import React, { useState } from 'react';
import './ImageSlider.css';

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="iimage">
      <img src={images[currentIndex]} alt="slider" /> <br/>

      <button onClick={prevImage}>Previous</button>
      <button onClick={nextImage}>Next</button>
    
    </div>
  );
};

export default ImageSlider;