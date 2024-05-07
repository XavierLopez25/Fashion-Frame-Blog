import React, { useState } from 'react';
import '../../styles/ContentArea.css';
import Home from './Home';
import AboutMe from './AboutMe';
import WhereToFindMe from './WhereToFindMe';
import Posts from './Posts';
import { ErrorState, Loading, Empty } from '../Status/Status';

const Main = ({ currentSection, posts, isLoading, error }) => {
  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorState message={error} />;
  }

  if (posts.length === 0 && currentSection === 'POSTS') {
    return <Empty />;
  }

  const renderSection = () => {
    switch (currentSection) {
      case 'HOME':
        return <Home />;
      case 'POSTS':
        return <Posts posts={posts}></Posts>;
      case 'ABOUT ME':
        return <AboutMe />;
      case 'WHERE TO FIND ME':
        return <WhereToFindMe />;
      default:
        return <div>Content not found!</div>;
    }
  };

  return <div className="main-content">{renderSection()}</div>;
};

export default Main;
