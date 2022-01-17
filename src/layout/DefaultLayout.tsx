import React from 'react';
import {Box, AddIcon, Fab} from 'native-base';
import {Header} from '../components/Header';
import {Footer} from '../components/Footer';
import {ScreenContext} from '../context/ScreenContext';

export const DefaultLayout = ({children}) => {
  const {setScreen} = React.useContext(ScreenContext);

  return (
    <>
      <Header />
      {children}
      <Fab
        bg="primary.400"
        right="6"
        bottom="32"
        onPress={() => setScreen('entry')}
        icon={<AddIcon color="white" size="xs" />}
      />
      <Footer />
    </>
  );
};
