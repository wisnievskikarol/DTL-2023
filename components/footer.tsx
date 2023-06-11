import React from 'react';

const Footer: React.FC = () => {
  return (
    <div className="footer-container">
      <div className="logo-section">
        <img src="/logo.png" alt="Logo" />
        <div className="social-media-links">
          <a href="https://example.com/social-link1" target="_blank" rel="noopener noreferrer">
            <img src="/social-link1.png" alt="Social Link 1" />
          </a>
          <a href="https://example.com/social-link2" target="_blank" rel="noopener noreferrer">
            <img src="/social-link2.png" alt="Social Link 2" />
          </a>
          <a href="https://example.com/social-link3" target="_blank" rel="noopener noreferrer">
            <img src="/social-link3.png" alt="Social Link 3" />
          </a>
        </div>
      </div>
      <div className="vertical-line"></div>
      <div className="section">Section 1</div>
      <div className="vertical-line"></div>
      <div className="section">Section 2</div>
      <div className="vertical-line"></div>
      <div className="section">Section 3</div>
      <div className="vertical-line"></div>
      <div className="links-section">
        <a href="https://example.com/link1">Link 1</a>
        <a href="https://example.com/link2">Link 2</a>
        <a href="https://example.com/link3">Link 3</a>
      </div>
    </div>
  );
};

export default Footer;
