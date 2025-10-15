import React, { useEffect, useState } from 'react'
import './Navbar.css'

// images
import logo from '../../assets/company-logo.svg'
import logoScroll from '../../assets/company-scroll-logo.png'

// icons
import { CiLocationOn } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
const Navbar = () => {
    const [sticky, setSticky] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        })
    }, [])
    return (
        <>
            { sticky ?
                    <div className='navbar-scroll'>
                        <div className="navbar-img">
                            <img src={logoScroll} alt="" style={{cursor: 'pointer'}} />
                        </div>
                        <div className="navbar-lists">
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
                        </div>
                    </div>
                    :
                    <div className='navbar'>
                        <div className="navbar-img">
                            <img src={logo} alt="" style={{cursor: 'pointer'}} />
                        </div>
                        <div className="navbar-lists">
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
                        </div>
                    </div>
            }
        </>
    )
}
export default Navbar