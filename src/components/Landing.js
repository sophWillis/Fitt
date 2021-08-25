import React from 'react';
import styled from 'styled-components';

const Landing = () => {
    return (
        <LandingPage>
            <LandingContainer>
                <LandingLogo>FITT</LandingLogo>
                <LandingLinksContainer>
                    <LandingLink>LOG IN</LandingLink>
                    |
                    <LandingLink>SIGN UP</LandingLink>
                </LandingLinksContainer>
            </LandingContainer>
        </LandingPage>
    );
}

export default Landing;

const LandingPage = styled.div`
    height: calc(100vh - 80px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const LandingContainer = styled.div`
    width: fit-content;
`;

const LandingLogo = styled.h1`
    font-size: 100px;
`;

const LandingLinksContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const LandingLink = styled.a``;
