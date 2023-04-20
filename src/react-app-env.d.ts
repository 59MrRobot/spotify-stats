/// <reference types="react-scripts" />

interface User {
  id: string;
  display_name: string;
  external_urls: {
    spotify: string;
  };
  followers: {
    href: any;
    total: number;
  };
  href: string;
  images: {
    height: any;
    url: string;
    width: any;
  }[];
  type: string;
  uri: string;
}
