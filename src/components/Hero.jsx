import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../assets/styles.css';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top 80%',
        },
      }
    );
  }, []);

  return (
    <section id="hero" className="hero" ref={heroRef}>
      <div className="hero-content" style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <h2>
          <span style={{ color: 'var(--color-primary-main)' }}>Simplify</span> your business systems
        </h2>
        <p>
          We handle your <strong>management</strong>, <strong>customization</strong>, <strong>integration</strong>, and <strong>implementation</strong> — so you can focus on growth.
        </p>
        <a href="#services" className="btn">Explore Services</a>
      </div>

      {/* Optional visual element (undraw SVG or gradient blob) */}
      {/* <img src="/assets/hero-illustration.svg" alt="Hero" className="hero-illustration" /> */}
    </section>
  );
};

export default Hero;
