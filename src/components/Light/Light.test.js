import React from 'react';
import ReactDOM from 'react-dom';
import Light from './Light';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Light />, div);
});
