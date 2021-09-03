import React from 'react';
import MenuItem from '../menu-item/menu-item';
import './Menu.css';
class Menu extends React.Component {
  menu = [
  
    {
      name: 'Login',
      isLogedIn: false,
    },
    {
      name: 'Profile',
      isLogedIn: true,
    },
    {
      name: 'Search',
      isLogedIn: true,
    },
    {
      name: 'Mylist',
      isLogedIn: true,
    },
    {
      name: 'Logout',
      isLogedIn: true,
    },
  ];

  state = {
    width: window.innerWidth,
    hideMenu: false,
  };

  componentDidMount() {
    window.addEventListener('resize', this.resize.bind(this));
    window.addEventListener('scroll', this.resize.bind(this));
    this.resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize.bind(this));
  }

  closeMenuHandler() {
    this.setState({ hideMenu: true });
  }

  resize() {
    this.setState({ width: window.innerWidth });
    this.setState({ hideMenu: window.innerWidth <= 770 });
  }

  showHideMenuHadler = () => {
    if(window.innerWidth<=770){
      this.setState({ hideMenu: !this.state.hideMenu });
    }else {
      this.setState({ hideMenu: false });
    }
  };
 
  render() {
    const menuItems = this.menu.map((item, index) =>{
      if( this.props.logedIn === item.isLogedIn ){
     
          return <MenuItem
          key={index}
          link={`${item.name}`}
          >
          {item.name}
        </MenuItem> 
      }else{
        return null 
      }
    })
    let icon = null;
    if (this.state.width <= 770)
      icon = (
        <i
          className={this.state.hideMenu ? 'fa fa-bars ' : 'fa fa-times '}
        />
      );
    else icon = null;

    return (
      <nav className='navbar' onClick={this.showHideMenuHadler}>
        {icon}
        <ul className={this.state.hideMenu ? 'hide_menu' : 'show_menu'}>
          {menuItems}
        </ul>
      </nav>
    );
  }
}
export default Menu;
