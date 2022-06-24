import React, {
  ReactNode,
  useContext,
  useEffect,
  useState,
  useCallback,
} from 'react';
import { ContextValues } from './types';

const AppContext = React.createContext({} as ContextValues);

const AppProvider = ({ children }: { children: ReactNode }) => {
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('a');
  const [cocktails, setCocktails] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(`${url}${searchTerm}`);
      const { drinks } = await response.json();

      if (drinks) {
        const drink = drinks.map((item: any) => ({
          img: item.strDrinkThumb,
          id: item.idDrink,
          name: item.strDrink,
          type: item.strAlcoholic,
          glass: item.strGlass,
        }));

        setCocktails(drink);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchData();
  }, [searchTerm, fetchData]);

  return (
    <AppContext.Provider
      value={{
        loading,
        cocktails,
        setSearchTerm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
