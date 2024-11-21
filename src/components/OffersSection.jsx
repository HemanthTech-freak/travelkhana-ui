import React from 'react';

function OffersSection() {
  const offers = [
    {
      img: "/Assets/img/Offer1.png",
      alt: "Travelkhana Offer",
      description: "Enjoy exclusive discounts on group orders and meal combos!"
    },
    {
      img: "/Assets/img/Offer2.png",
      alt: "Veg, Non-Veg, Jain Food",
      description: "Tasty options for all dietary needs - Veg, Non-Veg, and Jain."
    },
    {
      img: "/Assets/img/Offer3.png",
      alt: "Food for Religious Group",
      description: "Special offers for large groups and religious gatherings."
    },
    {
      img: "/Assets/img/Offer4.png",
      alt: "We Deliver Everywhere",
      description: "Food delivery wherever your journey takes you across India."
    }
  ];

  return (
    <section className="offers-section">
      <h2>Exclusive Offers & Deals</h2>
      <div className="offers-grid">
        {offers.map((offer, index) => (
          <div className="offer-card" key={index}>
            <img src={offer.img} alt={offer.alt} className="offer-image" />
            <div className="offer-info">
              <p className="offer-description">{offer.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OffersSection;
