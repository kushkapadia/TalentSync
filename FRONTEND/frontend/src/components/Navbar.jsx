// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  padding: 1rem 2rem;
`;

const Logo = styled.a`
  font-size: 1.5rem;
  color: #fff;
  text-decoration: none;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  &:hover {
    color: #f0a500;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo to="/">MyLogo</Logo>
      <NavLinks>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/Internships">Internships</NavLink>
        <NavLink to="/Profile">Profile</NavLink>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;