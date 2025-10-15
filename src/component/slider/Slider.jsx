import React, { useEffect, useState } from 'react'
import './Slider.css'
import { FaArrowRight } from "react-icons/fa";
// Slide Images
import slider1 from '../../assets/slider-img-1.jpg'
import slider2 from '../../assets/slider-img-2.jpg'
import slider3 from '../../assets/slider-img-3.jpg'
import slider4 from '../../assets/slider-img-4.jpg'
import slider5 from '../../assets/slider-img-5.jpg'
import slider6 from '../../assets/slider-img-6.jpg'
import slider7 from '../../assets/slider-img-7.jpg'
import slider8 from '../../assets/slider-img-8.jpg'
const Slider = () => {
    // const images = [slider1, slider2, slider3, slider4, slider5, slider6, slider7, slider8];
    const imagesData = [
        { src: slider1, title: 'We are a Leader!', para:'R Systems Recognized as a Leader in Everest Group Software Product Engineering Services for Mid-market Enterprises PEAK Matrix Assessment 2025'},
        { src: slider2, title: 'Turn Salesforce into an AI Engine for Growth Join R Systems at Dreamforce 2025', para:'Turn Salesforce into an AI Engine for Growth'},
        { src: slider3, title: 'R Systems Acquires Novigo Solutions', para:'R Systems strengthens its Product Engineering and Full-Stack Agentic-AI capabilities with this strategic acquisition'},
        { src: slider4, title: 'Revolutionize EV Batteries with Next-gen Precision', para:'Unlock speed, scale, and compliance with R Systems & SyncoraDMP'},
        { src: slider5, title: 'Unlock speed, scale, and compliance with R Systems & SyncoraDMP', para:'Unlock speed, scale, and compliance with R Systems & SyncoraDMP'},
        { src: slider6, title: 'Powering Healthcare with Digital Excellence', para:'R Systems Recognized as a Major Contender in the Everest Group Healthcare Provider Digital Services PEAK Matrix® Assessment 2024!'},
        { src: slider7, title: 'R Systems Wins Strategic Supplier of the Year Award!', para:'Celebrating our partnership with Chamberlain Group in driving engineering excellence'},
        { src: slider8, title: 'OptimaAI by R Systems', para:'OptimaAI by R Systems'}
    ]
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesData.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);
    return (
        <div className="carousel-container">
            <div className="carousel-slider" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {imagesData.map((slide, index) => (
                    <div key={index} className="carousel-slide">
                        <img src={slide.src} alt={`Slide ${index + 1}`} />
                        <div className="slider-content">
                            <h1>{slide.title}</h1>
                            <p>{slide.para}</p>
                            <button>Read More <FaArrowRight style={{marginTop: '1%', marginLeft: '2%'}} /></button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="carousel-dots">
                {imagesData.map((_, index) => (
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
export default Slider