import amazonLogo from "../images/amazon.png";
import flipkartLogo from "../images/flipkart.png";
import heroImage from "../images/hero-image.png";

const HeroSection = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.
          YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.
        </p>

        <div className="hero-btn">
          <button>Shop Now</button>
          <button className="secondary-btn">Category</button>
        </div>

        <div className="shopping">
          <p>Also Available On</p>
          <div className="brand-icons">
            <img src={amazonLogo} alt="amazon-logo" />
            <img src={flipkartLogo} alt="flipkart-logo" />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="hero-image" />
      </div>
    </main>
  );
};
export default HeroSection;
