import "./Footer.css";
import logo from "../../assets/company-scroll-logo.png";
import MailLogo from "../../assets/mailLogo.jpg";
import Linkdin from "../../assets/linkdin.jpg";
import Twitter from "../../assets/twitter.jpg";
import Facebook from "../../assets/facebook.jpg";
import Instagram from "../../assets/instagram.jpg";
import Youtube from "../../assets/youtube.jpg";


// react icons
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


function Footer() {
    return (
        <div className="Footer-Container">
            <div className="foot1">
                <img src={logo}></img>
                <br></br><br></br>
                <div className="foot1-data1">
                    <p>R Systems is a global product engineering and digital</p>
                    <p>solutions provider. We combine complex engineering,</p>
                    <p>Data & AI, cloud-native capabilities with deep domain</p>
                    <p>understanding to design and build innovative products for</p>
                    <p>Tech, SaaS platforms and enterprises across industry</p>
                    <p>verticals. We leverage the power of Automation and</p>
                    <p>Agentic AI to transform value chains to boost productivity</p>
                    <p>and deliver differentiated customer experiences. With a</p>
                    <p>culture of co-creation and an extensive partner</p>
                    <p>ecosystem, we help customers navigate market shifts</p>
                    <p>and drive sustained strategic growth.</p>
                </div>
                <br></br>
                <div className="foot1-data2">
                    <img src={MailLogo}></img>
                    <p>marketing@rsystems.com</p>
                </div>
                <br></br>
                <div className="foot1-data3">
                    <FaLinkedinIn style={{width: '40px', height: '20px', color: '#425466'}} />
                    <FaXTwitter style={{width: '40px', height: '20px', color: '#425466'}} />
                    <FaFacebookF style={{width: '40px', height: '20px', color: '#425466'}} />
                    <FaInstagram  style={{width: '40px', height: '20px', color: '#425466'}}/>
                    <FaYoutube style={{width: '40px', height: '20px', color: '#425466'}} />

                </div>
                <br></br>
                <div className="foot1-data4">
                    <p>&copy; 2025 R Systems Inc.</p>
                </div>
            </div>
            <div className="foot2">
                <h3>What We Do</h3>
                <p>Digital Product Engineering</p>
                <p>Modernization Solutions</p>
                <p>Cloud and DevOps</p>
                <p>Data and AI</p>
                <p>Automation and Digital Ops</p>
                <p>Embedded Firmware</p>
                <p>Quality Engineering</p>
                <p>Mobile Experience Design</p>
                <p>Packaged Services – Integration</p>
                <p>Global Innovation Center</p>
            </div>
            <div className="foot3">
                <div className="foot3-data1">
                    <h3>Who We Serve</h3>
                    <p>Tech, Internet, and Platform</p>
                    <p>Healthcare</p>
                    <p>Manufacturing, Logistics and Automotive</p>
                    <p>Telecom, Media and Entertainment</p>
                    <p>Banking, Financial Services and Insurance</p>
                    <p>Services</p>
                    <p>Public Services</p>
                </div>
                <div className="foot3-data2">
                    <h3>Who We Are</h3>
                    <p>About Us</p>
                    <p>Corporate Social Responsibility</p>
                    <p>Awards and Achievements</p>
                    <p>Factsheet</p>
                    <p>Our Subsidiaries</p>
                    <p>Newsroom</p>
                </div>
            </div>
            <div className="foot4">
                <div className="foot4-data1">
                    <h3>Our Insights</h3>
                    <h3>Our Partners</h3>
                    <h3>Investors</h3>
                    <h3>Join Us</h3>
                </div>
                <div className="foot4-data2">
                    <h3>Policy</h3>
                    <p>Privacy Policy</p>
                    <p>Terms of Use</p>
                    <p>Safe Harbor Provision</p>
                </div>
            </div>
        </div>
    );
}
export default Footer;