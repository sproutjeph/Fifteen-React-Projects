import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Error from './components/Error';
import People from './People';
import Person from './components/Person';
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/people" element={<People />} />
        <Route path="/person/:id" element={<Person />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default App;
