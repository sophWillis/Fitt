import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Montserrat', sans-serif;
        -webkit-tap-highlight-color: transparent;
    }
    :root {
        --black: #1b1b1b;
        --white: #fff;
        --backround: var(--white);
        --foreground: var(--black);
        --transition: 0.5s ease;
    }
    html {
        background: var(--background);
        color: var(--foreground);
        transition: color var(--transition), background var(--transition);
    }
    a {
        cursor: pointer;
        text-decoration: none;
        color: inherit;
    }
    button {
        cursor: pointer;
        border: none;
        outline: none;
    }
    .hidden {
        display: none;
    }
    .visually-hidden {
        visibility: hidden;
    }
`;
