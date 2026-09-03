import ServiceDetail from "../../../components/services/ServiceDetail";
import businessInvestmentBackground from "../../../assets/business-investment.jpg";

function BusinessInvestment() {
  return (
    <ServiceDetail
      number="06"
      title="Business"
      subtitle="& Investment."

      description="Developing partnerships, ventures, and strategic opportunities designed to create long-term value."

      background={businessInvestmentBackground}

      overview={{
        title: "Creating",
        highlight: "long-term value.",
        description:
          "Öz Istanbul works with entrepreneurs, investors, and businesses to identify strategic opportunities and build meaningful partnerships. We bring together international perspective, local knowledge, and commercial experience to help turn ideas into sustainable ventures."
      }}

      services={[
        "Business Development",
        "Investment Opportunities",
        "Strategic Partnerships",
        "Joint Ventures",
        "Market Entry",
        "Project Development"
      ]}
    />
  );
}

export default BusinessInvestment;