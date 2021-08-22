import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AuthService from './service/auth_service';
import CardRepo from './service/card_repo';

const authService = new AuthService();
const cardRepo = new CardRepo();

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} cardRepo={cardRepo} />
  </React.StrictMode>,
  document.getElementById('root')
);
