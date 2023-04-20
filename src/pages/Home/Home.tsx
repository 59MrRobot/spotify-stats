import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../redux/apiCalls';
import './Home.scss';

export const Home: React.FC = React.memo(
  () => {
    const user: User = useSelector((state: any) => state.user.currentUser);
    const dispatch = useDispatch();

    useEffect(() => {
      if (!user) {
        getUser(dispatch);
      }
    }, [dispatch, user]);

    return (
      <div className="home">
        <div className="home__wrapper">
          Home
        </div>
      </div>
    )
  }
);