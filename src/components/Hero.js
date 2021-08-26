import React from 'react'
import Landing from './Landing';
import { useAuth } from '../contexts/AuthContext';

const Hero = () => {
    const { currentUser } = useAuth();

    return (
        <>
            {!currentUser && <Landing />}
        </>
    );
}

export default Hero;
