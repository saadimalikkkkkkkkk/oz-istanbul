import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import PageTransition from "./components/PageTransition";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Enquiry from "./pages/Enquiry";

import RealEstateInvestment from "./pages/services/real-estate-investment/RealEstateInvestment";
import ConstructionDevelopment from "./pages/services/construction-development/ConstructionDevelopment";
import Education from "./pages/services/education/Education";
import TourismHealth from "./pages/services/tourism-health/TourismHealth";
import Trading from "./pages/services/trading/Trading";
import BusinessInvestment from "./pages/services/business-investment/BusinessInvestment";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Navbar />

      <PageTransition>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/enquiry" element={<Enquiry />} />

          <Route
            path="/services/real-estate-investment"
            element={<RealEstateInvestment />}
          />

          <Route
            path="/services/construction-development"
            element={<ConstructionDevelopment />}
          />

          <Route
            path="/services/education"
            element={<Education />}
          />

          <Route
            path="/services/tourism-health"
            element={<TourismHealth />}
          />

          <Route
            path="/services/trading"
            element={<Trading />}
          />

          <Route
            path="/services/business-investment"
            element={<BusinessInvestment />}
          />
        </Routes>
      </PageTransition>

      <Footer />
    </BrowserRouter>
  );
}

export default App;