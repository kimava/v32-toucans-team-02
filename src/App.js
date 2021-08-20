import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './component/Pages/Home/Home';
import MyList from './component/Pages/MyList/MyList';
import Profile from './component/Pages/ProfilePage/ProfilePage';
import Search from './component/Pages/Search/SaerchPage';
import SignUp from './component/Pages/SignUp/SignUp';
import ResultProvider from './component/Pages/Search/search-context'

import './App.css';
const App =(props)=>{
 const [loggedIn , setLoggedIn]=useState(false)
 useEffect(() => {
  props.authService.onAuthChange((user) => {
 if(user){
   setLoggedIn(true)
   console.log(`loggedin user ${user}`)
 }
 else{
  setLoggedIn(false)
  console.log(`no one logged in  ${user}`)
 }
   
  })
})


  return (
   <ResultProvider>
        <Router>
          <Switch>
            <Route path='/' exact>
              <Home logedIn={loggedIn} 
              authService={props.authService}
              />
            </Route>
            <Route path='/profile ' exact>
              <Profile logedIn={loggedIn} 
              authService={props.authService}/>
            </Route>
            <Route path='/Login' exact>
              <SignUp
                logedIn={loggedIn}
                authService={props.authService}
              />
            </Route>
            <Route path='/MyList' exact>
              <MyList logedIn={loggedIn} 
              authService={props.authService}/>
            </Route>
            <Route path='/Search' exact>
              <Search
                logedIn={loggedIn}
                authService={props.authService}
              />
            </Route>
          </Switch>
      </Router>
   
    </ResultProvider>
  )
}

export default App;
