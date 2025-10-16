import React, { useEffect, useState } from 'react'
import './HeroFive.css'
// icons
import { FaArrowRight } from 'react-icons/fa'
// images
import img1 from '../../assets/hero-five-img1.png'
import img2 from '../../assets/hero-five-img2.png'
const HeroFive = () => {
    const slidesData = [
        {
            src: img1,
            category: 'Videos',
            title: 'Srikara Rao on using AI to transform product engineering',
            para: 'Watch The Converge360 "Elevator Pitch" video, featuring Srikara Rao, Chief Technology Officer Cloud and Cyber Security Services at R Systems.',
            buttonText: 'Watch Full Video'
        },
        {
            src: img2,
            category: 'Articles',
            title: 'Digital Transformation in the Modern Era',
            para: 'Explore how new technologies are reshaping industries and what it means for the future of business.',
            buttonText: 'Watch Full Video'
        },
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slidesData.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [slidesData.length]);
    return (
        <div className='hero-five-wrapper'>
            <div className='hero-five-slider' style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {slidesData.map((slide, index) => (
                    <div key={index} className="hero-five-slide">
                        <div className="hero-five-box1">
                            <img src={slide.src} alt={`Slide ${index + 1}`} />
                        </div>
                        <div className="hero-five-box2">
                            <p>{slide.category}</p>
                            <h1>{slide.title}</h1>
                            <p>{slide.para}</p>
                            <button>
                                {slide.buttonText} <FaArrowRight />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="carousel-dots">
                {slidesData.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${currentIndex === index ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    ></span>
                ))}
            </div>
        </div>
    )
}
export default HeroFive