import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
  render(<App />);
  
  //finds button and with initial text
  const button = screen.getByRole('button', {name: "Change to blue"})
  expect(button).toHaveStyle({backgroundColor: 'red'})
});


test('button turns blue when clicked', () => {
  render(<App />);
  const button = screen.getByRole('button', {name: 'Change to blue'});
  fireEvent.click(button);
  expect(button).toHaveStyle({backgroundColor: 'blue'})
  expect(button).toHaveTextContent("Change to red")
});
