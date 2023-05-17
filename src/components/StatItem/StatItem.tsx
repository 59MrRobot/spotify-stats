import React, { useEffect, useState } from 'react';
import './StatItem.scss';
import LaunchIcon from '@mui/icons-material/Launch';
import { Tooltip } from '@mui/material';
import { useLocation } from 'react-router-dom';

interface Props {
  item: Artist | Track;
  index: number;
}

export const StatItem: React.FC<Props> = React.memo(
  ({ item, index }) => {
    const [imageSource, setImageSource] = useState("");
    const location = useLocation();
    const isTracks = location.pathname.split('/')[2] === 'tracks';

    useEffect(() => {
      if (item.hasOwnProperty('album')) {
        setImageSource(item.album!.images[0].url);
      } else {
        setImageSource(item.images![0].url);
      }
    }, [item]);

    return !isTracks
      ? (
        <div className='stat-item' key={item.id}>
          <img
            src={imageSource}
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
      : (
        <div className='stat-item stat-item--track' key={item.id}>
          <span className='stat-item__rank stat-item__rank--track'>
            {index + 1}
          </span>

          <img
            src={imageSource}
            alt="artist pic"
            className='stat-item__image stat-item__image--track'
          />

          <div className='stat-item__info stat-item__info--track'>
            <p className='stat-item__name stat-item__name--track'>
              {item.name}
            </p>
            <p className='stat-item__artist'>
              {item.album?.artists[0].name}
            </p>
          </div>

          <a
              href={item.external_urls.spotify}
              target="_blank"
              className='stat-item__link stat-item__link--track'
              rel="noreferrer"
            >
              <Tooltip title="Open Spotify link">
                <LaunchIcon style={{ fontSize: "14px" }} />
              </Tooltip>
            </a>
        </div>
      )
  }
);