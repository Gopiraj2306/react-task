
import React, { useEffect, useState } from 'react';
import './image_stack.css';


const images = [
  '/assests/img1.jpg',
  '/assests/img2.jpg',
  '/assests/img3.jpg',
  '/assests/img4.jpg',
  '/assests/img5.jpg',
  '/assests/img6.jpg',
  '/assests/img7.jpg',
  '/assests/img8.jpg',
];

const ImageStack = () => {
  const [animateOnce, setAnimateOnce] = useState(false);

  useEffect(() => {
    // Delay to allow initial render with stacked images
    const startTimeout = setTimeout(() => {
      setAnimateOnce(true);
    }, 100); // 100ms ensures clean transition

    // Reset after animation completes
    const stopTimeout = setTimeout(() => {
      setAnimateOnce(false);
    }, 3100); // slightly more than 3s

    return () => {
      clearTimeout(startTimeout);
      clearTimeout(stopTimeout);
    };
  }, []);

  return (
    <div className="stack-scene">
      <div className={`image-group ${animateOnce ? 'animate-once' : ''}`}>
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            className="stack-image"
            alt={`img-${i}`}
            style={{ zIndex: images.length - i }}
          />
        ))}
      </div>
    </div>
  );
};











export default ImageStack;



