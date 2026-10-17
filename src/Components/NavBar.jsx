import React from 'react'

const NavBar = () => {
  return (
    <div style={{
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "15px 6%",
  backgroundColor: "#FFFFFF",
  borderBottom: "1px solid #f5f4f4",
  gap: "30px",
  fontFamily: "Arial, sans-serif",
}}>
      <div>
         <img
           src="/MSCC logo.png"
           alt="Mary Skin Care and Cosmetics Logo"
           style={{
            width: "75px",
            height: "75px",
            objectFit: "contain",
            display: "flex",
            alignItems: "center",
            flexShrink: 0,
           }}
           />
      </div>
      <div style={{
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "30px",
  flex: 1,
}}>
       <a
  href="#home"
  onMouseEnter={(e) => {
    e.currentTarget.style.borderBottom = "2px solid #E50920";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.borderBottom = "2px solid transparent";
  }}
  style={{
    color: "#10072F",
    textDecoration: "none",
    paddingBottom: "6px",
    borderBottom: "2px solid transparent",
    transition: "border-color 0.3s ease",
  }}
>
  Home
</a>

  <a
  href="#about"
  onMouseEnter={(e) => {
    e.currentTarget.style.borderBottom = "2px solid #E50920";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.borderBottom = "2px solid transparent";
  }}
  style={{
    color: "#10072F",
    textDecoration: "none",
    paddingBottom: "6px",
    borderBottom: "2px solid transparent",
    transition: "border-color 0.3s ease",
  }}
>
  About
</a>

 <a
  href="#offerings"
  onMouseEnter={(e) => {
    e.currentTarget.style.borderBottom = "2px solid #E50920";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.borderBottom = "2px solid transparent";
  }}
  style={{
    color: "#10072F",
    textDecoration: "none",
    paddingBottom: "6px",
    borderBottom: "2px solid transparent",
    transition: "border-color 0.3s ease",
  }}
>
  Offerings
</a>

<a
  href="#products"
  onMouseEnter={(e) => {
    e.currentTarget.style.borderBottom = "2px solid #E50920";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.borderBottom = "2px solid transparent";
  }}
  style={{
    color: "#10072F",
    textDecoration: "none",
    paddingBottom: "6px",
    borderBottom: "2px solid transparent",
    transition: "border-color 0.3s ease",
  }}
>
  Products
</a>

 <a
  href="#contact"
  onMouseEnter={(e) => {
    e.currentTarget.style.borderBottom = "2px solid #E50920";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.borderBottom = "2px solid transparent";
  }}
  style={{
    color: "#10072F",
    textDecoration: "none",
    paddingBottom: "6px",
    borderBottom: "2px solid transparent",
    transition: "border-color 0.3s ease",
  }}
>
  Contact
</a>

      </div>
      <div style={{
  display: "flex",
  alignItems: "center",
  flexShrink: 0,
}}>
    
<button
  onClick={() =>
    window.open("https://wa.me/255712552668", "_blank")
  }
  style={{
    backgroundColor: "#E50920",
    color: "#FFFFFF",
    padding: "13px 22px",
    border: "none",
    borderRadius: "6px",
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer",
    whiteSpace: "nowrap",
  }}
>
  Book an Appointment
</button>

      </div>
    </div>
  )
}

export default NavBar