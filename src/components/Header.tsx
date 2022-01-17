import React from 'react';
import {Box, HStack, Text, HamburgerIcon, IconButton} from 'native-base';

export const Header = () => {
  return (
    <>
      <Box safeAreaTop bg="secondary.800" />
      <HStack px="2" py="1" bg="secondary.700">
        <IconButton size="sm" icon={<HamburgerIcon color="secondary.50" />} />
      </HStack>
    </>
  );
};
