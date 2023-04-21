import React from 'react';
import './StatsList.scss';
import LaunchIcon from '@mui/icons-material/Launch';
import { Tooltip } from '@mui/material';
import { StatItem } from '../StatItem';

interface Props {
  list: Artist[];
}

export const StatsList: React.FC<Props> = React.memo(
  ({ list }) => {
    return (
      <div className='stats-list'>
        <div className="stats-list__wrapper">
          {list?.map((item, index) => (
            <StatItem item={item} index={index} key={item.id}/>
          ))}
        </div>
      </div>
    )
  }
);