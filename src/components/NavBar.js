// NavBar.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping, faCoffee, faBars } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import styled from 'styled-components';
import theme from './theme';
import Logo from '../assets/images/ento.svg';

export const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <MainNavBar>
      <LeftIcon>
      <LogoImg src={Logo} alt="Ento Food Delivery Logo" />
        Ento Food Delivery
      </LeftIcon>
      <HamburgerMenu onClick={toggleMobileMenu}>
        <FontAwesomeIcon icon={faBars} size="2x" />
      </HamburgerMenu>
      <NavItems isopen={isMobileMenuOpen}>
        <MiddleItems>
          <NavItem href="/">Home</NavItem>
          <NavItem href="/admin">Admin</NavItem>
          <NavItem href="/contact">Contact</NavItem>
        </MiddleItems>
        <RightItems>
          <FontAwesomeIcon icon={faBasketShopping} color={theme.colors.neonMahneta} />
          <ContactUs>Contact Us</ContactUs>
        </RightItems>
      </NavItems>
    </MainNavBar>
  );
};
const LogoImg = styled.img`
  width: 70px;
  height: 70px;
  color: ${({ theme }) => theme.colors.neonMahneta};
  margin-right: 10px;
`;

const HamburgerMenu = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
    margin-right: 20px;
  }
`;

const NavItems = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  
  @media (max-width: 768px) {
    display: ${({ isopen }) => (isopen ? 'block' : 'none')};
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: ${({ theme }) => theme.colors.whiteColor};
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 999;
  }
`;

const ContactUs = styled.button`
  background-color: ${({ theme }) => theme.colors.neonMahneta};
  color: ${({ theme }) => theme.colors.whiteColor};
  border-radius: 30px;
  border: none;
  padding: 6px 12px;
  cursor: pointer;
  font-size: 1em;
  margin-left: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.background};
  }

  @media (max-width: 768px) {
    margin-top: 10px;
    width: 100%;
    text-align: center;
  }
`;

const RightItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-grow: 1;
  padding-right: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding-right: 0;
  }
`;

const MiddleItems = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  gap: 20px;
  font-size: 1.2em;

  a {
    color: ${({ theme }) => theme.colors.background};
    text-decoration: none;
    padding: 10px;
    transition: color 0.3s ease, border-bottom 0.3s ease;
    border-bottom: 2px solid transparent;
  }

  a:hover {
    color: ${({ theme }) => theme.colors.neonMahneta};
    border-bottom: 2px solid ${({ theme }) => theme.colors.neonMahneta};
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const NavItem = styled.a`
  color: ${({ theme }) => theme.colors.background};
  text-decoration: none;
  padding: 10px;
  transition: color 0.3s ease, border-bottom 0.3s ease;
  border-bottom: 2px solid transparent;

  &:hover {
    color: ${({ theme }) => theme.colors.neonMahneta};
    border-bottom: 2px solid ${({ theme }) => theme.colors.neonMahneta};
  }
`;

const LeftIcon = styled.div`
  display: flex;
  align-items: center;
  padding-left: 40px;
  font-size: 1.5em;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  color: ${({ theme }) => theme.colors.background};

  @media (max-width: 768px) {
    padding-left: 10px;
  }
`;

const MainNavBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 12%;
  width: 100%;
  background: ${({ theme }) => theme.colors.whiteColor};
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  z-index: 1000;

  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;
