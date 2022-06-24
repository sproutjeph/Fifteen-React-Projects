import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            className={(navData) => (navData.isActive ? 'active' : '')}
            to="/"
          >
            home
          </NavLink>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <Link to="/people">people</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
