import { IconType } from 'react-icons';
import { FaCreditCard, FaBook, FaBriefcase } from 'react-icons/fa';

export interface Link {
  label: string;
  Icon: IconType;
  url: string;
}
export interface Sublink {
  page: string;

  links: Link[];
}

const sublinks: Sublink[] = [
  {
    page: 'products',
    links: [
      { label: 'payment', Icon: FaCreditCard, url: '/products' },
      { label: 'terminal', Icon: FaCreditCard, url: '/products' },
      { label: 'connect', Icon: FaCreditCard, url: '/products' },
    ],
  },
  {
    page: 'developers',
    links: [
      { label: 'plugins', Icon: FaBook, url: '/products' },
      { label: 'libraries', Icon: FaBook, url: '/products' },
      { label: 'help', Icon: FaBook, url: '/products' },
      { label: 'billing', Icon: FaBook, url: '/products' },
    ],
  },
  {
    page: 'company',
    links: [
      { label: 'about', Icon: FaBriefcase, url: '/products' },
      { label: 'customers', Icon: FaBriefcase, url: '/products' },
    ],
  },
];

export default sublinks;
