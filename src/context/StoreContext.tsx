import React from 'react';

const timeline = [
  {
    month: 'JULY 2021',
    data: [
      {
        type: 'Refueling',
        date: 'FRIDAY, 24',
        totalMiles: '66,784',
        amount: '57.00',
      },
      {
        type: 'Refueling',
        date: 'MONDAY, 19',
        totalMiles: '66,504',
        amount: '52.38',
      },
    ],
  },
  {
    month: 'JUNE 2021',
    data: [
      {
        type: 'Refueling',
        date: 'TUESDAY, 15',
        totalMiles: '66,321',
        amount: '58.91',
      },
    ],
  },
  // lazy me just copy paste the same data
  {
    month: 'JULY 2021',
    data: [
      {
        type: 'Refueling',
        date: 'FRIDAY, 24',
        totalMiles: '66,784',
        amount: '57.00',
      },
      {
        type: 'Refueling',
        date: 'MONDAY, 19',
        totalMiles: '66,504',
        amount: '52.38',
      },
    ],
  },
  {
    month: 'JUNE 2021',
    data: [
      {
        type: 'Refueling',
        date: 'TUESDAY, 15',
        totalMiles: '66,321',
        amount: '58.91',
      },
    ],
  },
  {
    month: 'JULY 2021',
    data: [
      {
        type: 'Refueling',
        date: 'FRIDAY, 24',
        totalMiles: '66,784',
        amount: '57.00',
      },
      {
        type: 'Refueling',
        date: 'MONDAY, 19',
        totalMiles: '66,504',
        amount: '52.38',
      },
    ],
  },
  {
    month: 'JUNE 2021',
    data: [
      {
        type: 'Refueling',
        date: 'TUESDAY, 15',
        totalMiles: '66,321',
        amount: '58.91',
      },
    ],
  },
  {
    month: 'JULY 2021',
    data: [
      {
        type: 'Refueling',
        date: 'FRIDAY, 24',
        totalMiles: '66,784',
        amount: '57.00',
      },
      {
        type: 'Refueling',
        date: 'MONDAY, 19',
        totalMiles: '66,504',
        amount: '52.38',
      },
    ],
  },
  {
    month: 'JUNE 2021',
    data: [
      {
        type: 'Refueling',
        date: 'TUESDAY, 15',
        totalMiles: '66,321',
        amount: '58.91',
      },
    ],
  },
];

export const StoreContext = React.createContext({
  homeScreen: {
    summary: {
      avgFuelCon: {val: '6.235', unit: 'mi/l'},
      lastFuel: {
        val: '6.533',
        unit: 'mi/l',
        price: '1.419',
        date: '2021-09-24',
      },
    },
    costing: {
      thisMonth: {fuel: '6.235', other: '0.00'},
      lastMonth: {fuel: '29.235', other: '1.32'},
    },
    historyList: [
      {date: 'SEPTEMBER 2021', amount: '10.32', type: 'Refueling'},
      {date: 'AUGUST 2021', amount: '30.72', type: 'Refueling'},
      {date: 'JULY 2021', amount: '27,21', type: 'Refueling'},
      {date: 'JUNE 2021', amount: '33,91', type: 'Refueling'},
      {date: 'MAY 2021', amount: '15..46', type: 'Refueling'},
    ],
  },
  timelineScreen: timeline,
});
