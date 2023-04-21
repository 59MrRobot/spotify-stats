import React from 'react';
import './StatItem.scss';
import LaunchIcon from '@mui/icons-material/Launch';
import { Tooltip } from '@mui/material';

interface Props {
  item: Artist;
  index: number;
}

export const StatItem: React.FC<Props> = React.memo(
  ({ item, index }) => {
    return (
      <div className='stat-item' key={item.id}>
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
    )
  }
);