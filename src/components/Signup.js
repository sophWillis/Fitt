import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { useAuth } from '../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';

const Signup = () => {
    const emailRef = useRef(),
        passwordRef = useRef(),
        passwordConfirmationRef = useRef(),
        { signup } = useAuth(),
        [error, setError] = useState(""),
        [loading, setLoading] = useState(false),
        history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (passwordRef.current.value !== passwordConfirmationRef.current.value) {
            return setError("Passwords do not match");
        }

        try {
            setError("");
            setLoading(true);
            await signup(emailRef.current.value, passwordRef.current.value);
            history.push("/dashboard");
        } catch (res) { 
            setError("Failed to create an account. " + res.message);
        }
        setLoading(false);
    };

    return (
        <Card>
            <SignUpH1>SIGN UP</SignUpH1>
            {error &&
                <Alert>
                    <AlertBox>{error}</AlertBox>
                </Alert>
            }
            <Form onSubmit={handleSubmit}>
                <Label>Email</Label>
                <Input type="email" id="email" ref={emailRef} required />
                <Label>Password</Label>
                <Input type="password" id="password" ref={passwordRef} required />
                <Label>Confirm password</Label>
                <Input type="password" id="password-confirm" ref={passwordConfirmationRef} required />
                <Button disabled={loading} type="submit">SIGN UP</Button>
            </Form>
            <div>Already have an account? <RouterLink to="/log-in">Log In</RouterLink></div>
        </Card>
    )
}

export default Signup;

const Card = styled.div`
    height: calc(100vh - 80px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 30px;
`;

const SignUpH1 = styled.h1`
    margin-bottom: 30px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 15px;

    @media screen and (min-width: 480px) {
        width: 500px;
    }
`;

const Input = styled.input`
    margin-bottom: 15px;
    height: 40px;
    width: 100%;
    border: none;
    outline: none;
    background-color: #eee;
    border-radius: 5px;
    padding: 0 15px;
`;

const Label = styled.label`
    margin-bottom: 10px;
`;

const Button = styled.button`
    cursor: pointer;
    outline: none;
    border: none;
    width: 100%;
    height: 40px;
    background-color: ${({ isDarkThemeEnabled }) => (isDarkThemeEnabled ? "var(--foreground)" : "#383838")};
    color: ${({ isDarkThemeEnabled }) => (isDarkThemeEnabled ? "var(--foreground)" : "var(--white)")};
    margin: 15px 0 30px;
    font-weight: 700;
    font-size: 1rem;
    border-radius: 5px;
`;

const Alert = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    img {
        width: 100px;
        margin-bottom: 30px;
    }

    @media screen and (min-width: 480px) {
        width: 500px;
    }
`;

const AlertBox = styled.div`
    background-color: #f2dede;
    border: 1px solid #ebccd1;
    color: #a94442;
    margin-bottom: 30px;
    padding: 15px;
    border-radius: 5px;
    width: 100%;
    font-size: .875rem;
`;

const RouterLink = styled(Link)`
    text-decoration: none;

    :hover {
        text-decoration: underline;
    }
`;
