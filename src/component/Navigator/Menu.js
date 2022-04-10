import React from 'react';
import {
  Nav,
  NavLink,
  Logo,
  Bars,
  NavMenu,
  SignUpBtns,
  Button,
} from './NavStyle';

const Menu = () => {
  const menu = [
    {
      name: 'SEARCH',
      to: 'search',
      isLogedIn: true,
    },
    {
      name: 'MY LIST',
      to: 'my-list',
      isLogedIn: true,
    },
    {
      name: 'PROFILE',
      to: 'profile',
      isLogedIn: true,
    },
  ];

  return (
    <Nav>
      <NavLink to='/'>
        <Logo />
      </NavLink>
      <Bars />
      <NavMenu>
        {menu.map((item) => (
          <NavLink to={`/${item.to}`} key={`${item.name}`}>
            {item.name}
          </NavLink>
        ))}
      </NavMenu>
      <SignUpBtns>
        <Button to='/login'>SIGN UP</Button>
        <Button to='/login'>LOG IN</Button>
      </SignUpBtns>
    </Nav>
  );
};

export default Menu;
