import { useEffect, useState } from "react";
import Image1 from "../../assets/image1.jpg";
import Image2 from "../../assets/image2.jpg";
import Image3 from "../../assets/image3.jpg";
import Image4 from "../../assets/image4.jpg";
import Image5 from "../../assets/image5.jpg";
import Image6 from "../../assets/image6.jpg";
import "./Slider.css";

function Slider() {
    const images = [Image1, Image2, Image3, Image4, Image5, Image6];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);
    return (
        <div className="Slider-Container">
            <div className="Slides" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((img, index) => (
                    <div key={index} className="Slide">
                        <img src={img} alt={`Slide ${index + 1}`}></img>
                    </div>
                ))}
            </div>
            <div className="dots">
                {images.map((_, index) => (
                    <span key={index} className={`dot ${currentIndex === index ? "active" : ''}`} onClick={() => setCurrentIndex(index)}></span>
                ))}

            </div>
        </div>
    );
}
export default Slider;