import React, { useEffect, useState } from 'react';
import './App.scss';
import './styles/button.scss';
import './styles/logo.scss';
// import axios from 'axios';
import { useSelector } from 'react-redux/es/exports';
import { Login } from './pages/Login';
import { Outlet } from 'react-router-dom'
import { Home } from './pages/Home';
import { Footer } from './components/Footer';
import { Header } from './components/Header';


const App: React.FC = () => {
  const user = useSelector((state: any) => state.user.currentUser);
  // const [token, setToken] = useState("");

  // const [search, setSearch] = useState("");
  // const [artists, setArtists] = useState<any>([]);

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token"))!.split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }

    // setToken(token!);
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
