
import React,  { useEffect, useState } from 'react';
import ImageStackBox from './ImageStackBox';
import './image_stack.css';

const center = [
  './assests/img1.jpg',
];
const edTech = [
  './assests/img2.jpg', 
]
const bfsi = [
  './assests/img8.jpg'
]
const healthCare = [
  './assests/img5.jpg'
]
const manufacturing = [
  './assests/img4.jpg'
]
const retail = [
  './assests/img9.jpg'
]
const construction = [
  './assests/img6.jpg'
]
const tourism= [
  './assests/img7.jpg'
]

const autoMotive = [
  './assests/img3.jpg'
]

const ImageStackLayout = () => {
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
    <div className="rotation-scene">
      <div className={`layout-container  ${animateOnce ? 'animate-once' : ''}`}>
        <div className="box healthcare">
          <ImageStackBox images={healthCare} title="Healthcare" />
        </div>
        <div className="box edtech">
          <ImageStackBox images={edTech} title="EdTech" />
        </div>
        <div className="box bfsi">
          <ImageStackBox images={bfsi} title="BFSI" />
        </div>
        <div className="box video">
          <ImageStackBox images={center} title="Main-content" />
        </div>
        <div className="box manufacturing">
          <ImageStackBox images={manufacturing} title="Manufacturing" />
        </div>
        <div className="box retail">
          <ImageStackBox images={retail} title="Retail" />
        </div>
        <div className="box construction">
          <ImageStackBox images={construction} title="Construction" />
        </div>
        <div className="box tourism">
          <ImageStackBox images={tourism} title="Tourism" />
        </div>
        <div className="box automotive">
          <ImageStackBox images={autoMotive} title="Automotive" />
        </div>
      </div>
    </div>
  );
};

export default ImageStackLayout;















