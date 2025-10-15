import "./HeroTwo.css";
import Slider from "./Slider";
function HeroTwo() {
    return (
        <div className="HeroTwo">
            <div className="one">
                <h3>Who We Serve</h3>
                <h1>Industry Verticals</h1>
                <ul>
                    <li>Tech & Independent Software Vendors</li>
                    <li>Healthcare</li>
                    <li>Manufacturing , Logistics and Automotive</li>
                    <li>Telecom , Media & Entertainment</li>
                    <li>Banking and Financial Services</li>
                    <li>Services</li>
                    <li>Public Services</li>
                </ul>
            </div>

            <div className="two">
                <p>Our product mindset and engineering capabilities in Cloud, Data, AI and CX enable us to serve key</p>
                <p>players in the high-tech industry, including ISVs, SaaS and Internet companies, as well as product</p>
                <p>companies in telecom, media, finance, manufacturing, and health verticals.</p>
                <Slider />
            </div>
        </div>
    );
}
export default HeroTwo;