import React from 'react';
import {
  Box,
  HStack,
  Heading,
  CheckIcon,
  ArrowBackIcon,
  IconButton,
} from 'native-base';
import {ScreenContext} from '../context/ScreenContext';

export const LeafHeader = ({children}) => {
  const {back} = React.useContext(ScreenContext);
  return (
    <>
      <Box safeAreaTop bg="secondary.800" />
      <HStack
        px="2"
        py="1"
        bg="secondary.700"
        alignItems="center"
        justifyContent="space-between">
        <HStack space="4" alignItems="center">
          <IconButton
            size="sm"
            onPress={() => back()}
            icon={<ArrowBackIcon color="secondary.50" />}
          />
          {children}
        </HStack>
        <IconButton
          size="sm"
          onPress={() => back()}
          icon={<CheckIcon size="sm" color="secondary.50" />}
        />
      </HStack>
    </>
  );
};
