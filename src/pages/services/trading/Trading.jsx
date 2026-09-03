import ServiceDetail from "../../../components/services/ServiceDetail";
import tradingBackground from "../../../assets/trading.jpg";

function Trading() {
  return (
    <ServiceDetail
      number="05"
      title="Trading"
      subtitle="& International Commerce."

      description="Creating commercial connections between businesses, suppliers, and international markets."

      background={tradingBackground}

      overview={{
        title: "Connecting",
        highlight: "global markets.",
        description:
          "Öz Istanbul facilitates international commercial connections between businesses, suppliers, and markets. Our approach focuses on identifying opportunities, building relationships, and supporting cross-border trade across Türkiye and international markets."
      }}

      services={[
        "Import & Export",
        "International Trade",
        "Supplier Connections",
        "Product Sourcing",
        "Commercial Partnerships",
        "Market Expansion"
      ]}
    />
  );
}

export default Trading;