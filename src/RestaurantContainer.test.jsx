import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RestaurantContainer from './RestaurantContainer';

import RESTAURANT from '../fixtures/restaurant';

test('RestaurantContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurant: RESTAURANT,
  }));

  const { container } = render((
    <RestaurantContainer />
  ));

  expect(container).toHaveTextContent('양천주가');
  expect(container).toHaveTextContent('서울 강남구 123456');
  expect(container).toHaveTextContent('비빔밥');
});
