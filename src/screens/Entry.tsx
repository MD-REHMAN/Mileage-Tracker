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
  FormControl,
  Select,
  Input,
  
} from 'native-base';
import {Header} from '../components/Header';

export const Entry = () => {
  let [gasType, setGasType] = React.useState('');
  return (
    <VStack
      space="2"
      flex="1"
      bg="secondary.800"
      py="4"
      px="2"
      justifyContent="center"
      safeArea>
      <FormControl>
        <HStack alignItems="center" space="2" w="100%">
          <CircleIcon color="primary.400" size="sm" />
          {/* <Select
            selectedValue={gasType}
            accessibilityLabel="Choose Service"
            placeholder="Choose Service"
            // _selectedItem={{
            //   bg: 'teal.600',
            //   endIcon: <CheckIcon size="5" />,
            // }}
            onValueChange={itemValue => setGasType(itemValue)}>
            <Select.Item label="UX Research" value="ux" />
            <Select.Item label="Web Development" value="web" />
            <Select.Item label="Cross Platform Development" value="cross" />
            <Select.Item label="UI Designing" value="ui" />
            <Select.Item label="Backend Development" value="backend" />
          </Select> */}
          <Input p="4" placeholder="Odometer (mi)" flex="1" />
        </HStack>
        <FormControl.HelperText ml="12">
          Last value: 43432mi
        </FormControl.HelperText>
      </FormControl>
      <HStack alignItems="center" space="2">
        <CircleIcon color="primary.400" size="sm" />
        <Input p="4" placeholder="Gas (l)" flex="1" />
        <Select
          selectedValue={gasType}
          accessibilityLabel="Gas type"
          p="4"
          minW="30%"
          placeholder="Gas type  "
          onValueChange={itemValue => setGasType(itemValue)}>
          <Select.Item label="Regular" value="regular" />
          <Select.Item label="Special" value="Special" />
        </Select>
      </HStack>
      <HStack alignItems="center" space="2">
        <CircleIcon color="primary.400" size="sm" />
        <Input p="4" placeholder="Price/L" flex="1" />
        <Input p="4" placeholder="Total cost" flex="1" />
      </HStack>
      <HStack alignItems="center" space="2">
        <CircleIcon color="primary.400" size="sm" />
        <Input p="4" placeholder="Date" flex="1" />
        <Input p="4" placeholder="Time" flex="1" />
      </HStack>
    </VStack>
  );
};
