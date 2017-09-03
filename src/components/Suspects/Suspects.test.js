import React from 'react';
import ReactDOM from 'react-dom';
import RandomItem from './RandomItem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RandomItem />, div);
});
