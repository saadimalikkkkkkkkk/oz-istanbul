import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import ArrowIcon from "../components/ArrowIcon";
import "./Enquiry.css";

function Enquiry() {
  const [submitted, setSubmitted] = useState(false);
const [serviceOpen, setServiceOpen] = useState(false);
const [selectedService, setSelectedService] = useState("");
const serviceRef = useRef(null);

useEffect(() => {
  const handleClickOutside = (event) => {
    if (
      serviceRef.current &&
      !serviceRef.current.contains(event.target)
    ) {
      setServiceOpen(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);
  const handleSubmit = (e) => {
    e.preventDefault();

    // Email service will be connected here
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="enquiry-page">
        <section className="enquiry-success">
          <span className="enquiry-number">01</span>

          <div>
            <h1>
              Thank you.
              <br />
              <span>We've received your enquiry.</span>
            </h1>

            <p>
              Our team will review your enquiry and get back to
              you as soon as possible.
            </p>

            <Link to="/" className="enquiry-button">
              Back to Home
              <ArrowIcon className="arrow-icon" />
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="enquiry-page">

      <section className="enquiry-hero">
        <div className="enquiry-meta">
          <span>01</span>
          <span>SEND AN ENQUIRY</span>
        </div>

        <div className="enquiry-heading">
          <h1>
            Let's start
            <br />
            <span>a conversation.</span>
          </h1>

          <p>
            Tell us a little about what you're looking for
            and our team will get back to you.
          </p>
        </div>
      </section>

      <section className="enquiry-form-section">
        <form
          className="enquiry-form"
          onSubmit={handleSubmit}
        >

          <div className="form-field">
            <label htmlFor="name">FULL NAME</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your full name"
              required
            />
          </div>

          <div className="form-row">

            <div className="form-field">
              <label htmlFor="email">EMAIL ADDRESS</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="phone">PHONE / WHATSAPP</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="+90 ..."
                required
              />
            </div>

          </div>

          <div className="form-field">
  <label>WHAT ARE YOU INTERESTED IN?</label>

  <div className="custom-select" ref={serviceRef}>
    <button
      type="button"
      className={`custom-select-trigger ${
        serviceOpen ? "open" : ""
      } ${selectedService ? "selected" : ""}`}
      onClick={() => setServiceOpen(!serviceOpen)}
    >
      <span>
        {selectedService || "Select a service"}
      </span>

      <ArrowIcon
  className={`custom-select-arrow arrow-icon ${
    serviceOpen ? "open" : ""
  }`}
/>
    </button>

    {serviceOpen && (
      <div className="custom-select-menu">
        {[
          "Real Estate & Investment",
          "Construction & Development",
          "Education & Language",
          "Tourism & Health Tourism",
          "Trading & International Commerce",
          "Business & Investment",
          "Other",
        ].map((service) => (
          <button
            type="button"
            key={service}
            className={`custom-select-option ${
              selectedService === service ? "active" : ""
            }`}
            onClick={() => {
              setSelectedService(service);
              setServiceOpen(false);
            }}
          >
            <span>{service}</span>
            <ArrowIcon className="arrow-icon" />
          </button>
        ))}
      </div>
    )}

    <input
      type="hidden"
      name="service"
      value={selectedService}
      required
    />
  </div>
</div>

          <div className="form-field">
            <label htmlFor="message">YOUR ENQUIRY</label>

            <textarea
              id="message"
              name="message"
              rows="7"
              placeholder="Tell us how we can help..."
              required
            ></textarea>
          </div>

          <button type="submit" className="enquiry-submit">
            <span>Send Enquiry</span>
            <ArrowIcon className="arrow-icon" />
          </button>

        </form>
      </section>

    </main>
  );
}

export default Enquiry;