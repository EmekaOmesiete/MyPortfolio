import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <Nav>
      <Logo to="/">MyPortfolio</Logo>

      <MenuIcon onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </MenuIcon>

      <NavItems open={menuOpen}>
        <LinkItem to="/" onClick={() => setMenuOpen(false)}>
          Home
        </LinkItem>
        <LinkItem to="/about" onClick={() => setMenuOpen(false)}>
          About
        </LinkItem>
        <LinkItem to="/projects" onClick={() => setMenuOpen(false)}>
          Projects
        </LinkItem>
        <LinkItem to="/experience" onClick={() => setMenuOpen(false)}>
          Experience
        </LinkItem>
        <LinkItem to="/contact" onClick={() => setMenuOpen(false)}>
          Contact
        </LinkItem>
      </NavItems>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
  background: #6a5acd;
  position: sticky;
  top: 0;
  z-index: 100;

  @media (max-width: 768px) {
    padding: 1rem 2rem;
  }

  @media (max-width: 600px) {
    padding: 0.8rem 1.5rem;
  }
`;

const Logo = styled(NavLink)`
  color: white;
  font-weight: 800;
  font-size: 1.5rem;
  text-decoration: none;

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }

  @media (max-width: 600px) {
    font-size: 1.3rem;
  }
`;

const MenuIcon = styled.div`
  display: none;
  font-size: 1.8rem;
  color: white;
  cursor: pointer;

  @media (max-width: 430px) {
    display: block;
  }
`;

const NavItems = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 430px) {
    position: absolute;
    top: 70px;
    left: 0;
    right: 0;
    background: #6a5acd;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 1rem 0;
    transition: max-height 0.3s ease-in-out;
    overflow: hidden;
    max-height: ${({ open }) => (open ? "300px" : "0")};
  }
`;

const LinkItem = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-weight: 500;
  position: relative;

  &.active {
    &::after {
      content: "";
      display: block;
      height: 2px;
      width: 100%;
      background: white;
      position: absolute;
      bottom: -4px;
      left: 0;
      border-radius: 2px;
    }
  }

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 430px) {
    font-size: 0.9rem;
  }
`;
