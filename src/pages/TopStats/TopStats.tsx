import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import { StatsList } from '../../components/StatsList';
import { getTopArtists } from '../../redux/apiCalls';
import './TopStats.scss';
import cn from 'classnames';

export const TopStats: React.FC = React.memo(
  () => {
    const location = useLocation();
    const topArtists = useSelector((state: State) => state.topArtists.topArtists);
    const dispatch = useDispatch();
    const [type, setType] = useState("");
    const [timePeriod, setTimePeriod] = useState("short_term");
    const [shortSelected, setShortSelected] = useState(true);
    const [mediumSelected, setMediumSelected] = useState(false);
    const [longSelected, setLongSelected] = useState(false);

    useEffect(() => {
      setType(location.pathname.split('/')[2]);
    }, [location.pathname]);

    useEffect(() => {
      getTopArtists(dispatch, timePeriod);
    }, [dispatch, timePeriod]);

    const handleTimePeriod = (period: string) => {
      setTimePeriod(period);
    }

    return (
      <div className='top-stats'>
        <div className="top-stats__wrapper">
          <h1 className="top-stats__title">TOP {type.toUpperCase()}</h1>

          <ul className='top-stats__filter-list'>
            <li
              className={cn(
                'top-stats__filter-item',
                {'selected': shortSelected}
              )}
              onClick={() => {
                handleTimePeriod("short_term");
                setShortSelected(true);
                setMediumSelected(false);
                setLongSelected(false);
              }}
            >
              <NavLink
                to="?timeRange=short_term"
                className="top-stats__filter-link"
              >
                Last 4 Weeks
              </NavLink>
            </li>
            <li
              className={cn(
                'top-stats__filter-item',
                {'selected': mediumSelected}
              )}
              onClick={() => {
                handleTimePeriod("medium_term");
                setShortSelected(false);
                setMediumSelected(true);
                setLongSelected(false);
              }}
            >
              <NavLink
                to="?timeRange=medium_term"
                className='top-stats__filter-link'
              >
                Last 6 Months
              </NavLink>
            </li>
            <li
              className={cn(
                'top-stats__filter-item',
                {'selected': longSelected}
              )}
              onClick={() => {
                handleTimePeriod("long_term");
                setShortSelected(false);
                setMediumSelected(false);
                setLongSelected(true);
              }}
            >
              <NavLink
                to="?timeRange=long_term"
                className='top-stats__filter-link'
              >
                All Time
              </NavLink>
            </li>
          </ul>

          <StatsList list={topArtists?.items} />
        </div>
      </div>
    )
  }
);