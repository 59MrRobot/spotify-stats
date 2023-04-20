import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import { StatsList } from '../../components/StatsList';
import { getTopArtists } from '../../redux/apiCalls';
import './TopStats.scss';

export const TopStats: React.FC = React.memo(
  () => {
    const location = useLocation();
    const topArtists = useSelector((state: State) => state.topArtists.topArtists);
    const dispatch = useDispatch();
    const [type, setType] = useState("");
    const [timePeriod, setTimePeriod] = useState("short_term");

    useEffect(() => {
      setType(location.pathname.split('/')[2]);
    }, [location.pathname]);

    useEffect(() => {
      getTopArtists(dispatch, `?time_range=${timePeriod}&limit=50`);
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
              className='top-stats__filter-item'
              onClick={() => handleTimePeriod("short_term")}
            >
              <NavLink
                to="?timeRange=short_term"
                className={({ isActive }) => isActive ? 'top-stats__filter-link active' : 'top-stats__filter-link'}
              >
                Last 4 Weeks
              </NavLink>
            </li>
            <li
              className='top-stats__filter-item'
              onClick={() => handleTimePeriod("medium_term")}
            >
              <NavLink
                to="?timeRange=medium_term"
                className='top-stats__filter-link'
              >
                Last 6 Months
              </NavLink>
            </li>
            <li
              className='top-stats__filter-item'
              onClick={() => handleTimePeriod("long_term")}
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