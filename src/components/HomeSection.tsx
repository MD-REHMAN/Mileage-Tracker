import React from 'react';
import {VStack, HStack, Box, Button, Text, CircleIcon} from 'native-base';

export const HomeSection = ({headerIcon, headerText, children, ...props}) => {
  return (
    <VStack px="2" py="1" w="100%" alignItems="center" {...props}>
      <HStack
        alignItems="center"
        space="2"
        bg="secondary.700"
        px="4"
        py="2"
        rounded="50"
        my="4">
        {/* Should have cloned the headerIcon and styled it accordingly */}
        {headerIcon}
        <Text color="secondary.50">{headerText}</Text>
      </HStack>
      <VStack
        px="2"
        py="1"
        bg="secondary.700"
        w="100%"
        rounded="md"
        alignItems="center">
        {children}
      </VStack>
    </VStack>
  );
};
