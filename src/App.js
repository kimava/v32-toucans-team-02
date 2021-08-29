import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './component/Pages/Home/Home';
import MyList from './component/Pages/MyList/MyList';
import Profile from './component/Pages/ProfilePage/ProfilePage';
import Search from './component/Pages/Search/SaerchPage';
import SignUp from './component/Pages/SignUp/SignUp';
import ResultProvider from './component/Pages/Search/search-context';

import './App.css';
const App = ({ authService, cardRepo }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);
  authService.getStatus(setUserId)
   useEffect(() => {
    if(userId){
      setLoggedIn(true)
    }
  }); 
  

  return (
  
    <ResultProvider>
    
      <Router>
        <Switch>
          <Route path='/' exact>
            <Home loggedIn={loggedIn} authService={authService} />
          </Route>
          <Route path='/profile' >
          {console.log('in router:',userId)}
            <Profile loggedIn={loggedIn} authService={authService}
          
            uid={userId} />
          </Route>
          <Route path='/Login' >
            <SignUp logedIn={loggedIn} authService={authService} />
          </Route>
          <Route path='/MyList' >
            <MyList
              logedIn={loggedIn}
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
        </Switch>
      </Router>
    </ResultProvider>
  );
};

export default App;
