import React, { useState } from 'react';
import '../../styles/ContentArea.css';
import Home from './Home';
import AboutMe from './AboutMe';
import WhereToFindMe from './WhereToFindMe';
import Posts from './Posts';

const Main = ({ currentSection }) => {
  const posts = [
    {
      title: 'The Joys of Gardening',
      imageUrl: 'src/assets/Dante Fashion Frame by Ferreus Demon.jfif',
      updatedAt: '2023-05-01',
      category: 'Hobbies',
      tags: ['Gardening', 'Sustainability', 'Outdoors'],
      content:
        'Gardening is not just about making your house look good. It has a profound effect on health and wellbeing, making it a perfect hobby to discuss on our blog. From starting your garden to advanced tips for seasoned gardeners, find everything you need here.',
    },
    {
      title: 'Exploring the Art of Cooking',
      imageUrl: 'src/assets/Dante Fashion Frame by Ferreus Demon.jfif',
      updatedAt: '2023-04-28',
      category: 'Culinary',
      tags: ['Cooking', 'Healthy Eating', 'Recipes'],
      content:
        'Cooking is both an art and a science, and in this post, we explore the culinary journeys that food enthusiasts can take right in their kitchens. Discover recipes, tips, and tricks to elevate your home cooking into a gourmet experience.',
    },
    {
      title: 'The Impact of Technology on Modern Life',
      imageUrl: 'src/assets/Dante Fashion Frame by Ferreus Demon.jfif',
      updatedAt: '2023-04-30',
      category: 'Technology',
      tags: ['Tech', 'Innovations', 'Future Trends'],
      content:
        'Technology touches every part of our lives, and this post delves into the ways tech has reshaped how we live, work, and play. From AI to IoT, learn about the innovations that are transforming our world.',
    },
    {
      title: 'Traveling the World: A Guide to Cultures',
      imageUrl: 'src/assets/Dante Fashion Frame by Ferreus Demon.jfif',
      updatedAt: '2023-05-02',
      category: 'Travel',
      tags: ['Travel', 'Cultures', 'Adventure'],
      content:
        "Traveling is more than visiting places; it's about experiencing cultures. This post offers insights into how to immerse yourself in local traditions and what to expect in various parts of the world.",
    },
  ];

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
