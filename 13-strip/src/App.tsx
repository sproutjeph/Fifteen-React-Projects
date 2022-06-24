import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Sidbar from './components/Sidbar';
import Submenu from './components/Submenu';
const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Sidbar />
      <Submenu />
    </>
  );
};

export default App;
