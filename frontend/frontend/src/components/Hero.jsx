import foodItems from "../assets/foodItems(1).jpg";
import "../styles/hero.css";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => navigate("/products");

  return (
    <section className="hero">
      {/* Hero Image */}
      <div className="hero-image">
        <img src={foodItems} alt="Food essentials" />
      </div>

      {/* Hero Text Content */}
      <div className="hero-content">
        <h1>Wholesome & Everyday Food Essentials</h1>
        <h2>Make healthier choices every day with quality food staples you can trust.</h2>
        <p>
          It’s time to build a nourishing and balanced lifestyle by choosing from our wide range of rice, pasta, seasoning cubes, beverages like Milo, milk, and other everyday essentials — all available in different varieties, conveniently in one place, with free home delivery.
        </p>
        <button className="btn-primary" onClick={handleButtonClick}>
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
