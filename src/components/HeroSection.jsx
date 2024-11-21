import React from 'react';

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Delicious Food Delivered to Your Train Seat</h1>
        <p>Experience fresh, tasty meals delivered on your journey across India.</p>
        <div className="search-bar">
          <input type="text" placeholder="Enter Train No/Name" />
          <input type="text" placeholder="Enter Boarding Station" />
          <input type="date" placeholder="Boarding Date" />
          <input type="text" placeholder="Enter 10 Digit PNR No" />
          <button className="cta-button">Order Now</button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
