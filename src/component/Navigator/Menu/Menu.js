import React from 'react'
import MenuItem from '../MenuItem/MenuItem'
import './Menu.css'

class Menu extends React.Component{
    menu=[
        {
            name:'Home', 
            isLogedIn:false,
        },
        {
            name:'Login', 
            isLogedIn:false,
        }
        ,
        {
            name:"Search", 
            isLogedIn:true,
        },
        {
            name:"Profile", 
            isLogedIn:true,
        },
        {
            name:"My Book list", 
            isLogedIn:true,
        }
        ,{
            name:"Logout", 
            isLogedIn:true,
        }
    ]    

    state={
        width:window.innerWidth,
        height:window.innerHeight,
    }
    componentDidMount(){
        this.getScreenDimension()
    }
    getScreenDimension=()=>{
       const  scrWidth=window.innerWidth
       const scrHeight=window.innerHeight
        this.setState({
        width:scrWidth,
        height:scrHeight
        }
            )
    }
    render(){
        const menuItems = this.menu.map((item , index )=>(item.isLogedIn===this.props.logedIn)?<MenuItem key={index}>{item.name}</MenuItem>:null)
        return(
        
           
         <ul className="menu">
             {menuItems}
        </ul>
        
       
          
        )
    }
}
export default Menu