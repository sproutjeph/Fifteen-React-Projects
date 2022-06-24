import React from 'react';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from '../context';
// @ts-ignore
import LogoImage from '../images/logo.svg';
import './Navbar.scss';
const Navbar = () => {
  const { openSidbar, openSubMenu } = useGlobalContext();
  //@ts-ignore
  const displaySubmenu = (e) => {
    const text = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;

    openSubMenu(text, { center, bottom });
  };
  return (
    <nav className="Navbar">
      <div className="Navbar__header">
        <img src={LogoImage} className="logo" alt="Stripe" />
        <button className="Navbar__toggle-btn" onClick={openSidbar}>
          <FaBars />
        </button>
      </div>
      <ul className="Navbar__link-list">
        <li>
          <button className="nav-btn" onMouseMove={displaySubmenu}>
            products
          </button>
        </li>
        <li>
          <button className="nav-btn" onMouseMove={displaySubmenu}>
            developers
          </button>
        </li>
        <li>
          <button className="nav-btn" onMouseMove={displaySubmenu}>
            company
          </button>
        </li>
        <li>
          <button className="nav-btn sign-in">Sign in</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
