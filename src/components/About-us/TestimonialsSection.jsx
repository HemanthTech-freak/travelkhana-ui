/* Hemanth Kumar Yamanki - 8758198 */
import React from 'react';

const testimonials = [
  {
    name: 'Hemanth Kumar',
    feedback: 'Travelkhana made my journey so much better! The food was fresh and delivered right to my seat.',
    avatar: '/Assets/img/team1.jpg',
  },
  {
    name: 'Sid Malhotra',
    feedback: 'Loved the convenience of having delicious regional food while traveling. Highly recommended!',
    avatar: '/Assets/img/team2.jpg',
  },
  {
    name: 'Naishal Rajput',
    feedback: 'Exceptional service! Travelkhana exceeded my expectations.',
    avatar: '/Assets/img/team3.jpg',
  },
];

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section">
      <h2>What Our Customers Say</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <img src={testimonial.avatar} alt={testimonial.name} className="customer-avatar" />
            <p className="customer-feedback">"{testimonial.feedback}"</p>
            <h3 className="customer-name">{testimonial.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
