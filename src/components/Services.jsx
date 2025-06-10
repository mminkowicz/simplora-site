import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../assets/styles.css';

import { FaTools, FaCogs, FaPlug, FaRocket } from 'react-icons/fa';

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
        },
        clearProps: 'all',
      }
    );
  }, []);

  return (
    <section id="services" className="section section-light" ref={sectionRef}>
      <h2 className="section-title">Our Services</h2>
      <p className="section-subtitle">From setup to automation, we handle every step of your system journey.</p>
      <div className="services-grid">
        <div className="service-card">
          <FaTools className="service-icon" />
          <h3>System Management</h3>
          <p>We manage your CRM and business tools day-to-day so you don’t have to.</p>
        </div>
        <div className="service-card">
          <FaCogs className="service-icon" />
          <h3>Customization</h3>
          <p>Tailored solutions designed to fit your exact business workflows and needs.</p>
        </div>
        <div className="service-card">
          <FaPlug className="service-icon" />
          <h3>Integration</h3>
          <p>Connect all your apps and tools into one seamless, automated system.</p>
        </div>
        <div className="service-card">
          <FaRocket className="service-icon" />
          <h3>Implementation</h3>
          <p>We set up and launch your systems fast, efficiently, and ready to scale.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
