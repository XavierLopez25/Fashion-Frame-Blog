import React, { useEffect, useState } from 'react';
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
import Dashboard from '../components/Dashboard/Dashboard';
import NewPostPopup from '../components/Popup/NewPostPopup';
import UpdatePostPopup from '../components/Popup/EditPostPopup';
import DeletePostPopup from '../components/Popup/DeletePostPopup';
import '../styles/HomePage.css';
import { useAuth } from '../hooks/AuthContext';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const { user, logout, authToken } = useAuth();
  const navigate = useNavigate();

  const [volume, setVolume] = useState(50);
  const [currentSection, setCurrentSection] = useState('HOME');
  const [isOpenNewPost, setIsOpenNewPost] = useState(false);
  const [isOpenUpdatePosts, setIsOpenUpdatePosts] = useState(false);
  const [isOpenDeletePosts, setIsOpenDeletePosts] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }

    const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost:5000/posts', {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPosts(data.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();

    const interval = setInterval(() => {
      fetchPosts();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  const editablePosts =
    user.role === 'Administrador' ? posts : posts.filter((post) => post.user_id === user.id);

  const deletablePosts =
    user.role === 'Administrador' ? posts : posts.filter((post) => post.user_id === user.id);

  const handleSaveNewPost = async (newPost) => {
    try {
      const response = await fetch('http://localhost:5000/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify(newPost),
      });
      if (!response.ok) {
        throw new Error('Failed to create new post');
      }
      const postData = await response.json();
      setPosts([...posts, postData]);
      setIsOpenNewPost(false);
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  const handleUpdatePost = (updatedPost) => {
    const updatedPosts = posts.map((post) => {
      if (post.title === updatedPost.title) return updatedPost;
      return post;
    });
    setPosts(updatedPosts);
    setIsOpenUpdatePosts(false);
  };

  const handleDeletePost = async (post) => {
    try {
      const response = await fetch(`http://localhost:5000/post/${post.id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authToken}`,
        },
      });
      if (!response.ok) {
        throw new Error('Failed to delete the post');
      }
      const updatedPosts = posts.filter((p) => p.id !== post.id);
      setPosts(updatedPosts);
      setIsOpenDeletePosts(false);
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
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
          <Dashboard
            onNewPost={() => setIsOpenNewPost(true)}
            onUpdatePosts={() => setIsOpenUpdatePosts(true)}
            onDeletePosts={() => setIsOpenDeletePosts(true)}
          />
          {isOpenNewPost && (
            <NewPostPopup onSave={handleSaveNewPost} onCancel={() => setIsOpenNewPost(false)} />
          )}
          {isOpenUpdatePosts && (
            <UpdatePostPopup
              posts={editablePosts}
              onSave={handleUpdatePost}
              onCancel={() => setIsOpenUpdatePosts(false)}
            />
          )}
          {isOpenDeletePosts && (
            <DeletePostPopup
              posts={deletablePosts}
              onDelete={handleDeletePost}
              onCancel={() => setIsOpenDeletePosts(false)}
            />
          )}
          <Main currentSection={currentSection} posts={posts} />
        </div>
        <div className="section end-section">
          <UserStatus username={user ? user.username : 'Guest'} onLogout={handleLogout} />
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
