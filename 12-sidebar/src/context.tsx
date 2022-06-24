import React, { ReactNode, useContext, useState } from 'react';

export interface Values {
  isSidbarOpen: boolean;
  openSidbar: () => void;
  setIsSidbarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  closeSidbar: () => void;
}

const AppContext = React.createContext({} as Values);

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [isSidbarOpen, setIsSidbarOpen] = useState<boolean>(false);

  const openSidbar = () => {
    setIsSidbarOpen(() => true);
  };
  const closeSidbar = () => {
    setIsSidbarOpen(() => false);
  };

  return (
    <AppContext.Provider
      value={{
        isSidbarOpen,
        setIsSidbarOpen,
        openSidbar,
        closeSidbar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
