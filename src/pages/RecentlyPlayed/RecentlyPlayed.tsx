import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRecentlyPlayed } from '../../redux/apiCalls';
import './RecentlyPlayed.scss';
import { format } from 'timeago.js';

export const RecentlyPlayed: React.FC = React.memo(
  () => {
    const recentlyPlayed = useSelector((state: State) => state.recentlyPlayed.recentlyPlayed);
    const dispatch = useDispatch();

    useEffect(() => {
      getRecentlyPlayed(dispatch);
    }, [dispatch]);

    return (
      <div className="recently-played">
        <div className="recently-played__wrapper">
          <h1 className="recently-played__title">Recently Played Tracks</h1>

          <div className="recently-played__content">
            <table>
              <thead>
                <tr>
                  <th style={{
                      width: "50%",
                      textAlign: "left",
                      letterSpacing: "2px"
                    }}
                  >
                    Track
                  </th>
                  <th style={{
                      width: "30%",
                      textAlign: "left",
                      letterSpacing: "2px"
                    }}
                  >
                    Artist(s)
                  </th>
                  <th style={{
                      width: "30%",
                      textAlign: "left",
                      letterSpacing: "2px"
                    }}
                  >
                    Played At
                  </th>
                </tr>
              </thead>

              <tbody>
                {recentlyPlayed.map(item => (
                  <tr key={item.played_at} className="recently-played__item">
                    <td className="recently-played__track">
                      {item.track.name}
                    </td>

                    <td className="recently-played__artist">
                      {item.track.artists.map(a => a.name).join(', ')}
                    </td>

                    <td className="recently-played__played">
                      {format(item.played_at, 'en-US')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
);