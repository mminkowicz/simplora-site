import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Booking.css';

gsap.registerPlugin(ScrollTrigger);

const Booking = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 90%',
          once: true,
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="booking-section">
      <h2 className="booking-title">Book a Free Intro Call</h2>
      <p className="booking-description">
        Let’s chat about your business needs and see how Simplora can help optimize your systems.
      </p>
      <a
        className="booking-button"
        href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0nKP6Il-6Uc-eZzq2QhEnUVisQsTBxAYwWPhaaPsMhEJQYzZIxy0Od4ex36yk1AvwSLKr49cFY?gv=true"
        target="_blank"
        rel="noopener noreferrer"
      >
        Schedule Now
      </a>
    </section>
  );
};

export default Booking;
