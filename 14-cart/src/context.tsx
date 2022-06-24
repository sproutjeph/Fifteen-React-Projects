import React, { ReactNode, useContext, useEffect, useReducer } from 'react';
import Reducer from './reducer';
import axios from 'axios';
import { ActionKinds, DefaultStateInterface, ValueInterface } from './types';
const url = 'https://course-api.com/react-useReducer-cart-project';

export const initialState: DefaultStateInterface = {
  isLoading: false,
  cart: [],
  total: 0,
  amount: 0,
};

const AppContext = React.createContext({} as ValueInterface);

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const increaseItem = (id: string) => {
    dispatch({ type: ActionKinds.INCREASEITEM, payload: id });
  };
  const decreaseItem = (id: string) => {
    dispatch({ type: ActionKinds.DECREASEITEM, payload: id });
  };
  const removeItem = (id: string) => {
    dispatch({ type: ActionKinds.REMOVE_ITEM, payload: id });
  };
  const clearCart = () => {
    dispatch({ type: ActionKinds.CLEAR_CART });
  };
  const fetchData = async () => {
    try {
      dispatch({ type: ActionKinds.LOADING });
      const response = await axios.get(url);
      const { data } = response;
      dispatch({ type: ActionKinds.DISPLAY_ITEMS, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    dispatch({ type: ActionKinds.GET_TOTAL });
    dispatch({ type: ActionKinds.GET_TOTAL_PRICE });
  }, [state.cart]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        removeItem,
        clearCart,
        increaseItem,
        decreaseItem,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
