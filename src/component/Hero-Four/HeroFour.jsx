import downImage1 from "../../assets/downImage1.jpg";
import downImage2 from "../../assets/downImage2.jpg";
import downImage3 from "../../assets/downImage3.jpg";
import "./HeroFour.css";
import SlideShow from "./SlideShow";
function HeroFour() {
    return (
        <div className="HeroFour">
            <div className="first">
                <h3>Resources</h3>
                <h1>Featured Insights</h1>

                <br></br>
                <div className="boxContent">
                    <ul>
                        <li>Enhanced UI</li>
                        <p>Incresed efficiency by improving workflow</p>
                        <li>Improved Data Accuracy</li>
                        <p>Imporved accuracy, efficiency & quality of data capture</p>
                        <li>Bespoke Consultant View</li>
                        <p>Easy Access to patient & appointment information on the move</p>
                    </ul>
                </div>
            </div>
            <div className="second">
                <p>Explore a world of knowledge with R Systems Insights, where each case study, whitepaper, blog post,</p>
                <p>and article underlines the application of cutting-edge technology and industry-specific innovations.</p>
                <SlideShow />
            </div>
            <div className="separation"></div>
            <div className="Pictures">
                <img id="pic1" src={downImage1}></img>
                <img id="pic2" src={downImage2}></img>
                <img id="pic3" src={downImage3}></img>
            </div>
            <div className="lines">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </div>
    );
}
export default HeroFour;