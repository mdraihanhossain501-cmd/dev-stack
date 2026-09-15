const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <h2>
              <span>Dev</span> Stack
            </h2>

            <p>
              Explore modern development technologies and build
              your own personalized technology stack.
            </p>
          </div>

          <div className="footer-column">
            <h3>Product</h3>
            <a href="#technologies">Technologies</a>
            <a href="#technologies">Projects</a>
            <a href="#technologies">Your Stack</a>
          </div>

          <div className="footer-column">
            <h3>Company</h3>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-column">
            <h3>Legal</h3>
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © 2026 Dev Stack. All rights reserved.
          </span>

          <div className="footer-legal">
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;