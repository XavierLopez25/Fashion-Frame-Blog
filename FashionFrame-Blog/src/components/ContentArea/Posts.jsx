import React from 'react';
import Magnifier from './Magnifier';

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
              <Magnifier src={post.imageUrl} alt={post.title} />
            </div>
            <div className="post-information">
              <div className="post-metadata">
                <div className="post-info-header">
                  <div className="date-container">
                    <p>Last Updated: </p>

                    <div className="post-update-time">{post.updatedAt}</div>
                  </div>
                  <div className="warframe-container">
                    <p>Warframe: </p>
                    <div className="post-category">{post.category}</div>
                  </div>
                </div>
              </div>
              <span className="text-before-tags">Tags !</span>
              <div className="post-tags-container">
                {post.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="post-tag">
                    {tag}
                  </span>
                ))}
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
