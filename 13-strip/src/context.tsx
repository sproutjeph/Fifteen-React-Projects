import React, { ReactNode, useContext, useState } from 'react';
import sublinks from './data';
import { Link, Sublink } from './data';

interface Coordinate {
  center: number;
  bottom: number;
}
interface ValueProps {
  isSubMenuOpen: boolean;
  isSidbarOpen: boolean;
  openSubMenu: (
    text: string,
    coordinate: { center: number; bottom: number }
  ) => void;
  closeSubMenu: () => void;
  openSidbar: () => void;
  closeSidbar: () => void;
  page: Sublink;
  location: Coordinate;
}

const AppContext = React.createContext({} as ValueProps);

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState<boolean>(false);
  const [isSidbarOpen, setIsSidbarOpen] = useState<boolean>(false);
  const [page, setPage] = useState<Sublink>({ page: '', links: [] });
  const [location, setLocation] = useState<Coordinate>({
    bottom: 0,
    center: 0,
  });

  const openSubMenu = (text: string, coordinate: Coordinate) => {
    const pageData = sublinks.find((link) => link.page === text);

    if (pageData) {
      setPage(pageData);
    }
    setLocation(coordinate);
    setIsSubMenuOpen(true);
  };
  const closeSubMenu = () => {
    setIsSubMenuOpen(false);
  };
  const openSidbar = () => {
    setIsSidbarOpen(true);
  };
  const closeSidbar = () => {
    setIsSidbarOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSubMenuOpen,
        openSubMenu,
        closeSubMenu,
        openSidbar,
        closeSidbar,
        isSidbarOpen,
        page,
        location,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
