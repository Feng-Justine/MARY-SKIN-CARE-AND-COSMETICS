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
  style={{
    textDecoration: "none",
    color: "#10072F",
    fontSize: "15px",
    fontWeight: "500",
    cursor: "pointer",
  }}
>
  Home
</a>
  <a
  href="#about"
  style={{
    textDecoration: "none",
    color: "#10072F",
    fontSize: "15px",
    fontWeight: "500",
    cursor: "pointer",
  }}
>
  About
</a>
 <a
  href="#offerings"
  style={{
    textDecoration: "none",
    color: "#10072F",
    fontSize: "15px",
    fontWeight: "500",
    cursor: "pointer",
  }}
>
  Offerings
</a>
 <a
  href="#products"
  style={{
    textDecoration: "none",
    color: "#10072F",
    fontSize: "15px",
    fontWeight: "500",
    cursor: "pointer",
  }}
>
  Products
</a>
 <a
  href="#contact"
  style={{
    textDecoration: "none",
    color: "#10072F",
    fontSize: "15px",
    fontWeight: "500",
    cursor: "pointer",
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