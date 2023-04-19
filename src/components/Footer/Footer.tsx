import React from 'react';
import './Footer.scss';

export const Footer: React.FC = React.memo(
  () => {
    return (
      <footer className="footer">
        <div className="footer__wrapper">
          <span>
            2023 - Spotify Stats by <a href="https://www.github.com/59MrRobot" className="footer__link">59MrRobot</a>
          </span>
        </div>
      </footer>
    )
  }
);