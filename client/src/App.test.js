import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react'
import App from './App';
import Navbar from './components/navbar'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


test("tests if button is there?", () => {
  const { getByText  } = render(<Navbar />);
  const button = getByText (/dark/i); 
});


test("tests if button will fire?", () => {
  const { getByText  } = render(<Navbar />);
  const button = getByText (/dark/i);
  fireEvent.click(getByText(/dark/i))
  expect(button).toBeTruthy(); 
});

// run test to verify buttons and api call

// jk i have no idea what im doing