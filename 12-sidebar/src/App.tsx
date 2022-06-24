import React from 'react';
import Home from './components/Home';
import Modal from './components/Modal';
import Sidbar from './components/Sidbar';
import { useGlobalContext } from './context';
const App = () => {
  const {} = useGlobalContext();
  return (
    <>
      <Home />
      <Sidbar />

      <Modal />
    </>
  );
};

export default App;
