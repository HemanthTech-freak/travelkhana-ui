/* Hemanth Kumar Yamanki - 8758198 */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faTrain, faShieldAlt, faSmile } from '@fortawesome/free-solid-svg-icons';

const services = [
  { title: 'Food Delivery', desc: 'Order fresh, hygienic food from your favorite restaurants, delivered directly to your train seat.', icon: faUtensils },
  { title: 'Pan-India Coverage', desc: 'Access quality meals at major stations across India, tailored to your preferences.', icon: faTrain },
  { title: 'Customer Support', desc: 'Dedicated support to ensure timely delivery and customer satisfaction.', icon: faShieldAlt },
  { title: 'Happy Customers', desc: 'Join thousands of satisfied travelers who’ve made their journeys memorable with us.', icon: faSmile },
];

const ServicesSection = () => {
  return (
    <section className="services-section">
      <h2>Our Services</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div className="service-box" key={index}>
            <FontAwesomeIcon icon={service.icon} size="3x" className="service-icon" />
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
