import React from "react";

// Simple fade-in animation using CSS-in-JS
const fadeIn = {
  animation: "fadeIn 1.5s ease-in",
  "@keyframes fadeIn": {
    from: { opacity: 0, transform: "translateY(30px)" },
    to: { opacity: 1, transform: "translateY(0)" },
  },
};

const pastelBg = {
  background: "linear-gradient(135deg, #f5e1ff 0%, #dffcfb 100%)",
  minHeight: "100vh",
  padding: "0",
  margin: "0",
  fontFamily: "'Quicksand', 'Roboto', sans-serif",
};

const heroSection = {
  background: "linear-gradient(120deg, #a8edea 0%, #fed6e3 100%)",
  borderRadius: "2rem",
  padding: "3rem 2rem 2rem 2rem",
  margin: "2rem auto",
  maxWidth: 900,
  textAlign: "center" as const,
  boxShadow: "0 6px 24px rgba(120, 150, 200, 0.15)",
  ...fadeIn,
};

const heroImage = {
  width: "200px",
  borderRadius: "50%",
  boxShadow: "0 4px 24px rgba(120, 150, 200, 0.15)",
  margin: "1rem auto 2rem auto",
  display: "block",
};

const section = {
  margin: "2.5rem auto",
  maxWidth: 900,
  padding: "2rem",
  borderRadius: "1.5rem",
  background: "rgba(255,255,255,0.7)",
  boxShadow: "0 2px 12px rgba(120, 150, 200, 0.08)",
  ...fadeIn,
};

const cardGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "1.7rem",
  marginTop: "2rem",
};

const card = {
  background: "linear-gradient(140deg, #ffe3e3 50%, #e0c3fc 100%)",
  borderRadius: "1.2rem",
  padding: "1.3rem",
  boxShadow: "0 1px 9px rgba(150, 150, 180, 0.10)",
  textAlign: "center" as const,
  minHeight: "180px",
  transition: "transform 0.2s",
  cursor: "pointer",
};

const ctaButton = {
  background: "linear-gradient(90deg, #b9deed 0%, #efefef 100%)",
  border: "none",
  color: "#3e3b92",
  fontWeight: 700,
  fontSize: "1.18rem",
  padding: "1rem 2.5rem",
  borderRadius: "2rem",
  cursor: "pointer",
  margin: "2rem auto 0 auto",
  boxShadow: "0 2px 8px rgba(120, 150, 200, 0.15)",
  transition: "background 0.3s, transform 0.15s",
  animation: "bounceIn 1.2s cubic-bezier(0.68, -0.55, 0.27, 1.55)",
};

const keyframes = `
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(30px);}
  to { opacity: 1; transform: translateY(0);}
}
@keyframes bounceIn {
  0% { transform: scale(0.7);}
  60% { transform: scale(1.1);}
  100% { transform: scale(1);}
}
`;

const subjectCards = [
  {
    title: "Mathematics",
    image: "https://cdn.pixabay.com/photo/2017/01/31/13/14/education-2022442_1280.png",
    desc: "Fun with numbers, puzzles, and logic games!",
  },
  {
    title: "Science",
    image: "https://cdn.pixabay.com/photo/2016/04/01/09/30/chemistry-1293751_1280.png",
    desc: "Explore experiments and cool discoveries.",
  },
  {
    title: "English",
    image: "https://cdn.pixabay.com/photo/2017/01/13/01/28/english-1972462_1280.png",
    desc: "Stories, poems, and creative writing.",
  },
  {
    title: "Social Studies",
    image: "https://cdn.pixabay.com/photo/2017/03/31/13/05/map-2196841_1280.png",
    desc: "Learn about people, places, and history.",
  },
  {
    title: "Computer",
    image: "https://cdn.pixabay.com/photo/2017/01/31/19/12/computer-2025797_1280.png",
    desc: "Coding, games, and fun technology.",
  },
];

const Home: React.FC = () => (
  <div style={pastelBg}>
    <style>{keyframes}</style>
    <main>
      {/* HERO SECTION */}
      <section style={heroSection}>
        <img
          src="https://cdn.pixabay.com/photo/2017/01/10/19/05/children-1973787_1280.png"
          alt="Happy students"
          style={heroImage}
        />
        <h1 style={{ fontSize: "2.7rem", color: "#3e3b92", fontWeight: 800, marginBottom: "0.7rem" }}>
          Welcome to Chill Schooling!
        </h1>
        <p style={{ color: "#5c5470", fontSize: "1.35rem", margin: "0.6rem auto 0.5rem auto", maxWidth: 600 }}>
          Your fun and friendly learning place. Discover, explore, and grow with interactive lessons, quizzes, and resources for every curious mind!
        </p>
        <button style={ctaButton} onClick={() => window.location.href = "/signup"}>
          Start Learning Now!
        </button>
      </section>

      {/* SUBJECTS GRID */}
      <section style={section}>
        <h2 style={{ color: "#3e3b92", fontWeight: 700, textAlign: "center", marginBottom: "1.5rem" }}>
          Explore Our Subjects
        </h2>
        <div style={cardGrid}>
          {subjectCards.map(cardInfo => (
            <div key={cardInfo.title} style={card} tabIndex={0}>
              <img src={cardInfo.image} alt={cardInfo.title} style={{ width: "60px", marginBottom: "1rem" }} />
              <h3 style={{ fontSize: "1.15rem", color: "#3e3b92", fontWeight: 700, margin: 0 }}>{cardInfo.title}</h3>
              <p style={{ fontSize: "0.98rem", color: "#56477c", marginTop: "0.4rem" }}>{cardInfo.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MISSION / INFO SECTION */}
      <section style={section}>
        <h2 style={{ color: "#3e3b92", fontWeight: 700, textAlign: "center" }}>
          Our Mission
        </h2>
        <p style={{ color: "#56477c", fontSize: "1.12rem", textAlign: "center", maxWidth: 700, margin: "1.2rem auto" }}>
          At Chill Schooling, we believe education should be exciting and accessible for every student. Our goal is to spark curiosity, build confidence, and help you achieve your best—all in a vibrant, student-friendly environment.
        </p>
        <img
          src="https://cdn.pixabay.com/photo/2018/01/23/21/43/school-3100993_1280.png"
          alt="School mission"
          style={{ display: "block", margin: "1.2rem auto 0 auto", width: "120px" }}
        />
      </section>

      {/* RESOURCES / TIPS SECTION */}
      <section style={section}>
        <h2 style={{ color: "#3e3b92", fontWeight: 700, textAlign: "center" }}>
          Student Resources
        </h2>
        <ul style={{ color: "#56477c", fontSize: "1.07rem", maxWidth: 600, margin: "1.2rem auto", lineHeight: 1.7 }}>
          <li>Interactive Quizzes &amp; Games</li>
          <li>Downloadable Worksheets</li>
          <li>Study Tips &amp; Motivation</li>
          <li>Fun Projects &amp; Challenges</li>
        </ul>
      </section>
    </main>
  </div>
);

export default Home;
