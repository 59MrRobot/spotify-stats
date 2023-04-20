import React, { useEffect } from 'react';
import './App.scss';
import './styles/button.scss';
import './styles/logo.scss';
// import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { Login } from './pages/Login';
import { Outlet } from 'react-router-dom'
import { Home } from './pages/Home';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { getUser } from './redux/apiCalls';


const App: React.FC = () => {
  const user: User = useSelector((state: any) => state.user.currentUser);
  const dispatch = useDispatch();


  // const [search, setSearch] = useState("");
  // const [artists, setArtists] = useState<any>([]);

  useEffect(() => {
    getUser(dispatch);
  }, []);

  // const searchArtists = async (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();

  //   const { data } = await axios.get("https://api.spotify.com/v1/search", {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //     params: {
  //       q: search,
  //       type: "artist",
  //     }
  //   })
  //
  //   setArtists(data.artists.items);
  // }

  return (
    <div className="app">
      <div className="app__wrapper">
        <Header />

        {!user ? <Login /> : <Home />}

        <Outlet />
        {/* {token
          ? (
            <form onSubmit={searchArtists}>
              <input type="text" onChange={(event) => setSearch(event.target.value)} />

              <input
                type="submit"
                value="Search"
                
              />
            </form>
          )
          : (<p>Please login</p>)
        }

        {artists.map((artist: any) => (
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
