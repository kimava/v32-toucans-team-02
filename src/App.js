import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './component/Pages/Home/Home';
import MyList from './component/Pages/MyList/MyList';
import Profile from './component/Pages/ProfilePage/ProfilePage';
import Search from './component/Pages/Search/SaerchPage';
import SignUp from './component/Pages/SignUp/SignUp';
import ResultProvider from './component/Pages/Search/search-context';

import './App.css';
import Logout from './component/Logout/Logout';
const App = ({ authService, cardRepo }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);
 authService.getStatus(setUserId);
  useEffect(() => {
    if (userId) {
      console.log("App.js",userId)
      setLoggedIn(true);
    }
    else{
      setLoggedIn(false)
    }
  },[userId,authService]);


  return (
    <ResultProvider>
      <Router>
        <Switch>
          <Route path='/' exact>
            <Home loggedIn={loggedIn} authService={authService} />
          </Route>
          <Route path='/profile'>
            <Profile
              loggedIn={loggedIn}
              authService={authService}
              uid={userId}
            />
          </Route>
          <Route path='/Login'>
            <SignUp logedIn={loggedIn} authService={authService} />
          </Route>
          <Route path='/MyList'>
            <MyList
              loggedIn={loggedIn}
              authService={authService}
              cardRepo={cardRepo}
            />
          </Route>
          <Route path='/Search' exact>
            <Search
              loggedIn={loggedIn}
              authService={authService}
              cardRepo={cardRepo}
            />
            
          </Route>
          <Route 
          path="/Logout" >
            <Logout loggedIn={loggedIn} authService={authService} />
          </Route>
        </Switch>
      </Router>
    </ResultProvider>
  );
};

export default App;
