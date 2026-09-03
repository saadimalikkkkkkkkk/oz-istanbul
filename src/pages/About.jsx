import "./About.css";
import RegionMap from "./RegionMap";
import aboutBackground from "../assets/about-background.jpg";

function About() {
  return (
    <main className="about-page">

      {/* ========================================
          ABOUT HERO
      ======================================== */}

      <section
        className="about-hero"
        style={{ backgroundImage: `url(${aboutBackground})` }}
      >

        <div className="about-hero-meta">
          <span>01</span>
          <span>ABOUT ÖZ ISTANBUL</span>
        </div>

        <div className="about-hero-content">
          <h1>
            Built across
            <br />
            <span>markets.</span>
          </h1>

          <p>
            Öz Istanbul is an international business group
            connecting people, businesses, and opportunities
            across markets.
          </p>
        </div>

        <div className="about-hero-scroll">
          <span>SCROLL TO EXPLORE</span>
          <div></div>
        </div>

      </section>


      {/* ========================================
          WHO WE ARE
      ======================================== */}

      <section className="about-who">

        <div className="about-section-label">
          <span>02</span>
          <p>WHO WE ARE</p>
        </div>

        <div className="about-who-content">

          <div className="about-who-heading">
            <h2>
              Business
              <br />
              <span>without borders.</span>
            </h2>
          </div>

          <div className="about-who-copy">

            <p className="about-who-lead">
              Öz Istanbul is an international business group
              connecting people, businesses, and opportunities
              across borders.
            </p>

            <p>
              We operate across multiple sectors, bringing
              together investment, real estate, construction,
              education, tourism, and international trade
              under one global vision.
            </p>

            <p>
              Our approach is simple: understand the opportunity,
              build the right connections, and create solutions
              that deliver meaningful long-term value.
            </p>

            <div className="about-who-signature">
              <span>ÖZ ISTANBUL</span>
              <span>WORLD BUSINESS POINT</span>
            </div>

          </div>

        </div>

      </section>


      {/* ========================================
          OUR APPROACH
      ======================================== */}

      <section className="about-approach">

        <div className="about-section-label">
          <span>03</span>
          <p>OUR APPROACH</p>
        </div>

        <div className="about-approach-content">

          <div className="approach-intro">

            <h2>
              From opportunity
              <br />
              <span>to execution.</span>
            </h2>

            <p>
              We believe successful ventures are built through
              a combination of insight, relationships, and
              disciplined execution.
            </p>

          </div>


          <div className="approach-list">

            <div className="approach-item">

              <div className="approach-number">
                01
              </div>

              <div className="approach-main">

                <h3>Identify</h3>

                <p>
                  We identify opportunities across markets,
                  industries, and investment sectors where
                  meaningful potential exists.
                </p>

              </div>

            </div>


            <div className="approach-item">

              <div className="approach-number">
                02
              </div>

              <div className="approach-main">

                <h3>Develop</h3>

                <p>
                  We transform ideas and opportunities into
                  structured projects, partnerships, and
                  sustainable ventures.
                </p>

              </div>

            </div>


            <div className="approach-item">

              <div className="approach-number">
                03
              </div>

              <div className="approach-main">

                <h3>Operate</h3>

                <p>
                  We go beyond strategy, helping businesses
                  move from planning into real-world execution
                  across international markets.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ========================================
          INDUSTRIES
      ======================================== */}

      <section className="about-industries">

        <div className="about-section-label">
          <span>04</span>
          <p>OUR INDUSTRIES</p>
        </div>

        <div className="about-industries-content">

          <div className="industries-heading">

            <div>
              <h2>
                Many sectors.
                <br />
                <span>One direction.</span>
              </h2>
            </div>

            <p>
              Our businesses operate across sectors that shape
              international markets, creating connections between
              capital, people, ideas, and opportunity.
            </p>

          </div>


          <div className="industry-list">

            <div className="industry-item">

              <div className="industry-number">
                01
              </div>

              <div className="industry-main">

                <h3>
                  Real Estate & Investment
                </h3>

                <p>
                  Investment and property opportunities across
                  established and emerging markets.
                </p>

              </div>

            </div>


            <div className="industry-item">

              <div className="industry-number">
                02
              </div>

              <div className="industry-main">

                <h3>
                  Construction & Development
                </h3>

                <p>
                  Turning land, ideas, and investment into
                  meaningful development opportunities.
                </p>

              </div>

            </div>


            <div className="industry-item">

              <div className="industry-number">
                03
              </div>

              <div className="industry-main">

                <h3>
                  Education
                </h3>

                <p>
                  Connecting students and professionals with
                  international education and language opportunities.
                </p>

              </div>

            </div>


            <div className="industry-item">

              <div className="industry-number">
                04
              </div>

              <div className="industry-main">

                <h3>
                  Tourism & Health Tourism
                </h3>

                <p>
                  Creating connections between people, destinations,
                  and international services.
                </p>

              </div>

            </div>


            <div className="industry-item">

              <div className="industry-number">
                05
              </div>

              <div className="industry-main">

                <h3>
                  Trading & International Commerce
                </h3>

                <p>
                  Facilitating commercial opportunities and
                  connections between international markets.
                </p>

              </div>

            </div>


            <div className="industry-item">

              <div className="industry-number">
                06
              </div>

              <div className="industry-main">

                <h3>
                  Business & Investment
                </h3>

                <p>
                  Developing partnerships and opportunities
                  designed to create sustainable long-term value.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ========================================
          GLOBAL REACH
      ======================================== */}

      <section className="about-global">

        <div className="about-section-label">
          <span>05</span>
          <p>GLOBAL REACH</p>
        </div>

        <div className="about-global-content">

          <div className="global-heading">

            <div className="global-heading-main">

              <span className="global-eyebrow">
                OUR WORLD
              </span>

              <h2>
                Istanbul at the
                <br />
                <span>center of it all.</span>
              </h2>

            </div>

            <div className="global-heading-mark">

              <span>HEADQUARTERS</span>

              <strong>
                ISTANBUL
              </strong>

              <small>
                TÜRKIYE
              </small>

            </div>

          </div>


          <div className="global-intro-row">

            <p className="global-description">
              Positioned between Europe, the Middle East, and Asia,
              Istanbul gives Öz Istanbul a natural connection to
              international markets, people, and opportunities.
            </p>

            <div className="global-direction">

              <span>CONNECTED</span>

              <div className="global-direction-line">
                <span></span>
              </div>

              <strong>WORLDWIDE</strong>

            </div>

          </div>


          <div className="global-regions">

            <div className="global-region">

              <div className="global-region-top">

                <span>01</span>

                <span className="global-region-status">
                  BASE
                </span>

              </div>

              <strong>
                Türkiye
              </strong>

              <p>
                Our home market and central
                point of international operations.
              </p>

              <RegionMap
                center={[35, 39]}
                scale={900}
              />

            </div>


            <div className="global-region">

              <div className="global-region-top">

                <span>02</span>

                <span className="global-region-status">
                  REGION
                </span>

              </div>

              <strong>
                Europe
              </strong>

              <p>
                Connecting businesses and
                opportunities across Europe.
              </p>

              <RegionMap
                center={[15, 52]}
                scale={480}
              />

            </div>


            <div className="global-region">

              <div className="global-region-top">

                <span>03</span>

                <span className="global-region-status">
                  REGION
                </span>

              </div>

              <strong>
                Middle East
              </strong>

              <p>
                Building connections across
                one of the world's key markets.
              </p>

              <RegionMap
                center={[45, 28]}
                scale={500}
              />

            </div>


            <div className="global-region">

              <div className="global-region-top">

                <span>04</span>

                <span className="global-region-status">
                  REGION
                </span>

              </div>

              <strong>
                Asia
              </strong>

              <p>
                Exploring commercial connections
                across growing Asian markets.
              </p>

              <RegionMap
                center={[95, 35]}
                scale={260}
              />

            </div>

          </div>


          <div className="global-bottom">

            <span>
              TÜRKİYE
            </span>

            <div className="global-bottom-line"></div>

            <span>
              EUROPE
            </span>

            <div className="global-bottom-line"></div>

            <span>
              MIDDLE EAST
            </span>

            <div className="global-bottom-line"></div>

            <span>
              ASIA
            </span>

          </div>

        </div>

      </section>


      {/* ========================================
          FINAL CTA
      ======================================== */}

      <section className="about-final">

        <div className="about-section-label">
          <span>06</span>
          <p>LET'S CONNECT</p>
        </div>

        <div className="about-final-content">

          <h2>
            Opportunity
            <br />
            <span>starts here.</span>
          </h2>

          <p>
            Looking to invest, expand, build, or enter a
            new market? Let's start a conversation.
          </p>

          <a href="/contact">
            <span className="cta-text">
              Start a Conversation
            </span>
          </a>

        </div>

      </section>

    </main>
  );
}

export default About;