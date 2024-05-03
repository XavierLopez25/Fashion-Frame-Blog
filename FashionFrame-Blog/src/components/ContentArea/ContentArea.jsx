import React, { useState } from 'react';
import '../../styles/ContentArea.css';

const Main = ({ currentSection }) => {
  const renderSection = () => {
    switch (currentSection) {
      case 'HOME':
        return (
          <div className="home-container">
            <div className="image-bannerH"></div>
            <div className="welcome-message">Welcome to the blog!</div>
            <div className="purpose-section">
              <p>
                Welcome to the ultimate hub for all Warframe Fashion Frame enthusiasts! Whether
                you’re a seasoned Tenno or just starting your journey, this is the place to showcase
                your most stunning Warframe designs. <br />
                <br />
                Dive into a universe where creativity meets combat, and style is just as important
                as strength. Share your unique Fashion Frames, discover new inspirations, and
                connect with fellow fashion warriors. From sleek and sophisticated to wild and
                wondrous, we celebrate all styles here. Start posting your looks today and let the
                galaxy admire your artistic flair!
              </p>
            </div>
          </div>
        );
      case 'POSTS':
        return <div>Here are the posts.</div>;
      case 'ABOUT ME':
        return <div>About the author...</div>;
      case 'WHERE TO FIND ME':
        return <div>Contact details and social media links.</div>;
      default:
        return <div>Content not found!</div>;
    }
  };

  return <div className="main-content">{renderSection()}</div>;
};

export default Main;
