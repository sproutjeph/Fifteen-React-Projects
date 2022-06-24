import { IconType } from 'react-icons';
import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

interface LinkData {
  id: number;
  url: string;
  text: string;
}
interface SocialData {
  id: number;
  url: string;
  Icon: IconType;
}

export const links: LinkData[] = [
  {
    id: 1,
    url: '/',
    text: 'home',
  },
  {
    id: 2,
    url: '/about',
    text: 'about',
  },
  {
    id: 3,
    url: '/projects',
    text: 'projects',
  },
  {
    id: 4,
    url: '/contact',
    text: 'contact',
  },
  {
    id: 5,
    url: '/profile',
    text: 'profile',
  },
];

export const social: SocialData[] = [
  {
    id: 1,
    url: 'https://www.twitter.com',
    Icon: FaFacebook,
  },
  {
    id: 2,
    url: 'https://www.twitter.com',
    Icon: FaTwitter,
  },
  {
    id: 3,
    url: 'https://www.twitter.com',
    Icon: FaLinkedin,
  },
  {
    id: 4,
    url: 'https://www.twitter.com',
    Icon: FaBehance,
  },
];
