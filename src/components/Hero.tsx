import bannerStack from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-tag">Build Your Perfect Stack</p>

          <h1>
            Discover the{" "}
            <span className="gradient-text">Technologies</span>
            <br />
            Behind Great Products
          </h1>

          <p className="hero-description">
            Explore modern technologies, compare their capabilities, and build
            your own personalized development stack.
          </p>

          <div className="hero-buttons">
            <a href="#technologies" className="primary-button">
              Explore Technologies
            </a>

            <a href="#about" className="secondary-button">
              Learn More
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img src={bannerStack} alt="Technology stack" />
        </div>
      </div>
    </section>
  );
};

export default Hero;