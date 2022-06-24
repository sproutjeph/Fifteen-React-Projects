import React, { useState, useEffect, useRef } from 'react';
import { FaBars } from 'react-icons/fa';
import { links, social } from './data';
import './App.css';
const App = () => {
  const [show, setShow] = useState(false);
  const linksContainerRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLUListElement>(null);

  const toggleNav = () => {
    setShow(!show);
  };

  useEffect(() => {
    const listHeight = linksRef?.current?.getBoundingClientRect().height;
    if (show) {
      linksContainerRef.current!.style.height = `${listHeight}px`;
    } else {
      linksContainerRef.current!.style.height = '0px';
    }
  }, [show]);

  return (
    <nav className="nav">
      <div className="nav__center">
        <div className="nav__header">
          <h1 className="nav__logo">
            J <span>Sprout</span>{' '}
          </h1>
          <button className="nav__toggle-btn" onClick={toggleNav}>
            <FaBars />
          </button>
        </div>
        <div className="nav__links-container" ref={linksContainerRef}>
          <ul className="nav__list" ref={linksRef}>
            {links.map(({ id, text, url }) => (
              <li className="nav__link" key={id}>
                <a href={url}> {text}</a>
              </li>
            ))}
          </ul>
        </div>

        <ul className="nav__social">
          {social.map(({ Icon, id, url }) => (
            <li key={id}>
              <a href={url}>
                <Icon className="social-icons" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default App;
