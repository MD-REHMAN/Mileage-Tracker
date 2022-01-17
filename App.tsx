import React from 'react';
import {
  NativeBaseProvider,
  extendTheme,
  StatusBar,
  theme as defaultTheme,
} from 'native-base';
import {LayoutSetter} from './src/layout/LayoutSetter';
import {ScreenContext} from './src/context/ScreenContext';
import {StoreContext} from './src/context/StoreContext';

const App = () => {
  const theme = extendTheme({
    colors: {
      primary: defaultTheme.colors.lightBlue,
      secondary: defaultTheme.colors.gray,
    },
    config: {
      initialColorMode: 'dark',
    },
  });
  const [screen, setScreen] = React.useState({
    activeScreen: 'home',
    prevScreen: 'home',
  });
  const screenHandler = screen => {
    setScreen(prevState => {
      return {activeScreen: screen, prevScreen: prevState.activeScreen};
    });
  };
  const backHandler = () => {
    setScreen(prevState => {
      return {
        activeScreen: prevState.prevScreen,
        prevScreen: prevState.prevScreen,
      };
    });
  };

  const screenDefault = {
    screen: screen,
    setScreen: screenHandler,
    back: backHandler,
  };

  return (
    <NativeBaseProvider theme={theme}>
      <StatusBar barStyle="light-content" />
      <ScreenContext.Provider value={screenDefault}>
        {/* TODO: we should spilt code the data store even further but for now it'll do */}
        {/* Currently on reliang on deafult values */}
        {/* <StoreContext.Provider> */}
        <LayoutSetter />
        {/* </StoreContext.Provider> */}
      </ScreenContext.Provider>
    </NativeBaseProvider>
  );
};

export default App;
