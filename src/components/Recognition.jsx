import "./Recognition.css";

const CERTIFICATIONS = [
  {
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    when: "Jun 2026",
  },
  {
    title: "NPTEL — Ethical Hacking, Cloud Computing, and Privacy & Security in Online Social Media",
    when: "2025",
  },
  { title: "Generative AI Project Bootcamp", when: "Aug 2025" },
  {
    title: "Certificate of Merit, 3rd Rank in End Semester Examinations",
    when: "2024–25",
  },
];

const ACHIEVEMENTS = [
  "1st prize, Technical Round at a symposium hosted by SSM College, Dindigul",
  "3rd rank for academic excellence in college",
  'Organized "Google Developers," a college-level technical event',
  "1750+ points on Skillrack",
];

const WORKSHOPS = [
  "UI/UX Design — wireframing, prototyping, and user-centered design",
  "Full Stack Development — MERN stack and web application development",
];

export default function Recognition() {
  return (
    <section id="recognition">
      <div className="container">
        <p className="eyebrow">Recognition</p>
        <h2 className="section-heading">Certifications, achievements, and workshops.</h2>
        <div className="recognition__grid">
          <div className="recognition__col">
            <h3 className="recognition__heading">Certifications</h3>
            <ul className="recognition__list">
              {CERTIFICATIONS.map((c) => (
                <li key={c.title}>
                  <span className="recognition__title">{c.title}</span>
                  <span className="recognition__when">{c.when}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="recognition__col">
            <h3 className="recognition__heading">Achievements</h3>
            <ul className="recognition__list recognition__list--plain">
              {ACHIEVEMENTS.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
            <h3 className="recognition__heading recognition__heading--spaced">
              Workshops
            </h3>
            <ul className="recognition__list recognition__list--plain">
              {WORKSHOPS.map((w) => (
                <li key={w}>{w}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
