import React from 'react';
import {
  VStack,
  HStack,
  Box,
  Text,
  CircleIcon,
  FlatList,
  ScrollView,
  IBoxProps,
} from 'native-base';
import {HomeSection} from '../components/HomeSection';
import {StoreContext} from '../context/StoreContext';

export const Home = () => {
  const {homeScreen} = React.useContext(StoreContext);
  interface listTypes extends IBoxProps {
    primaryIcon?: JSX.Element;
    primaryText?: string;
    primarySubText?: string;
    SecondaryText?: string;
  }
  const ListItem = ({
    primaryIcon,
    primaryText,
    primarySubText,
    SecondaryText,
    ...props
  }: listTypes) => {
    return (
      <HStack alignItems="flex-end" justifyContent="space-between" {...props}>
        <HStack space="2" alignItems="center">
          {primaryIcon}
          <Text fontWeight="bold" alignItems="flex-end">
            {primaryText}
            <Text fontSize="sm" color="secondary.400">
              {primarySubText}
            </Text>
          </Text>
        </HStack>
        <Text fontSize="xs" color="secondary.400">
          {SecondaryText}
        </Text>
      </HStack>
    );
  };

  const Summary = ({avgFuelCon, lastFuel}) => {
    return (
      <VStack w="100%" space="2" py="2" px="1">
        <ListItem
          primaryIcon={<CircleIcon color="primary.400" size="sm" />}
          primaryText={avgFuelCon.val}
          primarySubText={avgFuelCon.unit}
          SecondaryText="Average fuel consumption"
        />
        <ListItem
          primaryIcon={<CircleIcon color="green.400" size="sm" />}
          primaryText={lastFuel.val}
          primarySubText={lastFuel.unit}
          SecondaryText="Last fuel consumption"
        />
        <ListItem
          primaryIcon={<CircleIcon color="red.400" size="sm" />}
          primaryText={lastFuel.price}
          SecondaryText="Last fuel price"
        />
        {/*TODO: Do the math on date to find x days ago, currently hardcoding */}
        <ListItem SecondaryText={lastFuel.date + ' - 7 days ago '} />
      </VStack>
    );
  };

  const Costing = ({thisMonth, lastMonth}) => {
    return (
      <VStack w="100%" space="2" py="2" px="1">
        <Text color="secondary.400" fontSize="xs">
          THIS MONTH
        </Text>
        <ListItem
          primaryIcon={<CircleIcon color="primary.400" size="sm" />}
          primaryText={'$' + thisMonth.fuel}
          SecondaryText="Gas"
        />
        <ListItem
          primaryIcon={<CircleIcon color="primary.400" size="sm" />}
          primaryText={'$' + thisMonth.other}
          SecondaryText="Other costs"
        />
        <Text color="secondary.400" fontSize="xs">
          LAST MONTH
        </Text>
        <ListItem
          primaryIcon={<CircleIcon color="primary.400" size="sm" />}
          primaryText={'$' + lastMonth.fuel}
          SecondaryText="Gas"
        />
        <ListItem
          primaryIcon={<CircleIcon color="primary.400" size="sm" />}
          primaryText={'$' + lastMonth.other}
          SecondaryText="Other costs"
        />
      </VStack>
    );
  };

  const History = ({listData}) => {
    const renderItem = ({item}) => (
      <>
        <Text mb="2" color="secondary.400" fontSize="xs">
          {item.date}
        </Text>
        <ListItem
          primaryIcon={<CircleIcon color="primary.400" size="sm" />}
          primaryText={'$' + item.amount}
          SecondaryText={item.type}
          mb="4"
        />
      </>
    );
    return (
      <VStack w="100%" space="2" py="2" px="1">
        {/* TODO: Wrap the bellow in FlatList, for array of data */}
        <FlatList
          data={listData}
          renderItem={renderItem}
          maxH="200"
          // keyExtractor={item => item.id}
        />
      </VStack>
    );
  };

  return (
    <ScrollView nestedScrollEnabled flex="1" bg="secondary.800">
      <HomeSection
        headerIcon={<CircleIcon size="sm" color="primary.400" />}
        headerText="Gas">
        <Summary {...homeScreen.summary} />
      </HomeSection>
      <HomeSection
        headerIcon={<CircleIcon size="sm" color="primary.400" />}
        headerText="Costs">
        <Costing {...homeScreen.costing} />
      </HomeSection>
      <HomeSection
        headerIcon={<CircleIcon size="sm" color="primary.400" />}
        headerText="Last entries"
        mb="4">
        <History listData={homeScreen.historyList} />
      </HomeSection>
    </ScrollView>
  );
};
