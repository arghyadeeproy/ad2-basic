import { solutions } from '../data/content.js';
import './Solutions.css';

export default function Solutions() {
  return (
    <section className="section" id="solutions">
      <div className="container solutions">
        <div>
          <h2>{solutions.heading}</h2>
          <p className="section__sub">{solutions.text}</p>
          <p className="solutions__industries">
            <strong>Who we work with:</strong> {solutions.industries}
          </p>
        </div>
        <ul className="solutions__list">
          {solutions.items.map((item) => (<li key={item}>{item}</li>))}
        </ul>
      </div>
    </section>
  );
}
