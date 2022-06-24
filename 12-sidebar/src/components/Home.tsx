import React from 'react';
import './Home.scss';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from '../context';
const Home = () => {
  const { openSidbar } = useGlobalContext();

  return (
    <main className="Home">
      <button className="Home__toggle-btn">
        <FaBars onClick={openSidbar} />
      </button>
      <button className="Home__show-btn">Show modal</button>
    </main>
  );
};

export default Home;
