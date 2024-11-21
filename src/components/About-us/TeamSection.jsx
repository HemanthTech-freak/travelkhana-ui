/* Hemanth Kumar Yamanki - 8758198 */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const teamMembers = [
  { name: 'Pushpinder Singh', role: 'Founder & CEO' },
  { name: 'Matteo Chiampo', role: 'Chief Advisor & Strategic Investor' },
];

const TeamSection = () => {
  return (
    <section className="team-section">
      <h2>Meet Our Team</h2>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div className="team-member" key={index}>
            <FontAwesomeIcon icon={faUser} size="5x" className="team-icon" />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
