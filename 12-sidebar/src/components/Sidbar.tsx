import React from 'react';
import './Sidbar.scss';
import { FaHome, FaTimes } from 'react-icons/fa';
import { links, social } from '../data';
import { useGlobalContext } from '../context';
const Sidbar = () => {
  const { closeSidbar, isSidbarOpen } = useGlobalContext();

  return (
    <aside className={`Sidbar ${isSidbarOpen ? 'Sidbar__open' : ''}`}>
      <header>
        <h1>
          j <span>sprout</span>{' '}
        </h1>
        <button>
          <FaTimes onClick={closeSidbar} />
        </button>
      </header>
      <nav className="Sidbar__nav">
        <ul className="Sidbar__nav-list">
          {links.map((link) => (
            <li key={link.id} className="Sidbar__nav-link">
              <a href={link.url}>
                <link.Icon className="icon" />

                <span>{link.text}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <nav className="nav__social">
        <ul className="nav__social-list">
          {social.map((link) => (
            <li key={link.id} className="nav__social-item">
              <a href={link.url}>
                <link.Icon className="icon" />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidbar;
