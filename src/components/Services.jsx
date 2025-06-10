import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../assets/styles.css';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = sectionRef.current.querySelectorAll('.service-card');
    gsap.fromTo(
      cards,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        clearProps: 'all' // clears inline styles after animation
      }
    );
  }, []);

  return (
    <section id="services" className="section services-section" ref={sectionRef}>
      <h2 className="section-title">Our Services</h2>
      <div className="services-grid">
        <div className="service-card">
          <h3>System Management</h3>
          <p>We manage your CRM and tools day-to-day so you don’t have to.</p>
        </div>
        <div className="service-card">
          <h3>Customization</h3>
          <p>Tailored solutions built to match your exact workflow.</p>
        </div>
        <div className="service-card">
          <h3>Integration</h3>
          <p>Seamlessly connect all your apps, tools, and platforms.</p>
        </div>
        <div className="service-card">
          <h3>Implementation</h3>
          <p>We get your systems up and running fast and effectively.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
