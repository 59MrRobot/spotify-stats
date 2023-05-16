import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../redux/apiCalls';
import { updateShowMenu } from '../../redux/settingRedux';
import { resetTopArtists } from '../../redux/topArtistRedux';
import { resetTopTracks } from '../../redux/topTrackRedux';
import { logout } from '../../redux/userRedux';
import './Menu.scss';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export const Menu: React.FC = React.memo(
  () => {
    const user: User = useSelector((state: any) => state.user.currentUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const showMenu = useSelector((state: State) => state.setting.showMenu);
    const isScreenSizeMobile = window.matchMedia("(max-width: 480px)").matches;
    const [collapse, setCollapse] = useState(false);
  
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
                <Link
                  to="/recently-played"
                  style={{ textDecoration: "none", color: "unset" }}
                  onClick={() => dispatch(updateShowMenu(false))}
                >
                  Recently Played
                </Link>
              </li>

              <li className="menu__item">
                <div className="manage-account">
                  <p className="manage-account__heading"
                    onClick={() => setCollapse(prev => !prev)}
                  >
                    Manage Account <ArrowDropDownIcon />
                  </p>

                  {collapse && (
                    <div className="manage-account__content">
                      <Link to="/account" style={{ textDecoration: "none", color: "#000"}}>
                        <AccountCircleIcon />
                      </Link>

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
                    </div>
                  )}
                </div>
              </li>
              
              {/* <li className="menu__item">
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
              </li> */}
            </ul>
          </div>
        </div>
      )
      : (
        <div className='menu menu--big'>
          <div className="menu__wrapper menu__wrapper--big">
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
                <Link
                  to="/recently-played"
                  style={{ textDecoration: "none", color: "unset" }}
                  onClick={() => dispatch(updateShowMenu(false))}
                >
                  Recently Played
                </Link>
              </li>
            </ul>

            <div className="manage-account">
              <p className="manage-account__heading"
                onClick={() => setCollapse(prev => !prev)}
              >
                Manage Account <ArrowDropDownIcon />
              </p>

              {collapse && (
                <div className="manage-account__content manage-account__content--big">
                  <Link
                    to="/account"
                    style={{ textDecoration: "none", color: "#000"}}
                    onClick={() => setCollapse(false)}
                  >
                    <AccountCircleIcon />
                  </Link>

                  {!user
                    ? (
                      <a
                        href={login()}
                        style={{ textDecoration: "none", color: "#000" }}
                        onClick={() => setCollapse(false)}
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
                          dispatch(resetTopTracks());
                          dispatch(updateShowMenu(false));
                          navigate("/");
                          setCollapse(false);
                        }}
                      >
                        Logout
                      </span>
                    )
                  }
                </div>
              )}
            </div>
          </div>
        </div>
      )
  }
);