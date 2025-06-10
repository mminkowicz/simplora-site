import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  FaTools,
  FaCogs,
  FaPlug,
  FaRocket,
  FaSyncAlt,
  FaDatabase
} from 'react-icons/fa';
import '../assets/styles.css';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: <FaTools className="service-icon" />,
    title: 'System Management',
    description: 'Daily support and updates for CRMs and platforms like Salesforce, HubSpot, Monday, and more.'
  },
  {
    icon: <FaCogs className="service-icon" />,
    title: 'Customization',
    description: 'Tailored workflows, fields, layouts, and automation to match how your team actually works.'
  },
  {
    icon: <FaPlug className="service-icon" />,
    title: 'Integrations',
    description: 'Connect your CRMs, forms, emails, calendars, and tools into one seamless ecosystem.'
  },
  {
    icon: <FaRocket className="service-icon" />,
    title: 'Implementation',
    description: 'Full setup, data migration, and onboarding — fast, efficient, and ready to scale.'
  },
  {
    icon: <FaSyncAlt className="service-icon" />,
    title: 'Automation & Workflows',
    description: 'Build triggers, reminders, email/text flows, and time-saving automations.'
  },
  {
    icon: <FaDatabase className="service-icon" />,
    title: 'Data Services',
    description: 'Data cleanup, deduplication, segmentation, smart lists, and export/import help.'
  }
];

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
        clearProps: 'all'
      }
    );
  }, []);

  return (
    <section id="services" className="section section-light" ref={sectionRef}>
      <h2 className="section-title">Our Services</h2>
      <p className="section-subtitle">We handle your systems so you can handle your business.</p>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            {service.icon}
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
