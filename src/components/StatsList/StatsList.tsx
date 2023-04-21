import React from 'react';
import './StatsList.scss';
import { StatItem } from '../StatItem';
import { useLocation } from 'react-router-dom';
import cn from 'classnames';

interface Props {
  list: Artist[] | Track[];
}

export const StatsList: React.FC<Props> = React.memo(
  ({ list }) => {
    const location = useLocation();
    
    return (
      <div className='stats-list'>
        <div className={cn(
        'stats-list__wrapper',
        {'stats-list__wrapper--track': location.pathname.split('/')[2] === 'tracks'}
      )}>
          {list?.map((item, index) => (
            <StatItem item={item} index={index} key={item.id}/>
          ))}
        </div>
      </div>
    )
  }
);