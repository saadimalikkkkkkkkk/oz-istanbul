import { Link, NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import logo from "../assets/hero.jpg";
import "./Navbar.css";
import navbarCenter from "../assets/navbar-center.jpg";

function ArrowIcon({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M4 20L20 4" />
      <path d="M10 4H20V14" />
    </svg>
  );
}

function Navbar() {
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const lastScrollY = useRef(0);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 20) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        setVisible(false);
        setMenuOpen(false);
      } else if (currentScrollY < lastScrollY.current) {
        setVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={`navbar ${
        visible ? "navbar-visible" : "navbar-hidden"
      }`}
    >
      <div className="navbar-container">

        {/* LOGO */}
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Öz Istanbul" />
        </Link>

{/* CENTER IMAGE */}
<div className="navbar-center-image">
  <img src={navbarCenter} alt="" />
</div>
        {/* MENU */}
        <div className="navbar-menu" ref={menuRef}>

<button
  type="button"
  className={`navbar-menu-button ${menuOpen ? "open" : ""}`}
  onClick={() => setMenuOpen(!menuOpen)}
  aria-expanded={menuOpen}
  aria-label="Open navigation menu"
>
  <span className="hamburger-line"></span>
  <span className="hamburger-line"></span>
  <span className="hamburger-line"></span>
</button>

          {/* DROPDOWN */}

          {menuOpen && (
            <div className="navbar-dropdown">

              {/* HOME */}

              <NavLink
                to="/"
                end
                onClick={closeMenu}
              >
                <span className="menu-number">01</span>

                <strong>Home</strong>

                <ArrowIcon className="menu-arrow" />
              </NavLink>


              {/* ABOUT */}

              <NavLink
                to="/about"
                onClick={closeMenu}
              >
                <span className="menu-number">02</span>

                <strong>About</strong>

                <ArrowIcon className="menu-arrow" />
              </NavLink>


              {/* SERVICES */}

              <NavLink
                to="/services"
                onClick={closeMenu}
              >
                <span className="menu-number">03</span>

                <strong>Services</strong>

                <ArrowIcon className="menu-arrow" />
              </NavLink>


              {/* CONTACT */}

              <NavLink
                to="/contact"
                onClick={closeMenu}
              >
                <span className="menu-number">04</span>

                <strong>Contact</strong>

                <ArrowIcon className="menu-arrow" />
              </NavLink>


              {/* LET'S TALK */}

              <Link
                to="/contact"
                className="navbar-menu-talk"
                onClick={closeMenu}
              >
                <strong>Let's Talk</strong>

                <ArrowIcon className="menu-arrow" />
              </Link>

            </div>
          )}

        </div>

      </div>
    </header>
  );
}

export default Navbar;