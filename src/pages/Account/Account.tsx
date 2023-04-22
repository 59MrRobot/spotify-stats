import React from 'react';
import { useSelector } from 'react-redux';
import './Account.scss';

export const Account: React.FC = React.memo(
  () => {
    const user: User = useSelector((state: State) => state.user.currentUser);

    return (
      <div className='account'>
        <div className="account__wrapper">
          <div className='account__info'>
            <img
              src={user.images[0].url}
              alt="profile icon"
              className="account__image"
            />

            <h1 className="account__title">Welcome, {user.display_name}</h1>

            <p className="account__id">ID: {user.id}</p>
          </div>

          <div className='account__item'>
            <div className='account__item-content'>
              <div className='account__item-text'>
                <h2 className='account__item-title'>
                  Manage Your Spotify Account
                </h2>

                <p className='account__item-subtext'>
                  Manage your Spotify account settings directly on the Spotify site.
                </p>
              </div>

              <img
                src={`${process.env.PUBLIC_URL}/spotify.png`}
                alt="spotify logo"
                className='account__item-image'
              />
            </div>

            <a
              href="https://www.spotify.com/account/overview/"
              target="_blank"
              rel="noreferrer"
              className='account__item-link'
            >
              Continue to Spotify
            </a>
          </div>
        </div>
      </div>
    )
  }
)