import "./Home.css";
import ArrowIcon from "../components/ArrowIcon";
import heroBackground from "../assets/hero-background.jpg";

function Home() {
  return (
    <main className="home">

      {/* HERO */}
      <section
        className="hero"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="hero-content">

          <div className="hero-meta">
            <span>01</span>
            <span>ÖZ ISTANBUL</span>
            <span>WORLD BUSINESS POINT</span>
          </div>

          <h1>
            Building
            <br />
            Opportunities.
            <br />
            <span>Connecting Markets.</span>
          </h1>

          <p className="hero-description">
            An international business group creating opportunities
            across investment, real estate, construction, education,
            tourism, and global trade.
          </p>

          <div className="hero-actions">
            <a href="#businesses" className="hero-primary">
              <span>Explore Our Businesses</span>
              <ArrowIcon className="arrow-icon" />
            </a>

            <a href="/contact" className="hero-secondary">
              Contact Us
            </a>
          </div>

        </div>

        <div className="hero-scroll">
          <span>SCROLL TO EXPLORE</span>
          <div className="scroll-line"></div>
        </div>

        <div className="hero-index">
          <strong>01</strong>
          <span>/</span>
          <span>04</span>
        </div>
      </section>


      {/* ABOUT */}
      <section className="about-intro">

        <div className="about-intro-container">

          <div className="about-intro-label">
            <span>02</span>
            <p>ABOUT ÖZ ISTANBUL</p>
          </div>

          <div className="about-intro-content">

            <h2>
              Building businesses.
              <br />
              Creating opportunities.
            </h2>

            <p>
              Öz Istanbul is an international business group
              connecting markets, businesses, and opportunities
              across multiple industries.
            </p>

            <p>
              From investment and real estate to construction,
              education, tourism, and international trade, we
              create solutions designed to move businesses forward.
            </p>

            <a href="/about" className="about-intro-link">
              <span>Discover Öz Istanbul</span>
              <ArrowIcon className="arrow-icon" />
            </a>

          </div>

        </div>

      </section>


      {/* BUSINESSES */}
      <section className="businesses" id="businesses">

        <div className="businesses-container">

          <div className="businesses-header">

            <div className="businesses-label">
              <span>03</span>
              <p>OUR BUSINESSES</p>
            </div>

            <div className="businesses-heading">

              <h2>
                Multiple sectors.
                <br />
                One global vision.
              </h2>

              <p>
                Our diverse business interests connect expertise,
                investment, and opportunity across international markets.
              </p>

            </div>

          </div>


          <div className="business-grid">

            <a href="/services" className="business-card">
              <span className="business-number">01</span>

              <div className="business-card-content">
                <h3>Investment</h3>
                <p>
                  Strategic opportunities designed to create
                  long-term value.
                </p>
              </div>

              <ArrowIcon className="business-arrow arrow-icon" />
            </a>


            <a href="/services" className="business-card">
              <span className="business-number">02</span>

              <div className="business-card-content">
                <h3>Real Estate</h3>
                <p>
                  Property and development opportunities
                  across growing markets.
                </p>
              </div>

              <ArrowIcon className="business-arrow arrow-icon" />
            </a>


            <a href="/services" className="business-card">
              <span className="business-number">03</span>

              <div className="business-card-content">
                <h3>Construction</h3>
                <p>
                  Building projects that connect vision
                  with real-world results.
                </p>
              </div>

              <ArrowIcon className="business-arrow arrow-icon" />
            </a>


            <a href="/services" className="business-card">
              <span className="business-number">04</span>

              <div className="business-card-content">
                <h3>Education</h3>
                <p>
                  Creating access to knowledge, skills,
                  and international opportunities.
                </p>
              </div>

              <ArrowIcon className="business-arrow arrow-icon" />
            </a>


            <a href="/services" className="business-card">
              <span className="business-number">05</span>

              <div className="business-card-content">
                <h3>Tourism</h3>
                <p>
                  Connecting people and destinations
                  through international experiences.
                </p>
              </div>

              <ArrowIcon className="business-arrow arrow-icon" />
            </a>


            <a href="/services" className="business-card">
              <span className="business-number">06</span>

              <div className="business-card-content">
                <h3>International Trade</h3>
                <p>
                  Connecting businesses and markets
                  across borders.
                </p>
              </div>

              <ArrowIcon className="business-arrow arrow-icon" />
            </a>

          </div>

        </div>

      </section>


      {/* GLOBAL PRESENCE */}
      <section className="global-section">

        <div className="global-container">

          <div className="global-label">
            <span>04</span>
            <p>GLOBAL PRESENCE</p>
          </div>

          <div className="global-content">

            <h2>
              Where business
              <br />
              meets opportunity.
            </h2>

            <div className="global-bottom">

              <p>
                Connecting people, businesses, and markets through
                an international perspective and a commitment to
                creating meaningful opportunities.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* FINAL CTA */}
      <section className="final-cta">

        <div className="final-cta-container">

          <div className="final-cta-label">
            <span>05</span>
            <p>LET'S CONNECT</p>
          </div>

          <div className="final-cta-content">

            <h2>
              Let's build
              <br />
              something together.
            </h2>

            <p>
              Whether you're looking to invest, expand, build,
              or explore new opportunities, let's start a conversation.
            </p>

            <a href="/contact" className="final-cta-button">
              <span>Start a Conversation</span>
              <ArrowIcon className="arrow-icon" />
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Home;