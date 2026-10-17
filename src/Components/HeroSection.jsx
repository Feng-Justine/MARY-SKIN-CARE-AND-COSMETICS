import React from "react";

function HeroSection() {
  return (
    <section
     
      id="home"
      style={{
        display: "flex",
        alignItems: "stretch",
        justifyContent: "space-between",
        gap: "40px",
        padding: "80px 8%",
        backgroundColor: "#FFF9F5",
        minHeight: "450px",
        flexWrap: "wrap",
      }}
    >
  {/* Moving Cosmeceuticals Banner */}
  <div
    style={{
     width: "100%",
     flexBasis: "100%",
     overflow: "hidden",
     padding: "12px 0",
     marginBottom: "20px",
     boxSizing: "border-box",
   }}
  >
  <div
    style={{
      display: "flex",
      width: "max-content",
      animation: "cosmeceuticalsScroll 15s linear infinite",
    }}
  >
    {[1, 2, 3, 4].map((item) => (
      <span
        key={item}
        style={{
          color: "#10072F",
          fontSize: "16px",
          fontWeight: "bold",
          letterSpacing: "3px",
          whiteSpace: "nowrap",
          padding: "0 35px",
        }}
      >
        WE DEAL WITH COSMECEUTICALS
        <span
          style={{
            color: "#E50920",
            marginLeft: "35px",
          }}
        >
          ✦
        </span>
      </span>
    ))}
  </div>

  <style>
    {`
      @keyframes cosmeceuticalsScroll {
        from {
          transform: translateX(0);
        }
        to {
          transform: translateX(-50%);
        }
      }
    `}
  </style>
</div>

      {/* Hero Text */}
      <div
          style={{
            flex: "1",
            minWidth: "280px",
            display: "flex",
            flexDirection: "column",
          }}
        >
        <p
          style={{
            color: "#B83D48",
            fontSize: "14px",
            fontWeight: "bold",
            letterSpacing: "2px",
          }}
        >
          MARY SKIN CARE AND COSMETICS
        </p>

             
      <h1
         style={{
          color: "#10072F",
          fontSize: "clamp(32px, 4vw, 52px)",
          lineHeight: "1.2",
          marginBottom: "20px",
          }}
        >
         Healthy{" "}
         <span
           style={{
            color: "#E50920",
            fontStyle: "italic",
          }}
        >
         Skin
          </span>{" "}
          Starts with the Right{" "}
          <span
           style={{
            color: "#E50920",
           fontStyle: "italic",
          }}
        >
           Care
         </span>.
       </h1>


        <p
          style={{
            color: "#555555",
            fontSize: "17px",
            lineHeight: "1.8",
            maxWidth: "550px",
          }}
        >
          Discover personalized skincare guidance, beauty services,
          and professional skincare education. We help you understand
          your skin, build effective routines, and receive ongoing
          support throughout your skincare journey. We treat the skin disease you have and give counselling to the skin condition.
        </p>

        {/* Buttons */}
        <div
          style={{
            display: "flex",
            gap: "15px",
            flexWrap: "wrap",
            marginTop: "30px",
          }}
        >
          
<a
  href="#products"
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "scale(1.05)";
    e.currentTarget.style.boxShadow = "0 6px 15px #E5092040";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "scale(1)";
    e.currentTarget.style.boxShadow = "none";
  }}
  style={{
    backgroundColor: "#E50920",
    color: "#FFFFFF",
    padding: "14px 24px",
    textDecoration: "none",
    borderRadius: "5px",
    fontWeight: "bold",
    display: "inline-block",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  }}
>
  Explore Our Products
</a>

<a
  href="#offerings"
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "scale(1.05)";
    e.currentTarget.style.boxShadow = "0 6px 15px #10072F30";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "scale(1)";
    e.currentTarget.style.boxShadow = "none";
  }}
  style={{
    border: "2px solid #10072F",
    color: "#10072F",
    padding: "12px 22px",
    textDecoration: "none",
    borderRadius: "5px",
    fontWeight: "bold",
    display: "inline-block",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  }}
>
  Discover Our Services
</a>
        </div>

        <p
          style={{
            color: "#777777",
            fontSize: "13px",
            marginTop: "25px",
          }}
        >
          Personalized Care | Skincare Education | Continuous Support
        </p>
      </div>


{/* Hero Image */}
<div
  style={{
    flex: "1",
    minWidth: "280px",
    display: "flex",
  }}
>
  <img
    src="/skincare.png"
    alt="Skincare and beauty products"
    style={{
      width: "100%",
      flex: "1",
      minHeight: "400px",
      objectFit: "cover",
      borderRadius: "12px",
    }}
  />
</div>

      
    </section>
    
  );
}

export default HeroSection;