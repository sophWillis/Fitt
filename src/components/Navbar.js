import React from 'react';
import styled from 'styled-components';
import { animateScroll } from 'react-scroll';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
    const scrollToTop = () => {
        animateScroll.scrollToTop();
    };

    return (
        <Nav>
            <Logo to="/" onClick={scrollToTop} className="visually-hidden">FITT</Logo>
            <ThemeToggle />
        </Nav>
    );
}

export default Navbar;

const Nav = styled.nav`
    padding: 0 40px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Logo = styled.h1`
    font-size: 2rem;
`;
