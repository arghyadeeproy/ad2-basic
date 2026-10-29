import { site } from '../data/content.js';
import './Contact.css';

const channels = [
  { label: 'Call', value: site.phoneDisplay, href: `tel:${site.phone}` },
  { label: 'Email', value: site.email, href: `mailto:${site.email}` },
  { label: 'Website', value: site.websiteDisplay, href: site.website, external: true },
];

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <h2>Tell us about your space.</h2>
        <p className="section__sub">Share the location, size and goal. We will reply with options and a quote.</p>
        <div className="contact">
          {channels.map((c) => (
            <a key={c.label} className="contact__card" href={c.href} {...(c.external && { target: '_blank', rel: 'noopener noreferrer' })}>
              <small>{c.label}</small>
              <strong>{c.value}</strong>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
