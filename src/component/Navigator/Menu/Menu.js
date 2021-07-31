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
        hideMenu:false,
    }
    componentDidMount(){
        this.getScreenDimension()
       
    }
    getScreenDimension=()=>{
       const  scrWidth=window.innerWidth
        this.setState({
        width:scrWidth,
        })
        if(this.state.width<688){
            this.setState({hideMenu:true,})
        }
    }
    showHideMenuHadler=()=>{
        this.setState({hideMenu:!this.state.hideMenu})
    }
    render(){
        const menuItems = this.menu.map((item , index )=>(item.isLogedIn===this.props.logedIn)?<MenuItem key={index}>{item.name}</MenuItem>:null)
        let icon =null
        if(this.state.width<688)
            icon=  <i onClick={this.showHideMenuHadler}  className={this.state.hideMenu ? 'fa fa-bars ' : 'fa fa-times '} />
        else
            icon=null
        return(
        
          <div>
                {icon}
                <ul className={(this.state.hideMenu)?'hide_menu':'show_menu'}>
                    {menuItems}
                </ul>
          </div> 
         
        
       
          
        )
    }
}
export default Menu