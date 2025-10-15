import Photo from "../../assets/photo2.jpg";
import Photo2 from "../../assets/Photo.jpg";
import Photo3 from "../../assets/Photo3.jpg";
import Card from "./Card";
import "./HeroThree.css";
function HeroThree() {
    return (
        <div className="HeroThree">
            <div className="content">
                <h3>What We Do</h3>
                <h1>Purposeful</h1>
                <h1 style={{ marginBottom: "15px" }}>Digital Engineering</h1>
                <p>Our approach is rooted in a deep understanding of today’s challenges,</p>
                <p>enabling our clients to innovate for growth, engineer efficient solutions</p>
                <p>with precision, and evolve strategies to help our clients stay ahead of the</p>
                <p>curve</p>
            </div>
            <div className="card1">
                <Card image={Photo} head={"Engineer"} data1={"Achieve peak performance and optimize operational"} data2={"efficiency through meticulous digital engineering."} />
            </div>
            <div className="card2">
                <Card image={Photo2} head={"Innovate"} data1={"Unleash cutting-edge creativity to pioneer market-leading"} data2={"solutions."} />
                <div className="inner">
                    <Card image={Photo3} head={"Evolve"} data1={"Change in the right direction to stay ahead in a dynamic"} data2={"digital world."} />
                </div>
            </div>
        </div>
    );
}
export default HeroThree;