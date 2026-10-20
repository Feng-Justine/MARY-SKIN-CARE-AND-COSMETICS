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
    color: "#10072F",
    textDecoration: "none",
    padding: "8px 0 6px",
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
        borderBottom: "1px solid #f5f4f4",
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
          padding: isSmallPhone ? "10px 4%" : isPhone ? "12px 4%" : "15px 5%",
          gap: isPhone ? "8px" : "24px",
          minHeight: isPhone ? "70px" : "90px",
          boxSizing: "border-box",
        }}
      >
        {/* MSCC logo */}
        <a
          href="#home"
          onClick={handleNavigation}
          aria-label="Mary Skin Care and Cosmetics home"
          style={{
            display: "flex",
            alignItems: "center",
            flexShrink: 0,
          }}
        >
          <img
            src="/MSCC logo.png"
            alt="Mary Skin Care and Cosmetics Logo"
            style={{
              width: isSmallPhone ? "50px" : isPhone ? "60px" : "75px",
              height: isSmallPhone ? "50px" : isPhone ? "60px" : "75px",
              objectFit: "contain",
              display: "block",
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
                  e.currentTarget.style.borderBottom = "2px solid #E50920";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderBottom = "2px solid transparent";
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
            e.currentTarget.style.backgroundColor = "#B80719";
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow =
              "0 4px 12px rgba(229, 9, 32, 0.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#E50920";
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "none";
          }}
          style={{
            backgroundColor: "#E50920",
            color: "#FFFFFF",
            padding: isPhone ? "10px 12px" : "13px 22px",
            border: "none",
            borderRadius: "6px",
            fontSize: isPhone ? "13px" : "14px",
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
              e.currentTarget.style.backgroundColor = "#FFF1F3";
              e.currentTarget.style.boxShadow =
                "0 2px 8px rgba(16, 7, 47, 0.12)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#FFFFFF";
              e.currentTarget.style.boxShadow = "none";
            }}
            style={{
              width: "42px",
              height: "42px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "5px",
              border: "1px solid #F0E9EA",
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
                  width: "20px",
                  height: "2px",
                  borderRadius: "2px",
                  backgroundColor: menuOpen ? "#E50920" : "#10072F",
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
            borderTop: "1px solid #F5F4F4",
            boxShadow: "0 8px 18px rgba(16, 7, 47, 0.08)",
            padding: isSmallPhone ? "20px 6%" : "24px 5%",
          }}
        >
          {/* Business name */}
          <div
            style={{
              color: "#10072F",
              fontSize: isSmallPhone ? "18px" : "21px",
              fontWeight: "700",
              lineHeight: 1.4,
              marginBottom: "18px",
            }}
          >
            Mary Skin Care and Cosmetics
          </div>

          {/* All five navigation links */}
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
                  e.currentTarget.style.backgroundColor = "#FFF1F3";
                  e.currentTarget.style.borderLeft = "3px solid #E50920";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#FFFFFF";
                  e.currentTarget.style.borderLeft = "3px solid transparent";
                }}
                style={{
                  display: "block",
                  color: "#10072F",
                  textDecoration: "none",
                  padding: "12px 14px",
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
