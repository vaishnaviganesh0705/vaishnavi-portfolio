import "./Journey.css";

const EVENTS = [
  {
    period: "2022 – 2023",
    title: "Higher Secondary Certificate",
    place: "Sourashtra Girls Higher Secondary School, Madurai",
    detail: "Completed HSC with 88.7%.",
  },
  {
    period: "2023 – 2027",
    title: "B.E. Computer Science and Engineering",
    place: "K.L.N. College of Engineering, Sivagangai",
    detail: "Currently pursuing, CGPA 9.2 / 10 (87.40%).",
  },
  {
    period: "Jun – Jul 2026",
    title: "Full Stack Development Intern",
    place: "DotComInfoway, Madurai",
    detail:
      "Built a Smart Society Management and Resident Services System — resident registration, payment tracking, complaint handling, announcements, and role-based authentication.",
  },
];

export default function Journey() {
  return (
    <section id="journey">
      <div className="container">
        <p className="eyebrow">Journey</p>
        <h2 className="section-heading">Education and experience so far.</h2>
        <ol className="journey__list">
          {EVENTS.map((e) => (
            <li className="journey__item" key={e.title}>
              <div className="journey__period">{e.period}</div>
              <div className="journey__marker" aria-hidden="true" />
              <div className="journey__content">
                <h3 className="journey__title">{e.title}</h3>
                <p className="journey__place">{e.place}</p>
                <p className="journey__detail">{e.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
