import React from 'react';
import '../../styles/LatestUpdate.css';

const formatDate = (dateString) => {
  const date = new Date(dateString);

  let day = date.getDate();
  day = day < 10 ? '0' + day : day;

  let month = date.getMonth() + 1;
  month = month < 10 ? '0' + month : month;

  const year = date.getFullYear().toString().substr(-2);

  let hours = date.getHours();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours || 12;
  hours = hours < 10 ? '0' + hours : hours;

  let minutes = date.getMinutes();
  minutes = minutes < 10 ? '0' + minutes : minutes;

  let seconds = date.getSeconds();
  seconds = seconds < 10 ? '0' + seconds : seconds;

  return `${day}/${month}/${year} at ${hours}:${minutes}:${seconds} ${ampm}`;
};

const LatestUpdate = ({ posts }) => {
  if (!posts || posts.length === 0) {
    return <div>Loading posts...</div>;
  }

  const latestPost = {
    title: 'Exciting New Features',
    date: 'April 28, 2024',
    imageUrl: 'path/to/post-image.jpg',
    tags: ['Update', 'Features', 'Announcement'],
  };

  console.log(posts);

  const tags = posts.tags
    .split(',')
    .map((tag) => tag.trim())
    .slice(0, 3);
  return (
    <div className="latest-update">
      <h2>Latest Post</h2>
      <div className="post-content">
        <div className="postd-image">
          <div className="post-details">
            <h3>{posts.title}</h3>
            <p>{formatDate(posts.created_at)}</p>
          </div>
          <img src={latestPost.image_base64} alt="Post" className="post-image" />
        </div>
        <div className="post-tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestUpdate;
