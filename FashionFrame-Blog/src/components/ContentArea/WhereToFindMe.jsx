import React from 'react';

function SocialMediaLinks() {
  return (
    <div className="wtfm_social">
      <h1 className="wtfm-title">Where to find me?</h1>

      <div className="social-container">
        <div className="img-container-wtfm">
          <img
            src="https://i0.wp.com/softwareengineeringdaily.com/wp-content/uploads/2021/09/GitHub_logo.png?fit=1200%2C513&ssl=1"
            alt="GitHub"
          />
          <img
            src="https://hardwareviews.com/wp-content/uploads/2019/02/Instagram-Banner-Logo-de-Instagram-vector-logo-instagram-sin-fondo-1000x480.gif"
            alt="Instagram"
          />
          <img
            src="https://creativereview.imgix.net/content/uploads/2023/07/twitterx-banner.jpg?auto=compress,format&q=60&w=1200&h=513"
            alt="Twitter"
          />
        </div>
        <div
          className="media-tab-nav
"
        >
          <button onClick={() => window.open('https://github.com/XavierLopez25', '_blank')}>
            Find Me on GitHub as @yourUsername
          </button>
          <button onClick={() => window.open('https://instagram.com/nathan_nugget', '_blank')}>
            Find Me on Instagram as @yourUsername
          </button>
          <button onClick={() => window.open('https://twitter.com/xlopezn8', '_blank')}>
            Find Me on Twitter as @yourUsername
          </button>
        </div>
      </div>
    </div>
  );
}

export default SocialMediaLinks;
