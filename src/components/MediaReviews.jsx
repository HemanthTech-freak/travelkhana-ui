import React from 'react';

function MediaReviews() {
  const mediaLogos = [
    { img: "/Assets/img/et-logo.jpg", alt: "Economic Times" },
    { img: "/Assets/img/mint-logo-v2.jpg", alt: "Mint" },
    { img: "/Assets/img/logo_yourstory.jpg", alt: "Your Story" },
    { img: "/Assets/img/firstpost-n.png", alt: "Firstpost" },
  ];

  return (
    <section className="media-reviews">
      <h2>As Featured In</h2>
      <p className="media-subtitle">Travelkhana has been featured and reviewed by top media houses.</p>
      <div className="media-grid">
        {mediaLogos.map((logo, index) => (
          <div className="media-logo" key={index}>
            <img src={logo.img} alt={logo.alt} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default MediaReviews;
