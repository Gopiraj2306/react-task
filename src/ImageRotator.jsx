import React, { useEffect, useState } from 'react';
import './image_stack.css';



const images = ['/assests/img1.jpg',
   '/assests/img2.jpg',
    '/assests/img3.jpg', 
    '/assests/img4.jpg',
    '/assests/img5.jpg',
    '/assests/img6.jpg',
    '/assests/img7.jpg',
  '/assests/img8.jpg'];

const ImageStack = () => {
  const [startRotation, setStartRotation] = useState(false);
  const [fanOut, setFanOut] = useState(false);

  useEffect(() => {
    // Fan out first
    setFanOut(true);
    const timeout = setTimeout(() => {
      setStartRotation(true);
    }, 1000); // 1 second delay before rotation

    // Reset after rotation
    const resetTimeout = setTimeout(() => {
      setStartRotation(false);
      setFanOut(false);
    }, 5000); // Total duration of fan + rotation

    return () => {
      clearTimeout(timeout);
      clearTimeout(resetTimeout);
    };
  }, []);

  return (
    <div className="stack-scene">
      <div className={`image-group ${startRotation ? 'rotate' : ''}`}>
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            className={`stack-image ${fanOut && i !== 0 ? `fan-${i}` : ''}`}
            style={{
              zIndex: images.length - i,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageStack;
