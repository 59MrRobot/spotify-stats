import React from 'react';
import './StatsList.scss';
import LaunchIcon from '@mui/icons-material/Launch';
import { Tooltip } from '@mui/material';

interface Props {
  list: Artist[];
}

export const StatsList: React.FC<Props> = React.memo(
  ({ list }) => {
    return (
      <div className='stats-list'>
        <div className="stats-list__wrapper">
          {list?.map((item, index) => (
            <div className='stat-item'>
              <img
                src={item.images[0].url}
                alt="artist pic"
                className='stat-item__image'
              />

              <div className='stat-item__info'>
                <span className='stat-item__rank'>{index + 1}.</span>
                <p className='stat-item__name'>{item.name}</p>

                <a
                  href={item.external_urls.spotify}
                  target="_blank"
                  className='stat-item__link'
                  rel="noreferrer"
                >
                  <Tooltip title="Open Spotify link">
                    <LaunchIcon style={{ fontSize: "12px" }} />
                  </Tooltip>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
);