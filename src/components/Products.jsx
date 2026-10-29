import { products } from '../data/content.js';
import './Products.css';

export default function Products() {
  return (
    <section className="section" id="displays">
      <div className="container">
        <h2>Screens that stop people mid-step.</h2>
        <p className="section__sub">
          From finest-pitch indoor walls to weatherproof outdoor billboards, every display is made to your size, site and content.
        </p>
        <div className="products">
          {products.map((p) => (
            <article className="product" key={p.title}>
              <div className={`product__media ${p.cover ? 'is-cover' : ''}`}>
                <img src={p.image} alt={p.alt} loading="lazy" />
              </div>
              <div className="product__body">
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
