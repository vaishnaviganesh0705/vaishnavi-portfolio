import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>&copy; {year} Vaishnavi N.G</span>
        <span className="footer__note">Built with React, deployed on Vercel</span>
      </div>
    </footer>
  );
}
