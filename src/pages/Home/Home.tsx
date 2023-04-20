import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../redux/apiCalls';
import './Home.scss';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';

export const Home: React.FC = React.memo(
  () => {
    const user: User = useSelector((state: any) => state.user.currentUser);

    return (
      <div className="home">
        <div className="home__wrapper">
          <div className="home__item">
            <FormatListNumberedIcon style={{ fontSize: '88px' }} />

            <div className="home__item-text">
              <h3>Your Own Charts</h3>

              <p>
                View your most listened tracks and artists. You can switch between 3 different time periods.
              </p>
            </div>

          </div>

        </div>
      </div>
    )
  }
);