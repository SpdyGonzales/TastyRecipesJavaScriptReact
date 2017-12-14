import React from 'react';
import ReactDOM from 'react-dom';

import Router from './router.jsx';
import './styles/reset.css';
import './styles/mainstyle.css';
import './styles/index.css';

ReactDOM.render(
  <Router />,
  document.getElementById('app-root')
);
