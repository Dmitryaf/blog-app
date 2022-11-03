import { fireEvent, screen } from '@testing-library/react';

import componentRender from 'shared/lib/componentRender/componentRender';

import Counter from './Counter';

describe('Counter test', () => {
  test('Counter', () => {
    componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
    expect(screen.getByTestId('counter')).toHaveTextContent('10');
  });

  test('Counter incremented', () => {
    componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
    fireEvent.click(screen.getByTestId('increment-btn'));
    expect(screen.getByTestId('counter')).toHaveTextContent('11');
  });
  test('Counter decremented', () => {
    componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
    fireEvent.click(screen.getByTestId('decrement-btn'));
    expect(screen.getByTestId('counter')).toHaveTextContent('9');
  });
});
