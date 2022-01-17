import React from 'react';
import {HStack, Button, CircleIcon} from 'native-base';
import {ScreenContext} from '../context/ScreenContext';

export const Footer = () => {
  const {screen, setScreen} = React.useContext(ScreenContext);
  return (
    <HStack
      px="2"
      py="1"
      bg="secondary.700"
      w="100%"
      space="40"
      justifyContent="space-evenly"
      safeAreaBottom>
      <Button
        variant="ghost"
        size="sm"
        leftIcon={
          <CircleIcon
            color={
              screen.activeScreen === 'home' ? 'secondary.50' : 'secondary.500'
            }
          />
        }
        colorScheme="gray"
        _stack={{
          flexDirection: 'column',
        }}
        onPress={() => setScreen('home')}
        _text={{
          color:
            screen.activeScreen === 'home' ? 'secondary.50' : 'secondary.500',
        }}>
        Home
      </Button>
      <Button
        variant="ghost"
        size="sm"
        leftIcon={
          <CircleIcon
            color={
              screen.activeScreen === 'timeline'
                ? 'secondary.50'
                : 'secondary.500'
            }
          />
        }
        colorScheme="gray"
        _stack={{
          flexDirection: 'column',
        }}
        onPress={() => setScreen('timeline')}
        _text={{
          color:
            screen.activeScreen === 'timeline'
              ? 'secondary.50'
              : 'secondary.500',
        }}>
        Timeline
      </Button>
    </HStack>
  );
};
