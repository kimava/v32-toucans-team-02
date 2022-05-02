import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/auth_context';
import {
  Nav,
  NavLink,
  Logo,
  Bars,
  BarDropDown,
  NavMenu,
  SignUpBtns,
  SignOutButton,
  SignInButton,
} from './NavStyle';

const Menu = () => {
  const { userId, authService } = useContext(AuthContext);
  const [barOpen, setBarOpen] = useState(false);

  const onLogout = () => {
    authService.logout();
  };

  const menu = [
    {
      name: 'SEARCH',
      to: 'search',
    },
    {
      name: 'MY LIST',
      to: 'my-list',
    },
    {
      name: 'MY PAGE',
      to: 'my-page',
    },
  ];

  const menuList = menu.map((item) => (
    <NavLink to={`/${item.to}`} key={`${item.name}`}>
      {item.name}
    </NavLink>
  ));

  const onBarToggle = () => {
    setBarOpen(!barOpen);
  };

  return (
    <Nav>
      <NavLink to='/'>
        <Logo />
      </NavLink>
      <Bars onClick={onBarToggle} />
      {barOpen && <BarDropDown>{menuList}</BarDropDown>}
      <NavMenu>{menuList}</NavMenu>
      <SignUpBtns>
        {userId ? (
          <SignOutButton onClick={onLogout}>SIGN OUT</SignOutButton>
        ) : (
          <SignInButton to='/login'>SIGN IN</SignInButton>
        )}
      </SignUpBtns>
    </Nav>
  );
};

export default Menu;
