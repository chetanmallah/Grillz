import React from 'react';
import './AboutUs.css';
import { assets } from '../../assets/assets';

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="about-us-content">
        <h1>About Grillz</h1>
        <div className="about-us-intro">
          <img src={assets.aboutus} alt="Grillz Restaurant" className="about-us-image" />
          <p>Welcome to Grillz, where we bring you the best grilled dishes with a unique twist. Our passion for great food and exceptional service is at the heart of everything we do.</p>
        </div>

        <h2>Our Story</h2>
        <p>Grillz started with a simple mission: to serve delicious, high-quality grilled food in a welcoming atmosphere. Our team of chefs and staff are dedicated to making every visit a memorable one, whether you're here for a quick lunch or a special dinner with friends and family.</p>

        <h2>Our Mission</h2>
        <p>Our mission is to provide an exceptional dining experience by offering mouth-watering grilled dishes made from the freshest ingredients. We believe that good food should bring people together, and we strive to create a warm and inviting environment for our guests.</p>

        <h2>Our Team</h2>
        <p>Our team is a group of passionate individuals who share a love for great food and hospitality. From our skilled chefs to our friendly servers, everyone at Grillz is committed to delivering the best dining experience possible.</p>

        <h2>Visit Us</h2>
        <p>We invite you to visit us and experience the flavors of Grillz for yourself. Whether you're looking for a hearty meal or just a quick bite, we're here to make your dining experience unforgettable.</p>
      </div>
    </div>
  );
};

export default AboutUs;
