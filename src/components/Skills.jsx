import "./Skills.css";

const GROUPS = [
  { label: "Languages", items: ["C", "C++", "Java", "Python"] },

  { label: "Frontend", items: ["HTML", "CSS", "JavaScript", "React.js"] },

  { label: "Backend", items: ["FastAPI"] },

  { label: "Database & Cloud", items: ["MySQL", "Vercel"] },

  { label: "Core Concepts", items: ["Data Structures & Algorithms", "OOP", "DBMS"] },

  { label: "Design", items: ["Figma", "Canva", "Blender"] },

  { label: "Tools", items: ["Git", "GitHub", "VS Code", "Eclipse", "Jupyter Notebook"] },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <p className="eyebrow">Skills</p>
        <h2 className="section-heading">What I reach for when I build.</h2>
        <div className="skills__grid">
          {GROUPS.map((g) => (
            <div className="skills__group" key={g.label}>
              <h3 className="skills__label">{g.label}</h3>
              <div className="skills__items">
                {g.items.map((item) => (
                  <span className="skills__chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
