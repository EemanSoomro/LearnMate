import React from 'react';
import './AboutUs.css';
import teacher1 from '../../assets/Teacher1.png';
import teacher2 from '../../assets/Teacher2.png';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <header className="about-us-header">
        <h1>About Us</h1>
        <p>Welcome to LearnMate, where we are committed to providing quality education through our comprehensive and diverse courses.</p>
      </header>
      
      <section className="mission-statement">
        <h2>Our Mission</h2>
        <p>Our mission is to empower learners from all walks of life by offering high-quality, accessible, and affordable courses. We aim to foster an environment of continuous learning and personal growth.</p>
      </section>

      <section className="our-team">
        <h2>Meet Our Team</h2>
        <div className="team-member">
        <img src={teacher1} alt="" />
          <h3>Jane Doe</h3>
          <p>Founder & CEO</p>
          <p>Jane is passionate about education and has over 15 years of experience in the industry. She leads our team with a vision of excellence.</p>
        </div>
        <div className="team-member">
        <img src={teacher2} alt="" />
          <h3>John Smith</h3>
          <p>CTO</p>
          <p>John oversees the technical aspects of our platform, ensuring that our technology is cutting-edge and user-friendly.</p>
        </div>
        {/* Add more team members as needed */}
      </section>

      <section className="our-story">
        <h2>Our Story</h2>
        <p>LearnMate was founded in 2024 with the goal of making quality education accessible to everyone. Our journey started with a small team and a big vision, and we have grown to become a leading provider of online courses.</p>
      </section>

      <section className="contact-info">
        <h2>Contact Us</h2>
        <p>If you have any questions or would like to get in touch with us, please feel free to reach out.</p>
        <p>Email: support@LearnMate.com</p>
        <p>Phone: (123) 456-7890</p>
      </section>

      <footer className="cta">
        <h2>Ready to Learn?</h2>
        <p>Explore our wide range of courses and take the next step in your learning journey.</p>
        <button onClick={() => window.location.href='/courses'}>Browse Courses</button>
      </footer>
    </div>
  );
};

export default AboutUs;
