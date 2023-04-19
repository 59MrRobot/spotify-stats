import React from 'react';
import './Home.scss';

export const Home: React.FC = React.memo(
  () => {
    return (
      <div className="home">
        <div className="home__wrapper">
          Home
        </div>
      </div>
    )
  }
);