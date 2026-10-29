import { site } from '../data/content.js';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__bar">
        <span>© {new Date().getFullYear()} {site.name}™</span>
        <span>Live in the digital world</span>
      </div>
    </footer>
  );
}
