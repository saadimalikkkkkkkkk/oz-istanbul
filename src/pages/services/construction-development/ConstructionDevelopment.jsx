import ServiceDetail from "../../../components/services/ServiceDetail";
import constructionBackground from "../../../assets/construction.jpg";

function ConstructionDevelopment() {
  return (
    <ServiceDetail
      number="02"
      title="Construction"
      subtitle="& Development."

      description="Transforming land, concepts, and investment into structured development opportunities and real-world projects."

      background={constructionBackground}

      overview={{
        title: "Building for",
        highlight: "the future.",
        description:
          "Öz Istanbul brings together investment, development, and international business expertise to support construction and land development opportunities. We connect ideas with the right partners, resources, and markets to help turn projects into reality."
      }}

      services={[
        "Land Development",
        "Construction Projects",
        "Property Development",
        "Project Investment",
        "Development Partnerships",
        "Project Consultancy"
      ]}
    />
  );
}

export default ConstructionDevelopment;