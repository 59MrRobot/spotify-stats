import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/apiCalls';
import { logout } from '../../redux/userRedux';
import './Menu.scss';

interface Props {
  visibility: boolean;
}

export const Menu: React.FC<Props> = React.memo(
  ({ visibility }) => {
    const user: User = useSelector((state: any) => state.user.currentUser);
    const dispatch = useDispatch();
  
    return (
      <div className={`menu ${visibility ? 'show' : 'hide'}`}>
        <div className="menu__wrapper">
          <ul className="menu__list">
            <li className="menu__item">Top Tracks</li>
            <li className="menu__item">Top Artists</li>
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