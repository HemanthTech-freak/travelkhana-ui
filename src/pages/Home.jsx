import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import OffersSection from '../components/OffersSection';
import AppDownloadSection from '../components/AppDownloadSection';
import MediaReviews from '../components/MediaReviews';
import Footer from '../components/Footer';
import '../css/styles.css';
function Home() {
  return (
    <div className="home">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <OffersSection />
      <AppDownloadSection />
      <MediaReviews />
      <Footer />
    </div>
  );
}

export default Home;
