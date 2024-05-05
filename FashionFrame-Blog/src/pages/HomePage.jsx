import React from 'react';
import VolumeControl from '../components/VolumeControl/VolumeControl';
import MusicPlayer from '../components/MusicPlayer/MusicPlayer';
import LatestUpdate from '../components/LatestUpdate/LatestUpdate';
import GifDisplay from '../components/GifDisplay/GifDisplay';
import UserStatus from '../components/UserStatus/UserStatus';
import AdminStatus from '../components/AdminStatus/AdminStatus';
import ImageSlider from '../components/ImageSlider/ImageSlider';
import Header from '../components/Header/Header';
import NavBar from '../components/NavBar/NavBar';
import Main from '../components/ContentArea/ContentArea';
import AdminDashboard from '../components/AdminDashBoard/AdminDashBoard';
import NewPostPopup from '../components/Popup/NewPostPopup';
import UpdatePostPopup from '../components/Popup/EditPostPopup';
import DeletePostPopup from '../components/Popup/DeletePostPopup';
import '../styles/HomePage.css';
import { useState } from 'react';

const HomePage = () => {
  const [volume, setVolume] = useState(50);
  const [currentSection, setCurrentSection] = useState('HOME');
  const [isOpenNewPost, setIsOpenNewPost] = useState(false);
  const [isOpenUpdatePosts, setIsOpenUpdatePosts] = useState(false);
  const [isOpenDeletePosts, setIsOpenDeletePosts] = useState(false);

  const [posts, setPosts] = useState([
    // Initially loaded posts, perhaps fetched from a server
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
    // Additional posts
  ]);

  const handleSaveNewPost = (newPost) => {
    setPosts([...posts, newPost]); // This would likely involve a backend API call
    setIsOpenNewPost(false);
  };

  const handleUpdatePost = (updatedPost) => {
    const updatedPosts = posts.map((post) => {
      if (post.title === updatedPost.title) return updatedPost;
      return post;
    });
    setPosts(updatedPosts); // Similarly, an API call to update the backend data
    setIsOpenUpdatePosts(false);
  };

  const handleDeletePost = (postTitle) => {
    const updatedPosts = posts.filter((post) => post.title !== postTitle);
    setPosts(updatedPosts); // An API call to delete the post in the backend
    setIsOpenDeletePosts(false);
  };

  return (
    <div className="main-container">
      <div className="secondary-container">
        <div className="section start-section">
          <VolumeControl volume={volume} setVolume={setVolume} />
          <MusicPlayer volume={volume} />
          <LatestUpdate />
          <GifDisplay />
        </div>
        <div className="section main-section">
          <Header words={['Welcome', 'To', 'My', 'Fashion Frame', 'Blog!']} colors={['#2E6067']} />
          <NavBar currentSection={currentSection} setCurrentSection={setCurrentSection} />
          <AdminDashboard
            onNewPost={() => setIsOpenNewPost(true)}
            onUpdatePosts={() => setIsOpenUpdatePosts(true)}
            onDeletePosts={() => setIsOpenDeletePosts(true)}
          />
          {isOpenNewPost && (
            <NewPostPopup onSave={handleSaveNewPost} onCancel={() => setIsOpenNewPost(false)} />
          )}
          {isOpenUpdatePosts && (
            <UpdatePostPopup
              posts={posts}
              onSave={handleUpdatePost}
              onCancel={() => setIsOpenUpdatePosts(false)}
            />
          )}
          {isOpenDeletePosts && (
            <DeletePostPopup
              posts={posts}
              onDelete={handleDeletePost}
              onCancel={() => setIsOpenDeletePosts(false)}
            />
          )}
          <Main currentSection={currentSection} posts={posts} />
        </div>
        <div className="section end-section">
          <UserStatus username="JohnDoe" onLogout={() => {}} />
          <AdminStatus
            emotion="UPSET"
            emoji="💀"
            daysAgo="1"
            additionalText="The making of this website had me feeling very upset, because of the deadline."
          />
          <ImageSlider />
          <img src="src/assets/GetDagath'd.webp" className="getDagathd"></img>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
