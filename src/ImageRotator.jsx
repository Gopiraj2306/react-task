import React, { useEffect, useState } from 'react';
import './image_stack.css';



const images = ['/assests/pic1.jpg',
   '/assests/pic2.jpg',
    '/assests/pic3.jpg', 
    '/assests/pic4.jpg',
    '/assests/pic5.jpg',
    '/assests/gif1.gif',
    '/assests/gif2.gif'];

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
