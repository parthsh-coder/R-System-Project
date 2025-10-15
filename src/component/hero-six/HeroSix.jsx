import React from 'react'
import './HeroSix.css'
// card images
import cardImg1 from '../../assets/hero-six-card1.jpg'
import cardImg2 from '../../assets/hero-six-card2.jpg'
import cardImg3 from '../../assets/hero-six-card3.jpg'
const HeroSix = () => {
  return (
    <>
      <div className='hero-six'>
        <div className="hero-six-box1">
          <div className="hero-six-box1-textA">
            <h6>Our Approach</h6>
            <h2>More About R Systems</h2>
          </div>
          <div className="hero-six-box1-textB">
            <p>Discover the essence of R Systems. Learn more about our skilled and diverse global team, understand the distinct advantages we offer, and explore our global footprint. Read about our commitment to excellence, innovation, and responsible corporate citizenship.</p>
          </div>
        </div>
        <div className="hero-six-box2">
          <div className="hero-six-box2A">
            <div className="card-img1">
              <img src={cardImg1} alt="" />
            </div>
            <div className="card-tag1">
              <h6>OUR PEOPLE</h6>
            </div>
            <div className="card-text1">
              <h3>Join Our Diverse Team Of Tech Pioneers</h3>
            </div>
          </div>
          <div className="hero-six-box2B">
            <div className="card-img2">
              <img src={cardImg2} alt="" />
            </div>
            <div className="card-tag2">
              <h6>WHY R SYSTEMS</h6>
            </div>
            <div className="card-text2">
              <h3>Learn What Makes Us Different</h3>
            </div>
          </div>
          <div className="hero-six-box2C">
            <div className="card-img3">
              <img src={cardImg3} alt="" />
            </div>
            <div className="card-tag3">
              <h6>OUR LOCATION</h6>
            </div>
            <div className="card-text3">
              <h3>Explore Our Global Footprint</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default HeroSix