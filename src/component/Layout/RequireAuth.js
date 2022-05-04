import React, { useContext } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { AuthContext } from '../../context/auth_context';

const RequireAuth = ({ children }) => {
  const { userId } = useContext(AuthContext);
  const location = useLocation();

  if (!userId) {
    return <Navigate to='/login' state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
