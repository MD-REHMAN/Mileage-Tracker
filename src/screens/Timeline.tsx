import React from 'react';
import {
  VStack,
  HStack,
  Box,
  Text,
  CircleIcon,
  FlatList,
  ScrollView,
  SectionList,
  ChevronRightIcon,
} from 'native-base';
import {StoreContext} from '../context/StoreContext';

export const Timeline = () => {
  const {timelineScreen} = React.useContext(StoreContext);

  const renderItem = ({item}) => {
    return (
      <Box borderLeftWidth="2" borderColor="primary.400" py="4" pr="4" ml="10">
        <Box pl="10">
          <Box
            w="10"
            h="10"
            alignItems="center"
            justifyContent="center"
            left="-20"
            bg="primary.400"
            rounded="full"
            position="absolute">
            <ChevronRightIcon />
          </Box>

          <HStack alignItems="center" justifyContent="space-between">
            <VStack space="2">
              <Text> {item.type}</Text>
              <Text color="secondary.400" fontSize="xs">
                {item.date}
              </Text>
              <HStack space="2">
                <CircleIcon size="xs" color="secondary.400" />
                <Text color="secondary.400" fontSize="xs">
                  {item.totalMiles + ' mi'}
                </Text>
              </HStack>
            </VStack>
            <Text fontWeight="bold">
              <Text>{'$' + item.amount}</Text>
            </Text>
          </HStack>
        </Box>
      </Box>
    );
  };
  const renderSection = ({section: {month}}) => {
    return (
      <Box borderLeftWidth="2" borderColor="primary.400" py="4" pr="4" ml="10">
        <Box
          pl="10"
          _text={{
            color: 'primary.400',
            fontSize: 'xs',
          }}>
          <Box
            w="4"
            h="4"
            left="-8"
            bg="primary.400"
            rounded="full"
            position="absolute"
          />
          {month}
        </Box>
      </Box>
    );
  };
  return (
    <SectionList
      flex="1"
      bg="secondary.800"
      sections={timelineScreen}
      renderItem={renderItem}
      renderSectionFooter={renderSection}
      ListHeaderComponent={
        <Box
          borderLeftWidth="2"
          borderColor="primary.400"
          py="4"
          pr="4"
          ml="10">
          <Box
            w="3"
            h="3"
            left="-6"
            bg="primary.400"
            rounded="full"
            position="absolute"
          />
        </Box>
      }
      ListFooterComponent={
        <Box
          borderLeftWidth="2"
          borderColor="primary.400"
          py="4"
          pr="4"
          ml="10">
          <Box
            w="3"
            h="3"
            left="-6"
            bottom="0"
            bg="primary.400"
            rounded="full"
            position="absolute"
          />
        </Box>
      }
    />
  );
};
