import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

const Logout = ({ authService, loggedIn }) => {
  const [uid, setUid] = useState(null);
  let navigate = useNavigate();
  authService.getStatus(setUid);

  try {
    authService.logout();
    navigate('/');
  } catch (err) {
    console.log(err);
  }
  return <></>;
};
export default Logout;
