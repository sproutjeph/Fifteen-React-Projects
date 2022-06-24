import { IconType } from 'react-icons';
import {
  FaBehance,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaSketch,
  FaHome,
  FaUserFriends,
  FaFolderOpen,
  FaCalendarAlt,
  FaWpforms,
} from 'react-icons/fa';

interface LinkData {
  id: number;
  url: string;
  text: string;
  Icon: IconType;
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
    Icon: FaHome,
  },
  {
    id: 2,
    url: '/team',
    text: 'team',
    Icon: FaUserFriends,
  },
  {
    id: 3,
    url: '/projects',
    text: 'projects',
    Icon: FaFolderOpen,
  },
  {
    id: 4,
    url: '/calendar',
    text: 'calendar',
    Icon: FaCalendarAlt,
  },
  {
    id: 5,
    url: '/documents',
    text: 'documents',
    Icon: FaWpforms,
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
  {
    id: 5,
    url: 'ps://www.twitter.com',
    Icon: FaSketch,
  },
];
