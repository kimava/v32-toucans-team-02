import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import MyList from './Pages/MyList/MyList';
import Profile from './Pages/ProfilePage/ProfilePage';
import Search from './Pages/Search/SaerchPage';
import SignUp from './Pages/SignUp/SignUp';

import './App.css';
import Logout from './component/Logout/Logout';
const App = ({ authService, cardRepo }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);
  authService.getStatus(setUserId);
  useEffect(() => {
    if (userId) {
      console.log('App.js', userId);
      setLoggedIn(true);
    } else {
      setLoggedIn(true);
    }
  }, [userId, authService]);

  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={<Home loggedIn={loggedIn} authService={authService} />}
        />
        {/* <Route
          path='/profile'
          element={
            <Profile
              loggedIn={loggedIn}
              authService={authService}
              uid={userId}
            />
          }
        /> */}
        <Route
          path='/login'
          element={<SignUp logedIn={loggedIn} authService={authService} />}
        />

        <Route
          path='/my-list'
          element={
            <MyList
              loggedIn={loggedIn}
              authService={authService}
              cardRepo={cardRepo}
            />
          }
        />

        <Route
          path='/search'
          element={
            <Search
              loggedIn={loggedIn}
              authService={authService}
              cardRepo={cardRepo}
            />
          }
        />

        <Route
          path='/logout'
          element={<Logout loggedIn={loggedIn} authService={authService} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
