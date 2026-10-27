import { useEffect, useState } from "react";

const NavBar = () => {
  const [screenWidth, setScreenWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200,
  );

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isDesktop = screenWidth >= 1100;
  const isPhone = screenWidth < 768;
  const isSmallPhone = screenWidth < 480;

  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Offerings", href: "#offerings" },
    { label: "Products", href: "#products" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavigation = () => {
    setMenuOpen(false);
  };

  const linkStyle = () => ({
    color: "#30382E",
    textDecoration: "none",
    padding: "6px 0",
    borderBottom: "2px solid transparent",
    fontSize: "15px",
    fontWeight: "500",
    whiteSpace: "nowrap",
    transition: "border-color 0.25s ease, color 0.25s ease",
  });

  return (
    <header
      style={{
        width: "100%",
        backgroundColor: "#FFFFFF",
        borderBottom: "1px solid #E8EAE2",
        fontFamily: "Arial, sans-serif",
        boxSizing: "border-box",
        position: "relative",
        zIndex: 1000,
      }}
    >
      {/* Main navigation bar */}
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: isSmallPhone ? "7px 3%" : isPhone ? "8px 4%" : "9px 5%",
          gap: isPhone ? "6px" : "20px",
          minHeight: "unset",
          boxSizing: "border-box",
        }}
      >
        {/* Enlarged MSCC logo without increasing navbar height */}
        <a
          href="#home"
          onClick={handleNavigation}
          aria-label="Mary Skin Care and Cosmetics home"
          style={{
            display: "flex",
            alignItems: "center",
            flexShrink: 0,
            lineHeight: 0,
          }}
        >
          <img
            src="/MSCC logo.png"
            alt="Mary Skin Care and Cosmetics Logo"
            style={{
              width: isSmallPhone ? "48px" : isPhone ? "54px" : "68px",
              height: isSmallPhone ? "48px" : isPhone ? "54px" : "68px",
              objectFit: "contain",
              display: "block",
              transform: isSmallPhone
                ? "scale(1.3)"
                : isPhone
                  ? "scale(1.35)"
                  : "scale(1.4)",
              transformOrigin: "center",
            }}
          />
        </a>

        {/* Desktop navigation links */}
        {isDesktop && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "clamp(18px, 2.2vw, 32px)",
              flex: 1,
            }}
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavigation}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderBottom = "2px solid #9CAF88";
                  e.currentTarget.style.color = "#4F5948";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderBottom = "2px solid transparent";
                  e.currentTarget.style.color = "#30382E";
                }}
                style={linkStyle()}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}

        {/* Appointment button */}
        <button
          type="button"
          onClick={() =>
            window.open(
              "https://wa.me/255712552668",
              "_blank",
              "noopener,noreferrer",
            )
          }
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#4F5948";
            e.currentTarget.style.transform = "translateY(-1px)";
            e.currentTarget.style.boxShadow =
              "0 4px 12px rgba(156, 175, 136, 0.25)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#9CAF88";
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "none";
          }}
          style={{
            backgroundColor: "#9CAF88",
            color: "#FFFFFF",
            padding: isSmallPhone
              ? "7px 8px"
              : isPhone
                ? "8px 10px"
                : "9px 16px",
            border: "none",
            borderRadius: "6px",
            fontSize: isPhone ? "12px" : "14px",
            fontWeight: "600",
            cursor: "pointer",
            whiteSpace: "nowrap",
            flexShrink: 0,
            transition: "all 0.25s ease",
          }}
        >
          {isPhone ? "Schedule" : "Book an Appointment"}
        </button>

        {/* Hamburger menu for tablets and phones */}
        {!isDesktop && (
          <button
            type="button"
            onClick={() => setMenuOpen((previous) => !previous)}
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="mscc-mobile-navigation"
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#E8EAE2";
              e.currentTarget.style.boxShadow =
                "0 2px 8px rgba(48, 56, 46, 0.12)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#FFFFFF";
              e.currentTarget.style.boxShadow = "none";
            }}
            style={{
              width: "34px",
              height: "34px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "5px",
              border: "1px solid #E8EAE2",
              borderRadius: "6px",
              backgroundColor: "#FFFFFF",
              cursor: "pointer",
              flexShrink: 0,
              padding: 0,
              transition: "all 0.25s ease",
            }}
          >
            {[0, 1, 2].map((line) => (
              <span
                key={line}
                style={{
                  display: "block",
                  width: "18px",
                  height: "2px",
                  borderRadius: "2px",
                  backgroundColor: menuOpen ? "#9CAF88" : "#30382E",
                  transition: "all 0.25s ease",
                }}
              />
            ))}
          </button>
        )}
      </nav>

      {/* Expandable tablet and mobile navigation */}
      {!isDesktop && menuOpen && (
        <div
          id="mscc-mobile-navigation"
          style={{
            backgroundColor: "#FFFFFF",
            borderTop: "1px solid #E8EAE2",
            boxShadow: "0 8px 18px rgba(48, 56, 46, 0.08)",
            padding: isSmallPhone ? "16px 6%" : "20px 5%",
          }}
        >
          {/* Business name */}
          <div
            style={{
              color: "#30382E",
              fontSize: isSmallPhone ? "18px" : "21px",
              fontWeight: "700",
              lineHeight: 1.4,
              marginBottom: "14px",
            }}
          >
            Mary Skin Care and Cosmetics
          </div>

          {/* Navigation links */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "6px",
            }}
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavigation}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#E8EAE2";
                  e.currentTarget.style.borderLeft = "3px solid #9CAF88";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#FFFFFF";
                  e.currentTarget.style.borderLeft = "3px solid transparent";
                }}
                style={{
                  display: "block",
                  color: "#30382E",
                  textDecoration: "none",
                  padding: "10px 14px",
                  borderLeft: "3px solid transparent",
                  backgroundColor: "#FFFFFF",
                  fontSize: "15px",
                  fontWeight: "500",
                  transition: "all 0.25s ease",
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
