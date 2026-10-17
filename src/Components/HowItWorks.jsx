import React from "react";

const Offerings = () => {
  const categories = [
    {
      number: "CATEGORY 01",
      title: "Infectious Skin Diseases",
      description:
        "Learn about skin infections, their possible causes, prevention, and appropriate care.",
      image:
        "/Infectious.png",
      imageAlt: "Skin care and skin health",
      diseases: ["Fungal Skin Infections"],
    },
    {
      number: "CATEGORY 02",
      title: "Inflammatory Skin Diseases",
      description:
        "Explore common inflammatory skin conditions, suitable skincare practices, and when to seek professional assessment.",
      image:
        "Inflammatory.png",
      imageAlt: "Skin health and skincare",
      diseases: [
        "Atopic Dermatitis",
        "Urticaria",
        "Psoriasis",
        "Lichen Planus",
        "Pityriasis Rosea",
      ],
    },
    {
      number: "CATEGORY 03",
      title: "Disorders of Skin Appendages",
      description:
        "Understand conditions affecting structures such as hair follicles and sebaceous glands, including common acne conditions.",
      image:
        "Disorders.png",
      imageAlt: "Skincare products and skin health",
      diseases: ["Acne Vulgaris"],
    },
  ];

  const cardStyle = {
    flex: "1 1 280px",
    minWidth: "0",
    backgroundColor: "#FFFFFF",
    padding: "24px",
    borderRadius: "10px",
    border: "1px solid #F0E4E0",
    boxSizing: "border-box",
    boxShadow: "0 4px 15px rgba(16, 7, 47, 0.04)",
  };

  const headingStyle = {
    color: "#10072F",
    fontSize: "21px",
    lineHeight: "1.4",
    marginBottom: "12px",
  };

  const itemStyle = {
    color: "#555555",
    fontSize: "15px",
    lineHeight: "1.7",
    padding: "9px 0",
    borderBottom: "1px solid #F2EAE7",
  };

  return (
    <section
      id="offerings"
      style={{
        padding: "70px 8%",
        backgroundColor: "#FFF9F5",
      }}
    >
      {/* Section Introduction */}
      <div
        style={{
          textAlign: "center",
          maxWidth: "750px",
          margin: "0 auto 40px",
        }}
      >
        <p
          style={{
            color: "#E50920",
            fontSize: "14px",
            fontWeight: "bold",
            letterSpacing: "2px",
          }}
        >
          UNDERSTANDING YOUR SKIN
        </p>

        <h2
          style={{
            color: "#10072F",
            fontSize: "clamp(28px, 4vw, 40px)",
            marginBottom: "18px",
          }}
        >
          How We Support Your Skin Health
        </h2>

        <p
          style={{
            color: "#555555",
            fontSize: "16px",
            lineHeight: "1.8",
          }}
        >
          MSCC provides skincare education and guidance
          to help people understand different skin
          conditions, make informed decisions, and seek
          appropriate care for their skin health needs.
        </p>
      </div>

      {/* Skin Disease Categories */}
      <div
        style={{
          display: "flex",
          gap: "22px",
          flexWrap: "wrap",
          alignItems: "stretch",
        }}
      >
        {categories.map((category) => (
          <div
            key={category.number}
            style={cardStyle}
          >
            {/* Small Category Image */}
            <img
              src={category.image}
              alt={category.imageAlt}
              style={{
                width: "100%",
                height: "135px",
                objectFit: "cover",
                borderRadius: "7px",
                marginBottom: "20px",
                display: "block",
              }}
              loading="lazy"
            />

            <div
              style={{
                color: "#E50920",
                fontSize: "13px",
                fontWeight: "bold",
                marginBottom: "10px",
                letterSpacing: "1px",
              }}
            >
              {category.number}
            </div>

            <h3 style={headingStyle}>
              {category.title}
            </h3>

            <p
              style={{
                color: "#666666",
                fontSize: "15px",
                lineHeight: "1.7",
                marginBottom: "15px",
              }}
            >
              {category.description}
            </p>

            <div style={{ marginTop: "15px" }}>
              {category.diseases.map((disease) => (
                <div
                  key={disease}
                  style={itemStyle}
                >
                  <span
                    style={{
                      color: "#E50920",
                      marginRight: "10px",
                      fontWeight: "bold",
                    }}
                  >
                    •
                  </span>
                  {disease}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Offerings;
