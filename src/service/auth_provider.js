import React, { useEffect, useState } from 'react';
import { AuthContext } from '../context/auth_context';
import { firebaseApp } from '../service/firebase';
import AuthService from '../service/auth_service';

const authService = new AuthService(firebaseApp);

const AuthProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    authService.onAuthChange((user) => {
      user ? setUserId(user.uid) : setUserId(null);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ authService, userId }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
