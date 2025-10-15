import Navbar from "./component/navbar/Navbar";
import Slider from "./component/slider/Slider";
import HeroThree from "./component/Hero-Three/HeroThree";
import HeroTwo from "./component/Hero-Two/HeroTwo";
import HeroFour from "./component/Hero-Four/HeroFour";
import HeroFive from "./component/Hero-Five/HeroFive";
import HeroSix from "./component/Hero-Six/HeroSix";
import HeroSeven from "./component/hero-seven/HeroSeven";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Slider />
      <HeroTwo />
      <HeroThree />
      <HeroFour />
      <HeroFive />
      <HeroSix />
      <HeroSeven />
      <Footer />
    </div>
  );

}
export default App;