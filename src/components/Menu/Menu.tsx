import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../redux/apiCalls';
import { updateShowMenu } from '../../redux/settingRedux';
import { resetTopArtists } from '../../redux/topArtistRedux';
import { logout } from '../../redux/userRedux';
import './Menu.scss';

export const Menu: React.FC = React.memo(
  () => {
    const user: User = useSelector((state: any) => state.user.currentUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const showMenu = useSelector((state: State) => state.setting.showMenu);
    const isScreenSizeMobile = window.matchMedia("(max-width: 480px)").matches;
  
    return isScreenSizeMobile
      ? (
        <div className={`menu ${showMenu ? 'show' : 'hide'}`}>
          <div className="menu__wrapper">
            <ul className="menu__list">
              <li className="menu__item">
                <Link
                  to="/top/artists"
                  style={{ textDecoration: "none", color: "unset" }}
                  onClick={() => dispatch(updateShowMenu(false))}
                >
                  Top Artists
                </Link>
              </li>
              <li className="menu__item">
                <Link
                  to="/top/tracks"
                  style={{ textDecoration: "none", color: "unset" }}
                  onClick={() => dispatch(updateShowMenu(false))}
                >
                  Top Tracks
                </Link>
              </li>
              <li className="menu__item">
                {!user
                  ? (
                    <a
                      href={login()}
                      style={{ textDecoration: "none", color: "#000" }}
                    >
                      Login
                    </a>
                  )
                  : (
                    <span
                      className='menu__logout'
                      onClick={() => {
                        dispatch(logout());
                        window.localStorage.removeItem("token");
                        dispatch(resetTopArtists());
                        dispatch(updateShowMenu(false));
                        navigate("/");
                      }}
                    >
                      Logout
                    </span>
                  )
                }
              </li>
            </ul>
          </div>
        </div>
      )
      : (
        <div className='menu menu--big'>
          <div className="menu__wrapper">
            <ul className="menu__list menu__list--big">
              <li className="menu__item">
                <Link
                  to="/top/artists"
                  style={{ textDecoration: "none", color: "unset" }}
                  onClick={() => dispatch(updateShowMenu(false))}
                >
                  Top Artists
                </Link>
              </li>
              <li className="menu__item">
                <Link
                  to="/top/tracks"
                  style={{ textDecoration: "none", color: "unset" }}
                  onClick={() => dispatch(updateShowMenu(false))}
                >
                  Top Tracks
                </Link>
              </li>
              <li className="menu__item">
                {!user
                  ? (
                    <a
                      href={login()}
                      style={{ textDecoration: "none", color: "#000" }}
                    >
                      Login
                    </a>
                  )
                  : (
                    <span
                      className='menu__logout'
                      onClick={() => {
                        dispatch(logout());
                        window.localStorage.removeItem("token");
                        dispatch(resetTopArtists());
                        dispatch(updateShowMenu(false));
                        navigate("/");
                      }}
                    >
                      Logout
                    </span>
                  )
                }
              </li>
            </ul>
          </div>
        </div>
      )
  }
);