import React from 'react'
import {BrowserRouter as Router , Switch  , Route} from 'react-router-dom'
import Home from './component/Pages/Home/Home'
import MyList from './component/Pages/MyList/MyList'
import Profile from './component/Pages/Profile/Profile'
import Search from './component/Pages/Search/SaerchPage'
import SignUp from './component/Pages/SignUp/SignUp'

import './App.css'



class App extends React.Component{
    state={
        logedIn:false,
    }
    render(){
        return(
            <Router>
            <Switch>
                <Route path='/'  exact >
                    <Home logedIn={this.state.logedIn}/>
                </Route>
                <Route path='/profile '  exact >
                    <Profile logedIn={this.state.logedIn} /> 
                </Route>
                <Route path='/Login'  exact >
                    <SignUp logedIn={this.state.logedIn}/>
                </Route>
                <Route path='/MyList'  exact>
                     <MyList  logedIn={this.state.logedIn} />
                </Route>
                <Route path='/Search'  exact >
                     <Search  logedIn={this.state.logedIn} />    
                </Route>
            </Switch>
            </Router>

               
        )
    }
}
export default  App

