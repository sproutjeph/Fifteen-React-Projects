import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Nav.scss';
const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav-center">
        <Link to="/" className="nav-link logo">
          The<span>Cocktail</span>DB
        </Link>
        <ul>
          <li>
            <NavLink
              to="/"
              className={(navData) =>
                navData.isActive ? 'nav-link active' : 'nav-link'
              }
            >
              home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={(navData) =>
                navData.isActive ? 'nav-link active' : 'link'
              }
            >
              about
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
