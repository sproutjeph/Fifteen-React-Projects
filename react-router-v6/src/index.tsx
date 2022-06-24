import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import ReactDom from 'react-dom';
import App from './App';
import './index.scss';

ReactDom.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
