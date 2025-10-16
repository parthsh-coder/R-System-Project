import React, { useEffect, useState } from 'react'
import './Navbar.css'

// images
import logo from '../../assets/company-logo.svg'
import logoScroll from '../../assets/company-scroll-logo.png'

// icons
import { CiLocationOn } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
    // State for detecting scroll and applying sticky/scroll styles
    const [sticky, setSticky] = useState(false);
    // State for controlling the mobile menu open/close
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        };

        window.addEventListener('scroll', handleScroll);
        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    // Function to toggle the mobile menu state
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Determine the class names for the main navbar element
    const navbarClassName = sticky 
        ? `navbar-scroll ${isOpen ? 'nav-open' : ''}` 
        : `navbar ${isOpen ? 'nav-open' : ''}`;


    return (
        // Use a single navbar structure and change classes based on state
        <div className={navbarClassName}>
            <div className="navbar-img">
                <img 
                    src={sticky ? logoScroll : logo} 
                    alt="Company Logo" 
                    style={{ cursor: 'pointer' }} 
                />
            </div>
            
            <div className="navbar-lists">
                {sticky ? (
                    // Content for the sticky/scroll state
                    <>
                        <div className="navbar-list-1-scroll">
                            <ul>
                                <li>Investors</li>
                                <li><CiLocationOn /> &nbsp; Global</li>
                                <li><FaSearch /></li>
                            </ul>
                        </div>
                        <div className="navbar-list-2-scroll">
                            <ul>
                                <li>OptimaAI Suite</li>
                                <li>What We Do</li>
                                <li>Who We Serve</li>
                                <li>Who We Are</li>
                                <li>Our Insights</li>
                                <li>Our Partners</li>
                                <li>Join Us</li>
                                <li>Get In Touch</li>
                            </ul>
                        </div>
                    </>
                ) : (
                    // Content for the default state
                    <>
                        <div className="navbar-list-1">
                            <ul>
                                <li>Investors</li>
                                <li><CiLocationOn /> &nbsp; Global</li>
                                <li><FaSearch /></li>
                            </ul>
                        </div>
                        <div className="navbar-list-2">
                            <ul>
                                <li>OptimaAI Suite</li>
                                <li>What We Do</li>
                                <li>Who We Serve</li>
                                <li>Who We Are</li>
                                <li>Our Insights</li>
                                <li>Our Partners</li>
                                <li>Join Us</li>
                                <li>Get In Touch</li>
                            </ul>
                        </div>
                    </>
                )}
            </div>

            {/* Hamburger Menu - Added onClick handler */}
            <div className="hamburger-menu" onClick={toggleMenu}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </div>
    )
}

export default Navbar