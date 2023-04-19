import React from 'react';
import { login } from '../../redux/apiCalls';
import './Login.scss';

export const Login: React.FC = React.memo(
  () => {
    return (
      <div className="login">
        <div className="login__wrapper">
          <h2 className="login__heading">
            Please login to your Spotify account to continue.
          </h2>

          <a
            href={login()}
            className="button login__button"
            style={{ textDecoration: "none"}}
          >
            Login to Spotify
          </a>
        </div>
      </div>
    )
  }
);