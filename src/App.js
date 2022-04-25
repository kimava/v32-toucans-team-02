import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import MyList from './Pages/MyList/MyList';
import Profile from './Pages/ProfilePage/ProfilePage';
import Search from './Pages/Search/SaerchPage';
import SignUp from './Pages/SignUp/SignUp';
import Logout from './component/Logout/Logout';
import './App.css';
import { AuthContext } from './context/auth_context';

const App = ({ cardRepo }) => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
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
        <Route path='/login' element={<SignUp />} />

        <Route path='/my-list' element={<MyList cardRepo={cardRepo} />} />

        <Route path='/search' element={<Search cardRepo={cardRepo} />} />

        <Route path='/logout' element={<Logout />} />
      </Routes>
    </Router>
  );
};

export default App;
