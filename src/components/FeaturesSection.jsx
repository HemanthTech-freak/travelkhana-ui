import React from 'react';

function FeaturesSection() {
  const features = [
    {
      img: "/Assets/img/search_train.png",
      title: "Select Train",
      description: "Enter your train details to see available meal options."
    },
    {
      img: "/Assets/img/food_option.png",
      title: "Choose Your Meal",
      description: "Browse a wide range of tasty options from local eateries."
    },
    {
      img: "/Assets/img/fresh_food.png",
      title: "Enjoy Fresh Food",
      description: "Get hot, delicious meals delivered right to your seat."
    }
  ];

  return (
    <section className="features">
      <h2>How It Works</h2>
      <p className="section-subtitle">Get tasty meals delivered with ease and convenience.</p>
      <div className="features-list">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <img src={feature.img} alt={feature.title} className="feature-icon" />
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturesSection;
