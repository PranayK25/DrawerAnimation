import React, {createContext, useContext, useState} from 'react';
import {DrawerItems} from '../navigation/navigatorConstants';
import {SCREEN_NAME} from '../utils/enums';

export interface IScreenContext {
  setSelectedScreen: (screen: SCREEN_NAME) => void;
  selectedScreen: SCREEN_NAME;
}

const ScreenContext = createContext<IScreenContext>({
  setSelectedScreen: () => undefined,
  selectedScreen: DrawerItems[0].key,
});

export const ScreenContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [selectedScreen, setSelectedScreen] = useState(DrawerItems[0].key);

  return (
    <ScreenContext.Provider
      value={{
        selectedScreen,
        setSelectedScreen,
      }}>
      {children}
    </ScreenContext.Provider>
  );
};

export const useScreenContext = () => useContext(ScreenContext);
