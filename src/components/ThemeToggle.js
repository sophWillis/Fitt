import React, { useEffect } from 'react';
import styled from 'styled-components';
import { ReactComponent as SunIcon } from '../assets/svg/sun.svg';
import { ReactComponent as MoonIcon } from '../assets/svg/moon.svg';

const ThemeToggle = ({ isDarkThemeEnabled, toggleState }) => {
    const updateTheme = (isDarkThemeEnabled) => {
        const styles = getComputedStyle(document.body),
            dark = styles.getPropertyValue("--black"),
            light = styles.getPropertyValue("--white"),
            docEl = document.documentElement;

        if (isDarkThemeEnabled) {
            docEl.style.setProperty("--background", dark);
            docEl.style.setProperty("--foreground", light);
        } else {
            docEl.style.setProperty("--background", light);
            docEl.style.setProperty("--foreground", dark);
        }
    };

    useEffect(() => {
        updateTheme(isDarkThemeEnabled);
    }, [isDarkThemeEnabled]);

    return (
        <label>
            <Toggle className={isDarkThemeEnabled ? "enabled" : "disabled"} isDarkThemeEnabled={isDarkThemeEnabled}>
                <span className="hidden">
                    {isDarkThemeEnabled ? "Enable Dark Mode" : "Enable Light Mode"}
                </span>
                <div className="icons">
                    <SunIcon />
                    <MoonIcon />
                </div>
                <input
                    name="toggle"
                    type="checkbox"
                    onClick={toggleState} />
            </Toggle>
        </label>
    );
};

export default ThemeToggle;

const Toggle = styled.div`
    position: relative;
    background: var(--foreground);
	transition: background var(--transition);
    border-radius: 40px;
    padding: 5px 10px;
    cursor: pointer;

    :before {
        content: "";
        display: block;
        height: 24px;
        width: 24px;
        border-radius: 50%;
        position: absolute;
        transform: translate(0);
        background: var(--background);
        transition: transform var(--transition), background var(--transition);
    }
    &.enabled:before {
        transform: translateX(24px);
    }
    .icons {
        height: 24px;

        svg {
            fill: var(--background);
            padding: 0 5px;
        }
    }
    input {
        position: absolute;
        opacity: 0;
    }
`;
