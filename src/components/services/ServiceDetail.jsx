import { Link } from "react-router-dom";
import ArrowIcon from "../ArrowIcon";
import "./ServiceDetail.css";

function ServiceDetail({
  number,
  title,
  subtitle,
  description,
  background,
  overview,
  services,
}) {
  return (
    <main className="service-detail">

      {/* HERO */}
      <section
        className="service-detail-hero"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="service-detail-overlay"></div>

        <div className="service-detail-hero-content">

          <span className="service-detail-number">
            {number}
          </span>

          <h1>
            {title}
            <br />
            <span>{subtitle}</span>
          </h1>

          <p>
            {description}
          </p>

        </div>

        <div className="service-detail-scroll">
          <span>SCROLL TO EXPLORE</span>
          <div></div>
        </div>

      </section>


      {/* OVERVIEW */}
      <section className="service-detail-overview">

        <div className="service-detail-overview-content">

          <h2>
            {overview.title}
            <br />
            <span>{overview.highlight}</span>
          </h2>

          <p>
            {overview.description}
          </p>

        </div>

      </section>


      {/* WHAT WE DO */}
      <section className="service-detail-services">

        <div className="service-detail-services-header">

          <h2>
            What
            <br />
            <span>we do.</span>
          </h2>

          <p>
            Our approach combines international experience,
            local knowledge, and a focus on creating practical
            opportunities for our clients and partners.
          </p>

        </div>


        <div className="service-detail-service-list">

          {services.map((service, index) => (
            <div
              className="service-detail-service-item"
              key={service}
            >
              <span>
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3>
                {service}
              </h3>

              

            </div>
          ))}

        </div>

      </section>


      {/* CTA */}
      <section className="service-detail-cta">

        <div className="service-detail-cta-content">

          <h2>
            Let's discuss
            <br />
            <span>your opportunity.</span>
          </h2>

          <p>
            Whether you're looking to invest, build,
            expand, or explore a new opportunity,
            our team is ready to start the conversation.
          </p>

          <Link to="/contact">
            <span>Start a Conversation</span>
            <ArrowIcon className="arrow-icon" />
          </Link>

        </div>

      </section>


      {/* BACK */}
      <section className="service-detail-back">

        <Link to="/services">
          <ArrowIcon className="arrow-icon arrow-left" />
          <span>Back to all businesses</span>
        </Link>

      </section>

    </main>
  );
}

export default ServiceDetail;