import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '@fortawesome/fontawesome-free/js/all.js';
import AuthService from './service/auth_service';
import CardRepo from './service/card_repo';

const authService = new AuthService();
const cardRepo = new CardRepo();

ReactDOM.render(
  <App authService={authService} cardRepo={cardRepo} />,
  document.getElementById('root')
);
