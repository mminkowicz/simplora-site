import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../assets/styles.css';

import salesforce from '../assets/platforms/Salesforce Logo.jpeg';
import hubspot from '../assets/platforms/hubspot.png';

gsap.registerPlugin(ScrollTrigger);

const Platforms = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const logos = sectionRef.current.querySelectorAll('.platform-logo');
    gsap.fromTo(
      logos,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      }
    );
  }, []);

  return (
    <section id="platforms" className="section section-light" ref={sectionRef}>
      <h2 className="section-title">Platforms We Work With</h2>
      <div className="platforms-logos">
        <img src={salesforce} alt="Salesforce" className="platform-logo" />
        <img src={hubspot} alt="HubSpot" className="platform-logo" />
      </div>
    </section>
  );
};

export default Platforms;
