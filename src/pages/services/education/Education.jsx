import ServiceDetail from "../../../components/services/ServiceDetail";
import educationBackground from "../../../assets/education.jpg";

function Education() {
  return (
    <ServiceDetail
      number="03"
      title="Education"
      subtitle="& Language."

      description="Connecting students and professionals with education, language, and international study opportunities."

      background={educationBackground}

      overview={{
        title: "Opening doors to",
        highlight: "global education.",
        description:
          "Öz Istanbul helps students, professionals, and individuals access educational and language opportunities in Türkiye and abroad. From university pathways and study opportunities to language services, we help make international education more accessible."
      }}

      services={[
        "Study in Türkiye",
        "Study Abroad",
        "University Admissions",
        "Language Education",
        "Language Services",
        "Education Consultancy"
      ]}
    />
  );
}

export default Education;