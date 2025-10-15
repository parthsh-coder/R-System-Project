import { useEffect, useState } from "react";
import Pic1 from "../../assets/pic1.jpg";
import Pic2 from "../../assets/pic2.jpg";
import Pic3 from "../../assets/pic3.jpg";
import "./SlideShow.css";
function SlideShow() {
    const images = [Pic1,Pic2,Pic3];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);
    return (
        <div className="Slider1-Container">
            <div className="Slides1" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((img, index) => (
                    <div key={index} className="Slide1">
                        <img src={img} alt={`Slide1 ${index + 1}`}></img>
                    </div>
                ))}
            </div>
            <div className="dots1">
                {images.map((_, index) => (
                    <span key={index} className={`dot1 ${currentIndex === index ? "active" : ''}`} onClick={() => setCurrentIndex(index)}></span>
                ))}

            </div>
        </div>
    );
}
export default SlideShow;