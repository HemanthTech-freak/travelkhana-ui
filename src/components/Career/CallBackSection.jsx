/*Naishal Rajput-8866330*/
import React, { useState } from "react";
const CallbackSection = () => {
  const [message, setMessage] = useState("");
  const maxChar = 100;

  const handleCharCount = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Your query has been submitted!");
  };

  return (
    <section className="callback-section">
      <h1>Request a Call Back</h1>
      <form className="callback-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Enter your name" required />

        <label htmlFor="mobile">Mobile no.</label>
        <div>
            <input
            type="text"
            id="mobile"
            name="mobile"
            placeholder="Enter your mobile number"
            maxLength="10"
            required
          />
        </div>

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          maxLength={maxChar}
          placeholder="Enter your message"
          value={message}
          onChange={handleCharCount}
        ></textarea>
        <p id="char-count">
          You have <span>{maxChar - message.length}</span> characters left.
        </p>

        <button type="submit">Submit Query</button>
      </form>
    </section>
  );
};

export default CallbackSection;
