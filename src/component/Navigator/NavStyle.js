import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import logo from '../../Assets/book.png';

export const Nav = styled.nav`
  padding: 0.5rem;
  width: 100%;
  height: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
`;

export const NavMenu = styled.div`
  display: flex;
  justify-content: space-between;
  white-space: nowrap;

  @media screen and (max-width: 48rem) {
    display: none;
  }
`;

export const NavLink = styled(Link)`
  padding: 0 1rem;
  color: #000;
  text-decoration: none;
  cursor: pointer;

  &.active {
    text-decoration: underline;
  }
`;

export const Logo = styled.img.attrs({ src: `${logo}` })`
  width: 72px;
  height: 72px;
  cursor: pointer;
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #000;

  @media screen and (max-width: 48rem) {
    position: absolute;
    top: 0;
    right: 0;
    display: block;
    font-size: 1.8rem;
    transform: translate(-100%, 75%);
    cursor: pointer;
    z-index: 10;
  }
`;

export const BarDropDown = styled.div`
  display: none;
  @media screen and (max-width: 48rem) {
    position: absolute;
    top: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;

    a {
      padding: 1.5rem;
      width: 100%;
      font-size: 2rem;
      text-align: center;

      &:hover {
        background-color: #efefef;
        transition: all 0.2s ease-in-out;
      }
    }
  }
`;

export const SignUpBtns = styled.div`
  display: flex;
  @media screen and (max-width: 48rem) {
    display: none;
  }
`;

export const SignInButton = styled(Link)`
  margin-right: 1rem;
  padding: 1rem 1.5rem;
  width: 8rem;
  color: #fff;
  text-align: center;
  text-decoration: none;
  outline: none;
  border: none;
  background-color: #000;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #000;
    background-color: #fff;
  }
`;

export const SignOutButton = styled.button`
  margin-right: 1rem;
  padding: 1rem 1.5rem;
  width: 8rem;
  color: #fff;
  text-align: center;
  text-decoration: none;
  outline: none;
  border: none;
  background-color: #000;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #000;
    background-color: #fff;
  }
`;
