import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { useAuth } from "../contexts/AuthContext";
import { animateScroll } from 'react-scroll';
import ThemeToggle from './ThemeToggle';

const Navbar = ({ isDarkThemeEnabled, toggleState }) => {
    const [error, setError] = useState(""),
        { currentUser, logout } = useAuth(),
        history = useHistory();

    const handleLogout = async () => {
    
        try {
            await logout();
            history.push("/log-in");
        } catch {
            setError("Failed to log out")
        }
    };

    const scrollToTop = () => {
        animateScroll.scrollToTop();
    };

    return (
        <Nav>
            <Logo to={currentUser ? "/dashboard" : "/"} onClick={scrollToTop} className={useLocation().pathname === "/" ? "visually-hidden" : ""}>FITT</Logo>
            <NavRight>
                {currentUser && (
                    <div>
                        <NavLink onClick={handleLogout}>LOG OUT</NavLink>
                        {error && <AlertBox>{error}</AlertBox>}
                    </div>
                )}
                <ThemeToggle isDarkThemeEnabled={isDarkThemeEnabled} toggleState={toggleState} />
            </NavRight>
        </Nav>
    );
}

export default Navbar;

const Nav = styled.nav`
    position: relative;
    padding: 0 40px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Logo = styled(Link)`
    font-weight: bold;
    font-size: 2rem;
`;

const NavRight = styled.div`
    display: flex;
    align-items: center;
`;

const NavLink = styled(Link)`
    margin-right: 20px;
`;

const AlertBox = styled.div`
    position: absolute;
    bottom: 0;
    color: #a94442;
    font-size: .875rem;
`;
