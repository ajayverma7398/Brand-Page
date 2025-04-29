import amazonLogo from "../images/amazon.png";
import flipkartLogo from "../images/flipkart.png";
import heroImage from "../images/hero-image.png";

const HeroSection = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          "Your feet deserve comfort, style, and support — and we’re here to
          deliver with our premium shoes. Your feet deserve nothing but the
          best, and we’ve got just what they need!"
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
