// Include React. You won't be creating any Components here so you don't need to import {Component} seperately.
import React from 'react';

// Import the react dom which we will use to render our React Component into the DOM. Make sure react-dom is npn installed and saved in package.json.
import ReactDOM from 'react-dom';

// Import the App Component.
import App from './components/App.jsx';

// Tell the React virtual DOM where to mount the App Component.
ReactDOM.render(
  <App />,
  document.getElementById('root')
)
