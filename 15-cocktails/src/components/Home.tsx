import React from 'react';
import { useGlobalContext } from '../context';
import Cocktails from './Cocktails';
import Loading from './Loading';
import SearchCocktail from './SearchCocktail';

const Home = () => {
  const { loading, cocktails } = useGlobalContext();
  console.log(cocktails);

  return (
    <>
      <SearchCocktail />
      {loading && <Loading />}
      <Cocktails />
    </>
  );
};

export default Home;
