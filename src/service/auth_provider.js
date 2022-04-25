import React, { useEffect, useState } from 'react';
import { AuthContext } from '../context/auth_context';
import { firebaseApp } from '../service/firebase';
import AuthService from '../service/auth_service';

const authService = new AuthService(firebaseApp);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    authService.onAuthChange((user) => {
      user && setUser(user.uid);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ authService, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
