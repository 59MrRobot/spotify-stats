import React, { useState } from 'react';
import './Header.scss';
import MenuIcon from '@mui/icons-material/Menu';
import { Menu } from '../Menu';

export const Header: React.FC = React.memo(
  () => {
    const isScreenSizeMobile = window.matchMedia("(max-width: 480px)").matches;
    const [showMenu, setShowMenu] = useState(false);

    return (
      <header className="header">
        <div className="header__wrapper">
          <div className="header__logo">
            <img
              src={`${process.env.PUBLIC_URL}/logo.png`}
              alt="logo"
              className="logo"
            />

            <p>Spotify Stats</p>
          </div>

          {isScreenSizeMobile && (
            <button
              className="header__menu"
              onClick={() => setShowMenu(prev => !prev)}
            >
              <MenuIcon />
            </button>
          )}
        </div>

        <Menu visibility={showMenu} />
      </header>
    )
  }
);