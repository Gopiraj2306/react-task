import React, { useEffect, useState } from 'react';
import './image_stack.css';

const ImageStackBox = ({ images, title }) => {
  const [animateOnce, setAnimateOnce] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => setAnimateOnce(true), 100);
    const stopTimeout = setTimeout(() => setAnimateOnce(false), 3100);
    return () => {
      clearTimeout(startTimeout);
      clearTimeout(stopTimeout);
    };
  }, []);

  return (
    <div className="carousel-wrapper">
      <div className={`carousel-3d ${animateOnce ? 'animate-once' : ''}`}>
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`${title}-img-${index}`}
            style={{ '--i': index }}
            className="carousel-image"
          />
        ))}
      </div>
      <div className="carousel-title">{title}</div>
    </div>
  );
};

export default ImageStackBox;


