import React from 'react'
import '../../styles/LatestUpdate.css'

const LatestUpdate = () => {
  const latestPost = {
    title: 'Exciting New Features',
    date: 'April 28, 2024',
    imageUrl: 'path/to/post-image.jpg',
    tags: ['Update', 'Features', 'Announcement']
  }

  return (
    <div className="latest-update">
      <h2>Latest Post</h2>
      <div className="post-content">
        <div className="postd-image">
          <div className="post-details">
            <h3>{latestPost.title}</h3>
            <p>{latestPost.date}</p>
          </div>
          <img src="src/assets/FashionBG.png" alt="Post" className="post-image" />
        </div>
        <div className="post-tags">
          {latestPost.tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LatestUpdate
