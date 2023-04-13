import React, { useState } from 'react';
import './Slider.css';

const images = [
    './image/inside1.jpg',
    './image/inside2.jpg',
    './image/inside3.jpg',
    './image/outside4.jpg',
    './image/outside5.jpg'
];

const Slider = () => {
    const [index, setIndex] = useState(0);

    const nextSlide = () => {
        setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    return (
        <div className="slider-container">
            <div className="slider-arrow slider-arrow-left" onClick={prevSlide}>
                &lt;&lt; Prev
            </div>
            <div className="slider-image-container">
                <img className="slider-image" src={images[index]} alt={`Slide ${index + 1}`} />
            </div>
            <div className="slider-arrow slider-arrow-right" onClick={nextSlide}>
                Next &gt;&gt;
            </div>
        </div>
    );
};

export default Slider;
