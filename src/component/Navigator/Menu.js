import React, { useContext } from 'react';
import { AuthContext } from '../../context/auth_context';
import {
  Nav,
  NavLink,
  Logo,
  Bars,
  NavMenu,
  SignUpBtns,
  SignOutButton,
  SignInButton,
} from './NavStyle';

const Menu = () => {
  const { userId, authService } = useContext(AuthContext);

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
