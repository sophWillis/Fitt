import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
    const emailRef = useRef(),
        { resetPassword } = useAuth(),
        [error, setError] = useState(""),
        [loading, setLoading] = useState(false),
        [message, setMessage] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setError("");
            setMessage("");
            setLoading(true);
            await resetPassword(emailRef.current.value);
            setMessage("Check your inbox for further instructions");
        } catch {
            setError("Failed to send email to reset password");
        }
        setLoading(false);
    };

    return (
        <Card>
            <SignUpH1>Forgot Password?</SignUpH1>
            {error && <AlertBox>{error}</AlertBox>}
            {message && <SuccessBox>{message}</SuccessBox>}
            <Form onSubmit={handleSubmit}>
                <Label>Email</Label>
                <Input type="email" id="email" ref={emailRef} required />
                <Button disabled={loading} type="submit">Reset Password</Button>
                <Login><RouterLink to="/log-in">Log in</RouterLink></Login>
            </Form>
            <div>Don't have an account? <RouterLink to="/sign-up">Sign Up</RouterLink></div>
        </Card>
    )
}

export default ForgotPassword;

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

const AlertBox = styled.div`
    background-color: #f2dede;
    border: 1px solid #ebccd1;
    color: #a94442;
    margin-bottom: 30px;
    padding: 15px;
    border-radius: 5px;
    width: 100%;
    font-size: .875rem;

    @media screen and (min-width: 480px) {
        width: 500px;
    }
`;

const SuccessBox = styled.div`
    background-color: #dff0d8;
    border: 1px solid #d6e9c6;
    color: #3c763d;
    margin-bottom: 30px;
    padding: 15px;
    border-radius: 5px;
    width: 100%;
    font-size: .875rem;

    @media screen and (min-width: 480px) {
        width: 500px;
    }
`;

const Login = styled.div`
    text-align: center;
`;

const RouterLink = styled(Link)`
    text-decoration: none;

    :hover {
        text-decoration: underline;
    }
`;
