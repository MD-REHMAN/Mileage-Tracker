import React from 'react';

export const ScreenContext = React.createContext({
  screen: {activeScreen: 'home', prevScreen: 'home'},
  setScreen: screen => {},
  back: () => {},
});
