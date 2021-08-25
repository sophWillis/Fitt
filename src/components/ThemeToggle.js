import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ReactComponent as SunIcon } from "../assets/svg/sun.svg";
import { ReactComponent as MoonIcon } from "../assets/svg/moon.svg";

const ThemeToggle = () => {
    const [isEnabled, setIsEnabled] = useState(false);

    const toggleState = () => {
        setIsEnabled((prevState) => !prevState);
    };

    const updateTheme = (isDarkEnabled) => {
        const styles = getComputedStyle(document.body),
            dark = styles.getPropertyValue("--black"),
            light = styles.getPropertyValue("--white"),
            docEl = document.documentElement;

        if (isDarkEnabled) {
            docEl.style.setProperty("--background", dark);
            docEl.style.setProperty("--foreground", light);
        } else {
            docEl.style.setProperty("--background", light);
            docEl.style.setProperty("--foreground", dark);
        }
    };

    useEffect(() => {
        updateTheme(isEnabled);
    }, [isEnabled]);

    return (
        <label>
            <Toggle className={isEnabled ? "enabled" : "disabled"} isEnabled={isEnabled}>
                <span class="hidden">
                    {isEnabled ? "Enable Dark Mode" : "Enable Light Mode"}
                </span>
                <div class="icons">
                    <SunIcon />
                    <MoonIcon />
                </div>
                <input
                    id="toggle"
                    name="toggle"
                    type="checkbox"
                    checked={isEnabled}
                    onClick={toggleState}/>
            </Toggle>
        </label>
    );
}

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
