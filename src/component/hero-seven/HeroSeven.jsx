import React from 'react'
import './HeroSeven.css'
import { FaArrowRight } from 'react-icons/fa'
// our partners logo
import logo1 from '../../assets/hero-seven-img1.jpg'
import logo2 from '../../assets/hero-seven-img2.jpg'
import logo3 from '../../assets/hero-seven-img3.jpg'
import logo4 from '../../assets/hero-seven-img4.jpg'
import certificate from '../../assets/hero-seven-box3-img.png'
const HeroSeven = () => {
    return (
        <>
            <div className="hero-seven">
                <div className="hero-seven-box1">
                    <h2>Our Partners</h2>
                    <div className="hero-seven-box1-img">
                        <img src={logo1} alt="" />
                        <img src={logo2} alt="" />
                        <img src={logo3} alt="" />
                        <img src={logo4} alt="" />
                    </div>
                </div>
                <div className="hero-seven-box2">
                    <div className='hero-seven-box2-background'></div>
                    <div className='hero-seven-box2-content-wrapper'>
                        <div className='hero-seven-box2-text'>
                            <h5>Schedule a personalised 1:1</h5>
                            <p>Talk to an expert about your organization’s unique needs</p>
                        </div>
                        <div className="hero-seven-box2-btn">
                            <button>Talk to an expert <FaArrowRight style={{ paddingLeft: '2px' }} /> </button>
                        </div>
                    </div>
                </div>
                <div className="hero-seven-box3">
                    <div className="hero-seven-box3-text">
                        <h6>#GPTWCertified</h6>
                        <h2>R Systems is ‘Great Place To Work’® Certified™</h2>
                        <p>We are Great Place To Work® Certified™ in 6 countries with a full-time workforce - India, the US, Canada, Romania, Poland, and Moldova - each country individually acknowledging R Systems as a preferred employer.</p>
                        <button>Learn More <FaArrowRight style={{ paddingLeft: '2px' }} /> </button>
                    </div>
                    <div className="hero-seven-box3-img">
                        <img src={certificate} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default HeroSeven