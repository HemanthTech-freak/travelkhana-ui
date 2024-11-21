/* Hemanth Kumar Yamanki - 8758198 */
import React from 'react';
import '../css/About_us.css';
import AboutSection from '../components/About-us/AboutSection';
import ContentSection from '../components/About-us/ContentSection';
import ServicesSection from '../components/About-us/ServicesSection';
import TeamSection from '../components/About-us/TeamSection';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TestimonialsSection from '../components/About-us/TestimonialsSection';


const AboutUs = () => {
  return (
    <div>
        <Header/>
        <ContentSection />
      <AboutSection />
      <ServicesSection/>
      <TestimonialsSection />
      <TeamSection />
      <Footer />
    </div>
  );
};

export default AboutUs;
