// Aleena Thekla Mary - 8830952
import React from "react";

const ContactDetails = () => {
    return (
        <div className="contact-container">
            <div className="contact-info">
                {/* Left Section */}
                <div className="contact-column">
                    <p>
                        <span className="bold">travelkhana.com</span> is run and managed
                        by our experienced developers in Kitchener.
                    </p>
                    <p>
                        Place your order through our hotline contact number at{" "}
                        <span className="phone-number">437 454 0099</span> from 7:00 AM to
                        11:30 PM.
                    </p>
                    <p>
                        For any other inquiries or media purposes you can always you can reach us at:
                        <br />
                        <span><i className="fas fa-phone"></i></span> 0100-95921557 (9 AM to 6 PM, Mon to Sat)
                        <br />
                        <span><i className="fas fa-envelope"></i></span>{" "}
                        <a href="mailto:contact@travelkhana.com" className="email">
                            reception@travelkhana.com
                        </a>
                    </p>
                </div>

                {/* Right Section */}
                <div className="contact-column">
                    <p>
                        <span className="bold">New Office Address:</span>
                        <br />
                        Travel Khana, 666 Fairway Rd S,Unit 5 and 6, Kitchener, ON N2C 1X3
                    </p>
                    <p>
                        <span className="bold">Registered Address:</span>
                        <br />
                        Travel Khana, 362 King St N, Unit 8 and 9, Waterloo, ON N2J 2Z2
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ContactDetails;