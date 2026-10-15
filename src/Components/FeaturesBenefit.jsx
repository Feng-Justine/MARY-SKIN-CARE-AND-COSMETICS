import React from "react";

const FeaturesBenefit = () => {
  const products = [
    {
      id: 1,
      name: "Betamethasone Valerate Ointment 0.025%",
      brand: "Mervate",
      description:
        "For management of inflammatory skin conditions.",
    },
    {
      id: 2,
      name: "Salicylic Acid Ointment 5%",
      description:
        "Helps remove excess dead skin cells and supports the management of hyperkeratotic skin conditions.",
    },
    {
      id: 3,
      name: "Betnosalic Ointment 5%",
      description:
        "Combination formulation for selected inflammatory and scaling skin conditions.",
    },
    {
      id: 4,
      name: "Salicylic Acid Ointment 20%",
      description:
        "Intensive keratolytic preparation for thickened skin lesions.",
    },
    {
      id: 5,
      name: "Salicylic Acid Shampoo 2%",
      description:
        "Cleanses the scalp and helps reduce dandruff and scalp scaling.",
    },
    {
      id: 6,
      name: "Salicylic Acid Cleanser 2%",
      description:
        "Facial cleanser intended for oily and acne-prone skin.",
    },
    {
      id: 7,
      name: "Antifungal Lotion",
      description:
        "Supports the management of superficial fungal skin infections.",
    },
    {
      id: 8,
      name: "Salicylic Acid Solution for Acne 2%",
      description:
        "Helps unclog pores and reduce acne breakouts.",
    },
    {
      id: 9,
      name: "Rosemary Oil",
      description:
        "Natural oil commonly used in hair and scalp care.",
    },
    {
      id: 10,
      name: "Turmeric Soap",
      description:
        "Herbal cleansing soap enriched with turmeric.",
    },
    {
      id: 11,
      name: "Alovera Shower Gel",
      description:
        "Moisturizes the skin, Soothes skin discomfort and Supportd the skin barrier.",
    },
  ];

  const productCardStyle = {
    backgroundColor: "#FFFFFF",
    border: "1px solid #F0E4E0",
    borderRadius: "10px",
    padding: "25px",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    boxShadow: "0 4px 15px rgba(16, 7, 47, 0.04)",
  };

  return (
    <section
      id="products"
      style={{
        padding: "80px 8%",
        backgroundColor: "#FFF9F5",
      }}
    >
      {/* Section Introduction */}
      <div
        style={{
          textAlign: "center",
          maxWidth: "750px",
          margin: "0 auto 45px",
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
          MSCC COSMECEUTICALS
        </p>

        <h2
          style={{
            color: "#10072F",
            fontSize: "clamp(28px, 4vw, 40px)",
            marginBottom: "18px",
          }}
        >
          Our Products
        </h2>

        <p
          style={{
            color: "#555555",
            fontSize: "16px",
            lineHeight: "1.8",
          }}
        >
          Explore the MSCC product range for skin,
          scalp, and personal care. Learn about the
          intended uses of our different formulations.
        </p>
      </div>

      {/* Products Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(min(100%, 240px), 1fr))",
          gap: "25px",
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={productCardStyle}
          >
            {/* Product Number */}
            <div
              style={{
                color: "#E50920",
                fontSize: "13px",
                fontWeight: "bold",
                letterSpacing: "1px",
                marginBottom: "15px",
              }}
            >
              PRODUCT {String(product.id).padStart(2, "0")}
            </div>

            {/* Product Name */}
            <h3
              style={{
                color: "#10072F",
                fontSize: "19px",
                lineHeight: "1.5",
                margin: "0 0 12px",
              }}
            >
              {product.name}
            </h3>

            {/* Brand Name */}
            {product.brand && (
              <p
                style={{
                  color: "#E50920",
                  fontSize: "14px",
                  fontWeight: "bold",
                  margin: "0 0 12px",
                }}
              >
                Brand: {product.brand}
              </p>
            )}

            {/* Product Description */}
            <p
              style={{
                color: "#555555",
                fontSize: "15px",
                lineHeight: "1.8",
                margin: 0,
              }}
            >
              {product.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesBenefit;