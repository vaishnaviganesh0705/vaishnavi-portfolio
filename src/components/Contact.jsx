import "./Contact.css";

const LINKS = [
  { label: "Email", value: "vaishuganesh0709@gmail.com", href: "mailto:vaishuganesh0709@gmail.com" },
  { label: "Phone", value: "+91 93452 22107", href: "tel:+919345222107" },
  { label: "LinkedIn", value: "linkedin.com/in/vaishnavi-n-g0709", href: "https://linkedin.com/in/vaishnavi-n-g0709" },
  { label: "GitHub", value: "github.com/vaishnaviganesh0705", href: "https://github.com/vaishnaviganesh0705" },
  { label: "LeetCode", value: "leetcode.com/vaishnaving", href: "https://leetcode.com/vaishnaving" },
];

export default function Contact() {
  return (
    <section id="contact">
      <div className="container contact__grid">
        <div>
          <p className="eyebrow">Contact</p>
          <h2 className="section-heading">Let's talk about an opportunity.</h2>
          <p className="contact__body muted">
            I'm looking for internship and entry-level developer roles where
            I can keep building full-stack products and learning fast. Reach
            out directly — I reply quickly.
          </p>
        </div>
        <ul className="contact__list">
          {LINKS.map((l) => (
            <li key={l.label}>
              <a href={l.href} target={l.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                <span className="contact__label">{l.label}</span>
                <span className="contact__value">{l.value}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
