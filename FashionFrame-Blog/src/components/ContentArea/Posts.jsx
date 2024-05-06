import React from 'react';
import Magnifier from './Magnifier';

const formatDate = (dateString) => {
  const date = new Date(dateString);

  let day = date.getDate();
  day = day < 10 ? '0' + day : day;

  let month = date.getMonth() + 1;
  month = month < 10 ? '0' + month : month;

  let year = date.getFullYear().toString().substr(-2);

  let hours = date.getHours();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12;
  hours = hours < 10 ? '0' + hours : hours;

  let minutes = date.getMinutes();
  minutes = minutes < 10 ? '0' + minutes : minutes;

  let seconds = date.getSeconds();
  seconds = seconds < 10 ? '0' + seconds : seconds;

  return `${day}/${month}/${year} at ${hours}:${minutes}:${seconds} ${ampm}`;
};

const Post = ({ posts }) => {
  return (
    <div className="posts-container">
      {posts.map((post, index) => (
        <div key={index} className="post">
          <div className="post-title-box">
            <h2 className="post-title">{post.title}</h2>
          </div>
          <div className="post-detailsD">
            <div className="post-image-containerP">
              <Magnifier src={post.image_base64} alt={post.title} />
            </div>
            <div className="post-information">
              <div className="post-metadata">
                <div className="post-info-header">
                  <div className="date-container">
                    <p>Last Updated: </p>

                    <div className="post-update-time">{formatDate(post.created_at)}</div>
                  </div>
                  <div className="warframe-container">
                    <p>Warframe: </p>
                    <div className="post-category">{post.warframe}</div>
                  </div>
                </div>
              </div>
              <span className="text-before-tags">Tags !</span>
              <div className="post-tags-container">
                {post.tags ? (
                  post.tags
                    .split(',')
                    .filter((tag) => tag.trim().length > 0)
                    .map((tag, tagIndex) => (
                      <span key={tagIndex} className="post-tag">
                        {tag.trim()}
                      </span>
                    ))
                ) : (
                  <span>No tags</span>
                )}
              </div>
              <div className="post-content-container">
                <p className="post-content">{post.content}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Post;
