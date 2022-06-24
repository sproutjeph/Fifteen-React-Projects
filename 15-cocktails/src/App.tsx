import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Error from './components/Error';
import Details from './Details';
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
        <Route path="/details:id" element={<Details />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default App;
