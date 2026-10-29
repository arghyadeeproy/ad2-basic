import { projects } from '../data/content.js';
import './OurWork.css';

export default function OurWork() {
  const hasProjects = projects.length > 0;

  return (
    <section className="section work" id="work">
      <div className="container">
        <h2>Our work</h2>
        {hasProjects ? (
          <div className="work__grid">
            {projects.map((p) => (
              <figure key={p.title} className="work__item">
                <img src={p.image} alt={p.alt} loading="lazy" />
                <figcaption>{p.title}<span>{p.category}</span></figcaption>
              </figure>
            ))}
          </div>
        ) : (
          <>
            <p className="section__sub">Our project gallery is being put together. Check back soon.</p>
            <span className="work__badge"><i aria-hidden="true" />Coming soon</span>
          </>
        )}
      </div>
    </section>
  );
}
