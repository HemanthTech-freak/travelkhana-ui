/*Naishal Rajput - 8866330*/
import React, { useState } from 'react';

const JobSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const jobOpenings = [
    {
      title: "Android Developer",
      description:
        "We are looking for an Android developer responsible for the development and maintenance of mobile applications. The primary focus will be the development of Android applications and integration with the back-end services.",
      experience: "1 to 6 years",
      skills: [
        "B.E./B.Tech/M.C.A. (Tier I Colleges - IIT/BITS/NIT preferred)",
        "1-3 years of relevant work experience in native mobile app development",
        "Strong knowledge of OOPS concepts, Java, and Android SDK",
        "Experience with web service integration (SOAP, REST, JSON, XML), third-party libraries, and APIs",
        "Experience with offline storage, SQLite, threading, and performance optimization",
        "Solid understanding of the software development lifecycle",
        "Experience in wireframing and UI/UX design is a plus",
        "Working knowledge of version control systems like SVN/GIT",
        "Strong analytical and problem-solving skills",
      ],
      responsibilities: [
        "Understand the business requirements and translate them into technical requirements",
        "Collaborate with other team members and stakeholders to gather requirements and conceptualize product features",
        "Design and develop intuitive and user-friendly features for mobile applications",
        "Follow coding best practices and maintain high-quality code",
      ],
    },
    {
      title: "Frontend Developer",
      description:
        "We are seeking a skilled Frontend Developer to design and implement modern, user-friendly web interfaces. Your role will be crucial in shaping the user experience for our clients.",
      experience: "2 to 5 years",
      skills: [
        "Proficiency in HTML, CSS, and JavaScript",
        "Experience with React.js or Angular",
        "Strong understanding of responsive design principles",
        "Familiarity with version control tools like Git",
        "Basic understanding of server-side rendering and APIs",
      ],
      responsibilities: [
        "Build scalable and efficient front-end features",
        "Collaborate with designers to ensure the best user experience",
        "Optimize web interfaces for speed and scalability",
        "Debug and resolve performance bottlenecks in UI",
      ],
    },
    {
      title: "Backend Developer",
      description:
        "Join our team as a Backend Developer, where you'll be responsible for building and maintaining robust server-side logic to support our applications.",
      experience: "3 to 7 years",
      skills: [
        "Proficiency in Node.js, Python, or Java",
        "Experience with RESTful API design and development",
        "Familiarity with database systems like MySQL, PostgreSQL, or MongoDB",
        "Understanding of cloud platforms (AWS/GCP/Azure)",
        "Strong debugging and problem-solving skills",
      ],
      responsibilities: [
        "Design and maintain server-side architecture",
        "Build reusable code and libraries for future use",
        "Ensure high performance and responsiveness of backend systems",
        "Collaborate with frontend developers to integrate user-facing elements",
      ],
    },
    {
      title: "UI/UX Designer",
      description:
        "We are looking for a creative UI/UX Designer to craft engaging user experiences. Your work will directly impact how users interact with our products.",
      experience: "2 to 5 years",
      skills: [
        "Proficiency in design tools like Figma, Sketch, or Adobe XD",
        "Experience with wireframing and prototyping",
        "Understanding of user research and usability testing",
        "Ability to create visually appealing designs",
        "Strong communication and collaboration skills",
      ],
      responsibilities: [
        "Translate user requirements into design concepts",
        "Design intuitive and user-friendly interfaces",
        "Collaborate with developers to ensure seamless implementation",
        "Conduct user research and iterate designs based on feedback",
      ],
    },
    {
      title: "DevOps Engineer",
      description:
        "We are hiring a DevOps Engineer to streamline our development and deployment processes. Your role will focus on automating workflows and ensuring system reliability.",
      experience: "3 to 8 years",
      skills: [
        "Experience with CI/CD pipelines",
        "Proficiency in Docker and Kubernetes",
        "Knowledge of cloud platforms like AWS, Azure, or GCP",
        "Familiarity with configuration management tools (Ansible, Chef, Puppet)",
        "Strong scripting skills (Python, Bash, etc.)",
      ],
      responsibilities: [
        "Automate deployment and monitoring processes",
        "Ensure system uptime and reliability",
        "Collaborate with development teams to improve workflows",
        "Optimize infrastructure for performance and scalability",
      ],
    },
    {
      title: "QA Engineer",
      description:
        "We are seeking a QA Engineer to ensure the quality and performance of our applications. You will play a key role in identifying bugs and improving product reliability.",
      experience: "1 to 4 years",
      skills: [
        "Experience with manual and automated testing",
        "Proficiency in testing tools like Selenium or Cypress",
        "Understanding of API testing and performance testing",
        "Strong attention to detail",
        "Ability to write and execute test plans",
      ],
      responsibilities: [
        "Develop and execute test plans",
        "Identify and document software defects",
        "Collaborate with developers to resolve issues",
        "Ensure applications meet functional and performance requirements",
      ],
    },
  ];

  return (
    <section className="job-section">
      <h1>Current Openings</h1>
      {jobOpenings.map((job, index) => (
        <div className="job-dropdown" key={index}>
          <button
            onClick={() => toggleDropdown(index)}
            className="dropdown-btn"
          >
            {job.title}
          </button>
          {openIndex === index && (
            <div className="dropdown-content">
              <p>{job.description}</p>
              <h2>Experience: {job.experience}</h2>
              <h3>Required Skills:</h3>
              <ul>
                {job.skills.map((skill, skillIndex) => (
                  <li key={skillIndex}>{skill}</li>
                ))}
              </ul>
              <h3>Roles & Responsibilities:</h3>
              <ul>
                {job.responsibilities.map((resp, respIndex) => (
                  <li key={respIndex}>{resp}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default JobSection;
