import React from 'react'
import Layout from '../src/component/Layout/Layout'

import './App.css'


class App extends React.Component{
    state={
        logedIn:false,
    }
    render(){
        return(
            <div id='main'  className='container'>
                <Layout logedIn={this.state.logedIn}/>
            </div>
        )
    }
}
export default  App

