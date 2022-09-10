import heroGridImage from "/assets/heroGrid-image.png";
import "./Hero.scss";

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-image">
        <img src={heroGridImage} alt="hero-image" />
      </div>

      <div className="hero-content">
        <h1>Online Experiences</h1>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </section>
  );
}

export default Hero;
