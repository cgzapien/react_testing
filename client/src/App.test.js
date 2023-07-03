import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { replaceCamelWithSpaces } from './App';

test('button has correct initial color', () => {
  render(<App />);
  const button = screen.getByRole('button', {name: "Change to midnightblue"});
  expect(button).toHaveStyle({backgroundColor: 'mediumvioletred'});
});


test('button turns blue when clicked', () => {
  render(<App />);
  const button = screen.getByRole('button', {name: 'Change to midnightblue'});
  fireEvent.click(button);
  expect(button).toHaveStyle({backgroundColor: 'midnightblue'});
  expect(button).toHaveTextContent("Change to mediumvioletred");
});

test('button is enabled and checkbox unchecked', () => {
  render(<App />);
  const button = screen.getByRole('button', {name: "Change to midnightblue"});
  expect(button).toBeEnabled();

  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
});

test('disables button on checkbox check', () => {
  render(<App/>);
  const checkbox = screen.getByRole('checkbox', {name: 'Disable button'});
  const button = screen.getByRole('button', {name: "Change to midnightblue"});

  fireEvent.click(checkbox);
  expect(button).toBeDisabled();

  fireEvent.click(checkbox);
  expect(checkbox).toBeEnabled();

});

test('disable button has grey background and reverts to red', () => {
  render(<App/>);
  const checkbox = screen.getByRole('checkbox', {name: 'Disable button'});
  const button = screen.getByRole('button', {name: "Change to midnightblue"});

  fireEvent.click(checkbox);
  expect(button).toHaveStyle({backgroundColor: 'gray'});

  fireEvent.click(checkbox);
  expect(button).toHaveStyle({backgroundColor: 'mediumvioletred'});

});

test('clicked disable button has grey background and reverts to blue', () => {
  render(<App/>);
  const checkbox = screen.getByRole('checkbox', {name: 'Disable button'});
  const button = screen.getByRole('button', {name: "Change to midnightblue"});

  fireEvent.click(button);

  fireEvent.click(checkbox);
  expect(button).toHaveStyle({backgroundColor: 'gray'});
  
  fireEvent.click(checkbox);
  expect(button).toHaveStyle({backgroundColor: 'midnightblue'});

});

describe('replace camel case with spaces', () => {
  test('works for no inner capital case', () => {
    expect(replaceCamelWithSpaces("Red")).toBe("Red")
  });
  test('works for one capital case', () => {
    expect(replaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue")
  });
  test('works for multiple capital case', () => {
    expect(replaceCamelWithSpaces("Medium Violet Red")).toBe("Medium Violet Red")
  });
});
