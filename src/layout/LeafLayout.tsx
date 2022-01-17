import React from 'react';
import {Box, AddIcon, Fab} from 'native-base';
import {LeafHeader} from '../components/LeafHeader';
import {Footer} from '../components/Footer';

export const LeafLayout = ({header, children}) => {
  return (
    <>
      <LeafHeader>{header}</LeafHeader>
      {children}
    </>
  );
};
