import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  const linkStyle = {
    display: "block",
    width: "fit-content",
    color: "#D9D6E5",
    textDecoration: "none",
    fontSize: "14px",
    lineHeight: "1.8",
    marginBottom: "12px",
    overflowWrap: "anywhere",
    borderBottom: "2px solid transparent",
    paddingBottom: "2px",
    transition: "border-color 0.3s ease",
  };

  const headingStyle = {
    color: "#FFFFFF",
    fontSize: "17px",
    fontWeight: "bold",
    marginBottom: "20px",
    position: "relative",
  };

  const iconStyle = {
    width: "22px",
    marginRight: "9px",
    display: "inline-block",
    textAlign: "center",
  };

  return (
    <footer
      id="contact"
      style={{
        backgroundColor: "#10072F",
        color: "#FFFFFF",
        padding: "60px 8% 20px",
        fontFamily: "Arial, sans-serif",
        boxSizing: "border-box",
        width: "100%",
      }}
    >
      {/* Main Footer Content */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "35px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Brand */}
        <div
          style={{
            flex: "1 1 220px",
            minWidth: "0",
          }}
        >
          <h2
            style={{
              fontSize: "32px",
              fontWeight: "900",
              letterSpacing: "2px",
              margin: "0 0 18px",
              color: "#FFFFFF",
            }}
          >
            <span style={{ color: "#E53945" }}>MS</span>
            <span>CC</span>
          </h2>

          <p
            style={{
              color: "#D9D6E5",
              fontSize: "14px",
              lineHeight: "1.9",
              maxWidth: "300px",
              marginBottom: "20px",
            }}
          >
            Advancing skin health through research, knowledge, and innovative
            approaches to skincare and skin diseases.
          </p>
        </div>

        {/* Quick Navigation */}
        <div
          style={{
            flex: "1 1 140px",
            minWidth: "0",
          }}
        >
          <h3 style={headingStyle}>Quick Links</h3>

          <a
            href="#home"
            style={linkStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderBottom = "2px solid #E50920";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderBottom = "2px solid transparent";
            }}
          >
            Home
          </a>

          <a
            href="#about"
            style={linkStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderBottom = "2px solid #E50920";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderBottom = "2px solid transparent";
            }}
          >
            About Us
          </a>

          <a
            href="#offerings"
            style={linkStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderBottom = "2px solid #E50920";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderBottom = "2px solid transparent";
            }}
          >
            Offerings
          </a>

          <a
            href="#products"
            style={linkStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderBottom = "2px solid #E50920";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderBottom = "2px solid transparent";
            }}
          >
            Products
          </a>

          <a
            href="#contact"
            style={linkStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderBottom = "2px solid #E50920";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderBottom = "2px solid transparent";
            }}
          >
            Contact Us
          </a>
        </div>

        {/* Contact Details */}
        <div
          style={{
            flex: "1 1 240px",
            minWidth: "0",
          }}
        >
          <h3 style={headingStyle}>Get in Touch</h3>

          <a href="mailto:maryskincare22@gmail.com" style={linkStyle}>
            <i
              className="fa-solid fa-envelope"
              style={{
                ...iconStyle,
                color: "#E53945",
              }}
            />
            maryskincare22@gmail.com
          </a>
          <a
            href="https://instagram.com/drmarymsekwa?mdxt=NDhoYmNoOWVicGV1&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
          >
            <i
              className="fa-brands fa-instagram"
              style={{
                ...iconStyle,
                color: "#E4405F",
                fontSize: "18px",
              }}
            />
            @drmarymsekwa
          </a>
          <a
            href="https://wa.me/255712552668"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
          >
            <i
              className="fa-brands fa-whatsapp"
              style={{
                ...iconStyle,
                color: "#25D366",
                fontSize: "19px",
              }}
            />
            +255 712 552 668
          </a>

          <a href="tel:+255755831970" style={linkStyle}>
            <i
              className="fa-solid fa-phone"
              style={{
                ...iconStyle,
                color: "#E53945",
              }}
            />
            0755 831 970
          </a>
        </div>

        {/* Location */}
        <div
          style={{
            flex: "1 1 190px",
            minWidth: "0",
          }}
        >
          <h3 style={headingStyle}>Our Location</h3>

          <p
            style={{
              color: "#D9D6E5",
              fontSize: "14px",
              lineHeight: "1.8",
              marginTop: 0,
              marginBottom: "15px",
            }}
          >
            <i
              className="fa-solid fa-location-dot"
              style={{
                ...iconStyle,
                color: "#E53945",
                fontSize: "18px",
              }}
            />
            Nzega, Tabora, Tanzania
          </p>

          <a
            href="https://maps.app.goo.gl/2eGL3XeFByxAhrpo6"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              ...linkStyle,
              color: "#E53945",
              fontWeight: "bold",
            }}
          >
            <i
              className="fa-solid fa-map-location-dot"
              style={{
                ...iconStyle,
                color: "#E53945",
                fontSize: "17px",
              }}
            />
            View on Google Maps
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "45px auto 0",
          paddingTop: "22px",
          borderTop: "1px solid #39314F",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "15px",
        }}
      >
        <p
          style={{
            color: "#D9D6E5",
            fontSize: "13px",
            lineHeight: "1.8",
            margin: 0,
          }}
        >
          © {currentYear} MSCC. All rights reserved.
        </p>

        <a
          href="#home"
          style={{
            color: "#E53945",
            textDecoration: "none",
            fontSize: "13px",
            fontWeight: "bold",
          }}
        >
          Back to Top
        </a>
      </div>
    </footer>
  );
}

export default Footer;
