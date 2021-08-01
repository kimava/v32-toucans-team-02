import React from 'react'


import './App.css'
import Home from './component/Pages/Home/Home'


class App extends React.Component{
    state={
        logedIn:true,
    }
    render(){
        return(
                <Home  logedIn={this.state.logedIn}/>
        )
    }
}
export default  App

