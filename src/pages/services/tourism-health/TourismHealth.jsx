import ServiceDetail from "../../../components/services/ServiceDetail";
import tourismBackground from "../../../assets/tourism.jpg";

function TourismHealth() {
  return (
    <ServiceDetail
      number="04"
      title="Tourism"
      subtitle="& Health Tourism."

      description="Connecting international visitors with destinations, services, and opportunities across Türkiye and beyond."

      background={tourismBackground}

      overview={{
        title: "Connecting people with",
        highlight: "Türkiye.",
        description:
          "Öz Istanbul connects international visitors with tourism, hospitality, and health tourism opportunities across Türkiye. We help individuals and partners navigate destinations, services, and experiences through a local and international perspective."
      }}

      services={[
        "Tourism Services",
        "Health Tourism",
        "Medical Travel Support",
        "Accommodation & Hospitality",
        "Travel & Destination Services",
        "Tourism Partnerships"
      ]}
    />
  );
}

export default TourismHealth;