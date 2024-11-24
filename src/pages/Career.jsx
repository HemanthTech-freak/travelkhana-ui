/*Naishal Rajput - 8866330*/
import React from 'react';
import '../css/Career.css';
import Header from '../components/Header';
import CareerSection from '../components/Career/CareerSection';
import ContentSection from '../components/Career/ContentSection';
import JobSection from '../components/Career/JobSection';
import CallbackSection from '../components/Career/CallBackSection';
import Footer from '../components/Footer';


const Career = () => {
  return (
    <div>
        <Header/>
        <CareerSection/>
        <ContentSection/>
        <JobSection/>
        <CallbackSection/>
        <Footer />
    </div>
  );
};

export default Career;
