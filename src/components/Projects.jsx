import "./Projects.css";

const PROJECTS = [
  {
    name: "Resumly",
    tagline: "AI-powered resume builder",
    description:
      "A responsive web app for assembling a resume with AI assistance. Built the interface around a real-time preview, so every edit shows up on the page instantly, with template customization for different layouts.",
    stack: ["HTML", "CSS", "JavaScript"],
  },
  {
    name: "GutInstinct",
    tagline: "Food recommendation system",
    description:
      "A web app that recommends food based on personal preference. Used React.js and Next.js to keep the interface dynamic, surfacing suggestions that adapt as the user interacts with the app.",
    stack: ["React.js", "Next.js"],
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <p className="eyebrow">Projects</p>
        <h2 className="section-heading">Things I've built.</h2>
        <div className="projects__list">
          {PROJECTS.map((p, i) => (
            <article
              className={`project ${i % 2 === 1 ? "project--reverse" : ""}`}
              key={p.name}
            >
              <div className="project__index">0{i + 1}</div>
              <div className="project__text">
                <h3 className="project__name">{p.name}</h3>
                <p className="project__tagline">{p.tagline}</p>
                <p className="project__description">{p.description}</p>
                <div className="project__stack">
                  {p.stack.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
