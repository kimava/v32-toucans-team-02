import React from 'react';
import ReactDOM from 'react-dom';
import { firebaseApp } from './service/firebase';
import '@fortawesome/fontawesome-free/js/all.js';
import CardRepo from './service/card_repo';
import AuthProvider from './service/auth_provider';
import App from './App';

const cardRepo = new CardRepo(firebaseApp);

ReactDOM.render(
  <AuthProvider>
    <App cardRepo={cardRepo} />
  </AuthProvider>,
  document.getElementById('root')
);
