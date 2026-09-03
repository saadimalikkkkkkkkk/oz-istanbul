import "./Contact.css";
import ArrowIcon from "../components/ArrowIcon";
import contactBackground from "../assets/contact-background.png";

function Contact() {
  return (
    <main className="contact-page">

      {/* ========================================
          CONTACT HERO
      ======================================== */}

      <section
        className="contact-hero"
        style={{ backgroundImage: `url(${contactBackground})` }}
      >
        <div className="contact-hero-content">

          <h1>
            Let's start
            <br />
            <span>a conversation.</span>
          </h1>

          <p>
            Whether you're looking to invest, expand,
            build, study, or enter a new market,
            we're here to connect.
          </p>

        </div>
      </section>


      {/* ========================================
          CONTACT INFORMATION
      ======================================== */}

      <section className="contact-information">

        <div className="contact-information-content">

          {/* EMAIL */}
          <div className="contact-info-item">
            <span>EMAIL</span>

            <a href="mailto:info@ozistanbul.com">
              info@ozistanbul.com
            </a>
          </div>


          {/* PHONE */}
          <div className="contact-info-item">
            <span>PHONE</span>

            <a href="tel:+905467270777">
              +90 546 727 07 77
            </a>
          </div>


          {/* WHATSAPP */}
          <div className="contact-info-item">
            <span>WHATSAPP</span>

            <a
              href="https://wa.me/905467270777"
              target="_blank"
              rel="noreferrer"
            >
              <span>+90 546 727 07 77</span>
              <ArrowIcon className="contact-external arrow-icon" />
            </a>
          </div>


          {/* LINKEDIN */}
          <div className="contact-info-item">
            <span>LINKEDIN</span>

            <a
              href="https://www.linkedin.com/company/ozistanbul"
              target="_blank"
              rel="noreferrer"
            >
              <span>Öz Istanbul Group</span>
              <ArrowIcon className="contact-external arrow-icon" />
            </a>
          </div>


          {/* LOCATION */}
          <div className="contact-info-item">
            <span>LOCATION</span>

            <p>
              Istanbul, Türkiye
            </p>
          </div>


          {/* HOURS */}
          <div className="contact-info-item">
            <span>HOURS</span>

            <p>
              Monday — Saturday
              <br />
              09:00 — 18:30
            </p>
          </div>

        </div>

      </section>


      {/* ========================================
          BUSINESS ENQUIRIES
      ======================================== */}

      <section className="contact-business">

        <div className="contact-business-content">

          <h2>
            Tell us what
            <br />
            <span>you're building.</span>
          </h2>

          <p>
            From investment and real estate to education,
            construction, tourism, and international trade,
            tell us what you're looking for and our team
            will help you explore the right opportunity.
          </p>

          <a href="/enquiry">
            <span>Send an Enquiry</span>
            <ArrowIcon className="arrow-icon" />
          </a>

        </div>

      </section>


      {/* ========================================
          SOCIAL / CONNECT
      ======================================== */}

      <section className="contact-connect">

        <div className="contact-connect-content">

          <h2>
            Stay
            <br />
            <span>connected.</span>
          </h2>

          <div className="contact-links">

            <a
              href="https://www.instagram.com/ozistanbulturkiye/?hl=en"
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-link-name">
                Instagram
              </span>

              <ArrowIcon className="contact-link-arrow arrow-icon" />
            </a>


            <a
              href="https://www.facebook.com/OzIstanbulWorldBusinessPoint/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-link-name">
                Facebook
              </span>

              <ArrowIcon className="contact-link-arrow arrow-icon" />
            </a>


            <a
              href="https://www.linkedin.com/company/ozistanbul"
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-link-name">
                LinkedIn
              </span>

              <ArrowIcon className="contact-link-arrow arrow-icon" />
            </a>


            <a
              href="https://wa.me/905467270777"
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-link-name">
                WhatsApp
              </span>

              <ArrowIcon className="contact-link-arrow arrow-icon" />
            </a>

          </div>

        </div>

      </section>


      {/* ========================================
          FINAL
      ======================================== */}

      <section className="contact-final">

        <p>
          ÖZ ISTANBUL — WORLD BUSINESS POINT
        </p>

        <span>
          ISTANBUL · TÜRKIYE
        </span>

      </section>

    </main>
  );
}

export default Contact;