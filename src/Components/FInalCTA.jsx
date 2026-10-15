import React from "react";

const FinalCTA = () => {
  return (
    <section
      style={{
        padding: "70px 8%",
        backgroundColor: "#FFFFFF",
        textAlign: "center",
      }}
    >
      <div
        style={{
          maxWidth: "750px",
          margin: "0 auto",
        }}
      >
        {/* Section Label */}
        <p
          style={{
            color: "#E50920",
            fontSize: "14px",
            fontWeight: "bold",
            letterSpacing: "2px",
            marginBottom: "15px",
          }}
        >
          CONNECT
        </p>

        {/* Main Heading */}
        <h2
          style={{
            color: "#FFFFFF",
            fontSize: "clamp(28px, 4vw, 40px)",
            lineHeight: "1.3",
            marginBottom: "20px",
          }}
        >
          Work with Us
        </h2>

        {/* Description */}
        <p
          style={{
            color: "#10072F",
            fontSize: "16px",
            lineHeight: "1.8",
            marginBottom: "30px",
          }}
        >
          Collaborate with MSCC, explore our cosmeceutical
          products, or connect with us to discover how we
          can work together to support skin health.
        </p>

        {/* Contact Button */}
        <a
          href="#contact"
          style={{
            display: "inline-block",
            backgroundColor: "#E50920",
            color: "#FFFFFF",
            padding: "14px 30px",
            borderRadius: "6px",
            textDecoration: "none",
            fontSize: "15px",
            fontWeight: "bold",
          }}
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
};

export default FinalCTA;