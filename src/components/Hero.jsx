import { useEffect, useRef } from 'react';
import heroVideo from '../assets/hero.mp4';
import { site } from '../data/content.js';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion.js';
import './Hero.css';

export default function Hero() {
  const videoRef = useRef(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (reduced) v.pause();
    else v.play().catch(() => {});
  }, [reduced]);

  return (
    <section className="hero" id="top">
      <video ref={videoRef} className="hero__video" src={heroVideo} autoPlay muted loop playsInline preload="auto" aria-hidden="true" />
      <div className="hero__shade" />
      <div className="container hero__content">
        <span className="hero__rule" />
        <h1>{site.tagline}</h1>
        <p className="hero__lead">{site.intro}</p>
        <div className="hero__cta">
          <a className="btn btn--primary" href="#contact">Talk to our team</a>
          <a className="btn btn--ghost" href="#displays">Explore displays</a>
        </div>
      </div>
    </section>
  );
}
