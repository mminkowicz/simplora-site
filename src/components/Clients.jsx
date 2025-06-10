import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../assets/styles.css';

import agudah from '../assets/Clients/agudah.png';
import chabadMiami from '../assets/Clients/chabad-miami.png';
import ecomDiversify from '../assets/Clients/ecom-diversify.png';
import forwardPPC from '../assets/Clients/forward-ppc.png';
import machane from '../assets/Clients/machane-israel.png';

gsap.registerPlugin(ScrollTrigger);

const Clients = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const logos = sectionRef.current.querySelectorAll('.client-logo');
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
          toggleActions: 'play none none none',
        },
        clearProps: 'all',
      }
    );
  }, []);

  return (
    <section id="clients" className="clients-section" ref={sectionRef}>
      <h2 className="section-title">Our Clients</h2>
      <div className="clients-logos">
        <img src={agudah} alt="Agudah Israel" className="client-logo" />
        <img src={chabadMiami} alt="Chabad of Miami" className="client-logo" />
        <img src={ecomDiversify} alt="Ecom Diversify" className="client-logo" />
        <img src={forwardPPC} alt="Forward PPC" className="client-logo" />
        <img src={machane} alt="Machane Yisrael" className="client-logo" />
      </div>
    </section>
  );
};

export default Clients;
