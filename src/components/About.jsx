import "./About.css";

const FACTS = [
  { label: "CGPA", value: "9.2 / 10" },
  { label: "Skillrack points", value: "1750+" },
  { label: "Languages spoken", value: "3" },
];

export default function About() {
  return (
    <section id="about">
      <div className="container about__grid">
        <div>
          <p className="eyebrow">About</p>
          <h2 className="section-heading">
            Grounded in fundamentals, curious about where AI is taking software.
          </h2>
          <p className="about__body">
            I'm a Computer Science Engineering student at K.L.N. College of
            Engineering, Sivagangai, currently in my third year. Most of my
            time goes into strengthening data structures and algorithms and
            building web applications end to end &mdash; from a React
            interface down to the database behind it. A recent full-stack
            internship at DotComInfoway had me shipping a real apartment
            management system, and I've been using that same instinct for
            building things to explore AI agent platforms like Lyzr on the
            side.
          </p>
          <p className="about__body">
            Outside of code, I sketch interfaces in Figma, model in Blender,
            and organize what I learn in Notion. I speak English fluently,
            Tamil natively, and I'm picking up basic German.
          </p>
        </div>
        <dl className="about__facts">
          {FACTS.map((f) => (
            <div className="about__fact" key={f.label}>
              <dt>{f.label}</dt>
              <dd>{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
