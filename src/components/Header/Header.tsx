import React from 'react';
import './Header.scss';
import MenuIcon from '@mui/icons-material/Menu';
import { Menu } from '../Menu';
import { useDispatch, useSelector } from 'react-redux';
import { updateShowMenu } from '../../redux/settingRedux';
import { Link } from 'react-router-dom';

export const Header: React.FC = React.memo(
  () => {
    const isScreenSizeMobile = window.matchMedia("(max-width: 480px)").matches;
    const showMenu = useSelector((state: State) => state.setting.showMenu);
    const dispatch = useDispatch();

    return (
      <header className="header">
        <div className="header__wrapper">
          <Link to="/" style={{ textDecoration: "none"}}>
            <div className="header__logo">
              <img
                src={`${process.env.PUBLIC_URL}/logo.png`}
                alt="logo"
                className="logo"
              />

              <p style={{ width: "max-contents"}}>Spotify Stats</p>
            </div>
          </Link>

          {!isScreenSizeMobile && <Menu />}

          {isScreenSizeMobile && (
            <button
              className="header__menu"
              onClick={() => dispatch(updateShowMenu(!showMenu))}
            >
              <MenuIcon />
            </button>
          )}
        </div>

        {isScreenSizeMobile && <Menu />}
      </header>
    )
  }
);