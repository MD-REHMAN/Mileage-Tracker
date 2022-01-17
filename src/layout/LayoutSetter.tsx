import React from 'react';

import {
  NativeBaseProvider,
  extendTheme,
  theme as defaultTheme,
  Heading,
} from 'native-base';
import {Home} from '../screens/Home';
import {Timeline} from '../screens/Timeline';
import {Entry} from '../screens/Entry';
import {LeafLayout} from './LeafLayout';
import {DefaultLayout} from './DefaultLayout';
import {ScreenContext} from '../context/ScreenContext';

export const LayoutSetter = () => {
  const {screen} = React.useContext(ScreenContext);

  return (
    <>
      {screen.activeScreen !== 'entry' ? (
        <DefaultLayout>
          {screen.activeScreen === 'home' && <Home />}
          {screen.activeScreen === 'timeline' && <Timeline />}
        </DefaultLayout>
      ) : (
        <LeafLayout header={<Heading>Refueling</Heading>}>
          <Entry />
        </LeafLayout>
      )}
    </>
  );
};
