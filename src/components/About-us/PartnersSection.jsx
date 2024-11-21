/* Hemanth Kumar Yamanki - 8758198 */
import React from 'react';

const partners = [
  '/Assets/img/partner1.png',
  '/Assets/img/partner2.png',
  '/Assets/img/partner3.png',
  '/Assets/img/partner4.png',
];

const PartnersSection = () => {
  return (
    <section className="partners-section">
      <h2>Our Trusted Partners</h2>
      <div className="partners-container">
        {partners.map((partner, index) => (
          <img src={partner} alt={`Partner ${index + 1}`} key={index} className="partner-logo" />
        ))}
      </div>
    </section>
  );
};

export default PartnersSection;
