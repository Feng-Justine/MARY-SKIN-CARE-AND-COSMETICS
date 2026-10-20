const AboutUs = () => {
  return (
    <section
      id="about"
      style={{
        display: "flex",
        alignItems: "stretch",
        justifyContent: "space-between",
        gap: "50px",
        padding: "80px 8%",
        backgroundColor: "#FFF9F5",
        flexWrap: "wrap",
      }}
    >
      {/* Dr. Mary's Image */}
      <div
        style={{
          flex: "1",
          minWidth: "280px",
          display: "flex",
        }}
      >
        <img
          src="/Dr. Mary.png"
          alt="Dr. Mary, founder of Mary Skin Care and Cosmetics"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            borderRadius: "12px",
            display: "block",
          }}
        />
      </div>

      {/* About Dr. Mary */}
      <div
        style={{
          flex: "1.2",
          minWidth: "280px",
        }}
      >
        <p
          style={{
            color: "#B83D48",
            fontSize: "14px",
            fontWeight: "bold",
            letterSpacing: "2px",
            marginBottom: "12px",
          }}
        >
          MEET THE FOUNDER
        </p>

        <h2
          style={{
            color: "#10072F",
            fontSize: "clamp(30px, 4vw, 42px)",
            lineHeight: "1.3",
            margin: "0 0 10px",
          }}
        >
          Dr. Mary
        </h2>

        <p
          style={{
            color: "#B83D48",
            fontSize: "16px",
            fontWeight: "600",
            marginBottom: "25px",
          }}
        >
          Founder, Mary Skin Care and Cosmetics
        </p>

        <p
          style={{
            color: "#555555",
            fontSize: "16px",
            lineHeight: "1.9",
            marginBottom: "18px",
          }}
        >
          Dr. Mary Msekwa is a Community Dermatologist and Cosmetic Formulator
          of Skin conditons. <br />
          Dr. Mary is a skincare educator and health-focused entrepreneur
          dedicated to promoting skin health awareness and preventive care. As
          the founder of Mary Skin Care and Cosmetics (MSCC), she is committed
          to helping people understand their skin and make informed decisions
          about their skincare needs.
        </p>

        <p
          style={{
            color: "#555555",
            fontSize: "16px",
            lineHeight: "1.9",
            marginBottom: "18px",
          }}
        >
          Through MSCC, she provides trusted, science-based skincare education
          for people of all ages. Her approach emphasizes understanding
          individual skin concerns, developing appropriate skincare routines,
          and making informed choices that support healthy skin. She formulates
          products according to the need of an individual
        </p>

        <p
          style={{
            color: "#555555",
            fontSize: "16px",
            lineHeight: "1.9",
            marginBottom: "25px",
          }}
        >
          In addition to leading MSCC, Dr. Mary serves as the Chief of the
          Compounding Department. Her professional responsibilities complement
          her commitment to promoting informed, responsible, and health-focused
          skincare practices.
        </p>

        <div
          style={{
            borderLeft: "4px solid #E50920",
            paddingLeft: "18px",
            marginTop: "25px",
          }}
        >
          <p
            style={{
              color: "#10072F",
              fontSize: "17px",
              fontWeight: "600",
              lineHeight: "1.7",
              margin: 0,
            }}
          >
            "Empowering people with skincare knowledge for healthier skin and
            informed choices."
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
