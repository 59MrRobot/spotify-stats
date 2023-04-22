import React, { useEffect } from 'react';
import './App.scss';
import './styles/button.scss';
import './styles/logo.scss';
// import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { Login } from './pages/Login';
import { Outlet, useLocation } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { getUser } from './redux/apiCalls';


const App: React.FC = () => {
  const user: User = useSelector((state: any) => state.user.currentUser);
  const dispatch = useDispatch();
  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    getUser(dispatch);
  }, []);

  return (
    <div className="app" style={{ height: (path === '/' || path === '/account') ? "100vh" : "100%"}}>
      <div className="app__wrapper">
        <Header />

        {!user ? <Login /> : <Outlet />}

        {/* {artists.map((artist: any) => (
          <div key={artist.id}>
            {artist.images.length
              ? (<img src={artist.images[0].url} alt="artist icon"/>)
              : (<p>no image found</p>)
            }
            {artist.name}
          </div>
        ))} */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
