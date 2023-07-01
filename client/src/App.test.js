import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
  render(<App />);
  const button = screen.getByRole('button', {name: "Change to blue"});
  expect(button).toHaveStyle({backgroundColor: 'red'});
});


test('button turns blue when clicked', () => {
  render(<App />);
  const button = screen.getByRole('button', {name: 'Change to blue'});
  fireEvent.click(button);
  expect(button).toHaveStyle({backgroundColor: 'blue'});
  expect(button).toHaveTextContent("Change to red");
});

test('button is enabled and checkbox unchecked', () => {
  render(<App />);
  const button = screen.getByRole('button', {name: "Change to blue"});
  expect(button).toBeEnabled();

  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
});
test('checkbox actions', () => {
  render(<App/>);
  const checkbox = screen.getByRole('checkbox');
  const button = screen.getByRole('button', {name: "Change to blue"});

  fireEvent.click(checkbox);
  expect(button).not.toBeEnabled();

  fireEvent.click(checkbox);
  expect(checkbox).toBeEnabled();

});