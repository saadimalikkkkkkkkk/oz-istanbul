import { Link } from "react-router-dom";
import ArrowIcon from "../components/ArrowIcon";
import "./Services.css";
import servicesBackground from "../assets/services-background.png";

function Services() {
  return (
    <main className="services-page">

      {/* ========================================
          HERO
      ======================================== */}

      <section
        className="services-hero"
        style={{ backgroundImage: `url(${servicesBackground})` }}
      >
        <div className="services-hero-overlay"></div>

        <div className="services-hero-meta">
          <span>01</span>
          <span>OUR BUSINESSES</span>
        </div>

        <div className="services-hero-content">
          <h1>
            Businesses
            <br />
            <span>built for opportunity.</span>
          </h1>

          <p>
            From investment and real estate to education,
            tourism, construction, and international trade,
            Öz Istanbul operates across sectors connected
            by one global vision.
          </p>
        </div>
      </section>


      {/* ========================================
          BUSINESS SECTORS
      ======================================== */}

      <section className="services-list">

        <div className="services-section-label">
          <span>02</span>
          <p>OUR SECTORS</p>
        </div>

        <div className="services-content">

          {/* REAL ESTATE */}

          <Link
            to="/services/real-estate-investment"
            className="service-item"
          >
            <span className="service-number">01</span>

            <div className="service-main">
              <h2>Real Estate & Investment</h2>

              <p>
                Identifying property, investment, and development
                opportunities across established and emerging markets.
              </p>
            </div>

            <ArrowIcon className="service-arrow arrow-icon" />
          </Link>


          {/* CONSTRUCTION */}

          <Link
            to="/services/construction-development"
            className="service-item"
          >
            <span className="service-number">02</span>

            <div className="service-main">
              <h2>Construction & Development</h2>

              <p>
                Transforming land, concepts, and investment into
                structured development opportunities and real-world projects.
              </p>
            </div>

            <ArrowIcon className="service-arrow arrow-icon" />
          </Link>


          {/* EDUCATION */}

          <Link
            to="/services/education"
            className="service-item"
          >
            <span className="service-number">03</span>

            <div className="service-main">
              <h2>Education</h2>

              <p>
                Connecting students and professionals with education,
                language, and international study opportunities.
              </p>
            </div>

            <ArrowIcon className="service-arrow arrow-icon" />
          </Link>


          {/* TOURISM */}

          <Link
            to="/services/tourism-health"
            className="service-item"
          >
            <span className="service-number">04</span>

            <div className="service-main">
              <h2>Tourism & Health Tourism</h2>

              <p>
                Connecting international visitors with destinations,
                services, and opportunities across Türkiye and beyond.
              </p>
            </div>

            <ArrowIcon className="service-arrow arrow-icon" />
          </Link>


          {/* TRADING */}

          <Link
            to="/services/trading"
            className="service-item"
          >
            <span className="service-number">05</span>

            <div className="service-main">
              <h2>Trading & International Commerce</h2>

              <p>
                Creating commercial connections between businesses,
                suppliers, and international markets.
              </p>
            </div>

            <ArrowIcon className="service-arrow arrow-icon" />
          </Link>


          {/* BUSINESS & INVESTMENT */}

          <Link
            to="/services/business-investment"
            className="service-item"
          >
            <span className="service-number">06</span>

            <div className="service-main">
              <h2>Business & Investment</h2>

              <p>
                Developing partnerships, ventures, and strategic
                opportunities designed to create long-term value.
              </p>
            </div>

            <ArrowIcon className="service-arrow arrow-icon" />
          </Link>

        </div>

      </section>


      {/* ========================================
          CONSULTANCY
      ======================================== */}

      <section className="services-consultancy">

        <div className="services-section-label">
          <span>03</span>
          <p>CONSULTANCY</p>
        </div>

        <div className="consultancy-content">

          <h2>
            Beyond
            <br />
            <span>business.</span>
          </h2>

          <p>
            We also provide support for individuals, investors,
            entrepreneurs, and businesses looking to enter new
            markets or build opportunities internationally.
          </p>

          <div className="consultancy-grid">

            <div>
              <span>01</span>
              <h3>Citizenship & Residency</h3>
            </div>

            <div>
              <span>02</span>
              <h3>Study Abroad</h3>
            </div>

            <div>
              <span>03</span>
              <h3>Work Opportunities</h3>
            </div>

            <div>
              <span>04</span>
              <h3>Company Formation</h3>
            </div>

            <div>
              <span>05</span>
              <h3>Investment Consultancy</h3>
            </div>

            <div>
              <span>06</span>
              <h3>Translation & Documentation</h3>
            </div>

            <div>
              <span>07</span>
              <h3>Language Services</h3>
            </div>

          </div>

        </div>

      </section>


      {/* ========================================
          CTA
      ======================================== */}

      <section className="services-final">

        <div className="services-section-label">
          <span>04</span>
          <p>LET'S WORK TOGETHER</p>
        </div>

        <div className="services-final-content">

          <h2>
            Have an
            <br />
            <span>opportunity?</span>
          </h2>

          <p>
            Let's discuss how we can help turn your idea,
            investment, or business opportunity into reality.
          </p>

          <Link to="/contact">
            <span>Start a Conversation</span>
            <ArrowIcon className="arrow-icon" />
          </Link>

        </div>

      </section>

    </main>
  );
}

export default Services;