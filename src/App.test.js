import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App, { helloWorld } from './App';

test('it returns "hello world"', () => {
  expect(helloWorld()).toBe("hello world");
  expect(helloWorld()).not.toBe("");
});

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

test('render without crashing', () => {
  render(<App />);
});

// test('it has "learn react" text', () => {
//   const container = render(<App />);
//   // container.getByText("Learn React");
//   container.getAllByText(/learn react/i);
// });

test('it has "learn react" link text', () => {
  const container = render(<App />);
  container.getByTestId("learnReact");
});