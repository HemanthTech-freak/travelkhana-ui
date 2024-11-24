// Aleena Thekla Mary - 8830952
import React from "react";
import '../css/Contact_us.css';
import Header from '../components/Header';
import ContactHeader from "../components/Contact-us/ContactHeader";
import ContactDetails from "../components/Contact-us/ContactDetails";
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div>
      <Header />
      <ContactHeader />
      <ContactDetails />
      <Footer />
    </div>
  );
};

export default Contact;
