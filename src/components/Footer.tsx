import logoText from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <img src={logoText} alt="Dev Stack" />

            <p>
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            <div className="footer-social">
              <a href="#" aria-label="GitHub">
                GitHub
              </a>

              <a href="#" aria-label="Twitter">
                Twitter
              </a>

              <a href="#" aria-label="LinkedIn">
                LinkedIn
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h3>PRODUCT</h3>

            <a href="#home">Home</a>
            <a href="#technologies">Technologies</a>
            <a href="#projects">Projects</a>
          </div>

          <div className="footer-column">
            <h3>COMPANY</h3>

            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <a href="#careers">Careers</a>
          </div>

          <div className="footer-column">
            <h3>LEGAL</h3>

            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Dev Stack. All rights reserved.</span>

          <div>
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;