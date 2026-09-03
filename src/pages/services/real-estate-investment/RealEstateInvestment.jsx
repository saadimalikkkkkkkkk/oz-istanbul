import ServiceDetail from "../../../components/services/ServiceDetail";
import realEstateBackground from "../../../assets/real-estate.jpg";

function RealEstateInvestment() {
  return (
    <ServiceDetail
      number="01"
      title="Real Estate"
      subtitle="& Investment."

      description="Discovering property, investment, and development opportunities across Türkiye and international markets."

      background={realEstateBackground}

      overview={{
        title: "Investing in",
        highlight: "opportunity.",
        description:
          "Öz Istanbul connects investors with carefully considered real estate and investment opportunities. From property acquisition and land development to strategic investment projects, we help turn opportunities into long-term value."
      }}

      services={[
        "Property Investment",
        "Real Estate Acquisition",
        "Land & Development Projects",
        "Investment Opportunities",
        "Property Advisory",
        "Project Partnerships"
      ]}
    />
  );
}

export default RealEstateInvestment;