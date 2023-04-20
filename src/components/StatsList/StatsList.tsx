import React from 'react';
import './StatsList.scss';

interface Props {
  list: Artist[];
}

export const StatsList: React.FC<Props> = React.memo(
  ({ list }) => {
    return (
      <div className='stats-list'>
        <div className="stats-list__wrapper">
          {list?.map(item => (
            <div className='stat-item'>
              <img
                src={item.images[0].url}
                alt="artist pic"
                className='stat-item__image'
              />

              <p className='stat-item__name'>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }
);