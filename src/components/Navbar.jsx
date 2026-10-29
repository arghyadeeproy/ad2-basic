import { useState } from 'react';
import logo from '../assets/logo.png';
import { navLinks, site } from '../data/content.js';
import useScrolled from '../hooks/useScrolled.js';
import './Navbar.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled();
  const close = () => setOpen(false);

  return (
    <header className={`nav ${scrolled || open ? 'nav--solid' : ''}`}>
      <div className="container nav__bar">
        <a className="nav__logo" href="#top" onClick={close} aria-label={`${site.name} home`}>
          <img src={logo} alt="" width="76" height="47" />
        </a>

        <nav id="primary-nav" className={`nav__links ${open ? 'is-open' : ''}`} aria-label="Primary">
          <ul>
            {navLinks.map((l) => (
              <li key={l.href}><a href={l.href} onClick={close}>{l.label}</a></li>
            ))}
          </ul>
          <a className="btn btn--primary nav__cta" href="#contact" onClick={close}>Get a quote</a>
        </nav>

        <button
          type="button"
          className="nav__toggle"
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          <span aria-hidden="true" className="nav__burger" />
        </button>
      </div>
    </header>
  );
}
