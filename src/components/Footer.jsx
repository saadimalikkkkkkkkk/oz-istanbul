import { Link } from "react-router-dom";
import logo from "../assets/hero.jpg";
import ArrowIcon from "./ArrowIcon";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-main">

        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <img src={logo} alt="Öz Istanbul" />
          </Link>

          <p>
            Global business opportunities,
            connections, and solutions from Istanbul.
          </p>
        </div>

        <div className="footer-column">
          <span className="footer-label">NAVIGATION</span>

          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-column">
          <span className="footer-label">CONTACT</span>

          <a href="mailto:info@ozistanbul.com">
            info@ozistanbul.com
          </a>

          <a href="tel:+905467270777">
            +90 546 727 07 77
          </a>

          <span>
            Istanbul, Türkiye
          </span>
        </div>

        <div className="footer-column">
  <span className="footer-label">SOCIAL</span>

  <a
    href="https://www.instagram.com/ozistanbulturkiye/?hl=en"
    target="_blank"
    rel="noreferrer"
  >
    Instagram
  </a>

  <a
    href="https://www.facebook.com/OzIstanbulWorldBusinessPoint/"
    target="_blank"
    rel="noreferrer"
  >
    Facebook
  </a>

  <a
    href="https://www.linkedin.com/company/ozistanbul"
    target="_blank"
    rel="noreferrer"
  >
    LinkedIn
  </a>

  <a
    href="https://wa.me/905467270777"
    target="_blank"
    rel="noreferrer"
  >
    WhatsApp
  </a>
</div>

      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} ÖZ ISTANBUL</span>
        <span>WORLD BUSINESS POINT</span>
        <span>ISTANBUL · TÜRKIYE</span>
      </div>

    </footer>
  );
}

export default Footer;