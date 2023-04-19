import React from 'react';
import { login } from '../../redux/apiCalls';
import './Menu.scss';

interface Props {
  visibility: boolean;
}

export const Menu: React.FC<Props> = React.memo(
  ({ visibility }) => {

    return (
      <div className={`menu ${visibility ? 'show' : 'hide'}`}>
        <div className="menu__wrapper">
          <ul className="menu__list">
            <li>Top Tracks</li>
            <li>Top Artists</li>
            <li>
              <a
                href={login()}
                style={{ textDecoration: "none", color: "#000" }}
              >
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
);