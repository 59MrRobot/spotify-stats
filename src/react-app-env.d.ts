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
  images?: {
    url: string;
    height: number;
    width: numbe;
  }[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
  album?: {
    images: {
      url: string;
      height: number;
      width: number;
    }[];
    artists: {
      external_urls: {
        spotify: string;
      };
      href: string;
      id: string;
      name: string;
      type: string;
      uri: string;
    }[];
  }
}

interface TopTrack {
  href: string;
  limit: number;
  next: string;
  offset: number;
  previous: string | null;
  total: number;
  items: Track[];
}

interface Track {
  id: string;
  album: {
    album_type: string;
    total_tracks: number;
    available_markets: string[];
    external_urls: {
      spotify: string
    };
    href: string;
    id: string;
    images: {
      url: string;
      height: number;
      width: number;
    }[];
    name: string;
    type: string;
    uri: string;
    artists: {
      external_urls: {
        spotify: string;
      };
      href: string;
      id: string;
      name: string;
      type: string;
      uri: string;
    }[]
  };
  images?: {
    url: string;
    height: number;
    width: number;
  }[];
  external_ids: {
    isrc: string;
  };
  external_urls: {
    spotify: string;
  };
  href: string;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
  external_urls: {
    spotify: string;
  };
}

interface RecentItem {
  context: {
    external_urls: {
      spotify: string;
    };
    href: string;
    type: string;
    uri: string;
  };
  played_at: string;
  track: {
    artists: {
      name: string;
    }[];
    name: string;
  }
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
  topTracks: {
    topTracks: TopTrack;
    isFetching: boolean;
    error: boolean;
  };
  recentlyPlayed: {
    recentlyPlayed: RecentItem[];
    isFetching: boolean;
    error: boolean;
  }
}
