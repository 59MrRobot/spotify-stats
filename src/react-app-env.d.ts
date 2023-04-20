/// <reference types="react-scripts" />

interface User {
  id: string;
  display_name: string;
  external_urls: {
    spotify: string;
  };
  followers: {
    href: string;
    total: number;
  };
  href: string;
  images: {
    height: number | null;
    url: string;
    width: number | null;
  }[];
  type: string;
  uri: string;
}

interface TopArtist {
  href: string;
  limit: number;
  next: string;
  offset: number;
  previous: string | null;
  total: number;
  items: Artist[];
}

interface Artist {
  id: string;
  external_urls: {
    spotify: string;
  };
  followers: {
    href: string | null,
    total: number,
  };
  genres: string[];
  href: string;
  images: {
    url: string;
    height: number;
    width: numbe;
  }[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
}

interface State {
  user: {
    currentUser: User;
    isFetching: boolean;
    error: boolean;
  };
  setting: {
    showMenu: boolean;
  }
  topArtists: {
    topArtists: TopArtist;
    isFetching: boolean;
    error: boolean;
  };
}
