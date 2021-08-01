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
        window.addEventListener("resize", this.resize.bind(this));
        window.addEventListener('scroll', this.resize.bind(this))
        this.resize()
       
    }
    componentWillUnmount(){
        window.removeEventListener("resize", this.resize.bind(this));

    }
    closeMenuHandler(){
        this.setState({hideMenu:true})
    }
    resize(){
        this.setState({width:window.innerWidth})
        this.setState({hideMenu: window.innerWidth <= 688})

    }
    showHideMenuHadler=()=>{
        this.setState({hideMenu:!this.state.hideMenu})
    }
    render(){
        console.log(this.props.logedIn)
        const menuItems =this.menu.map((item , index )=>(this.props.logedIn===item.isLogedIn)?<MenuItem key={index} >{item.name}</MenuItem>:null)
        let icon =null
        if(this.state.width<=688)
            icon=  <i onClick={this.showHideMenuHadler}   className={this.state.hideMenu ? 'fa fa-bars ' : 'fa fa-times '} />
        else
            icon=null
        return(
        
          <nav>
                {icon}
                <ul className={(this.state.hideMenu)?'hide_menu':'show_menu'}>
                    
                    {menuItems}
                </ul>
          </nav> 
         
        
       
          
        )
    }
}
export default Menu