import React from 'react';
import ReactDOM from 'react-dom';
import { firebaseApp } from './service/firebase';
import App from './App';
import '@fortawesome/fontawesome-free/js/all.js';
import AuthService from './service/auth_service';
import CardRepo from './service/card_repo';

const authService = new AuthService(firebaseApp);
const cardRepo = new CardRepo(firebaseApp);

ReactDOM.render(
  <App authService={authService} cardRepo={cardRepo} />,
  document.getElementById('root')
);
