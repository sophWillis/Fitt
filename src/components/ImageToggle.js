import React from 'react';
import styled from 'styled-components';
import { ReactComponent as MarsIcon } from '../assets/svg/mars.svg';
import { ReactComponent as VenusIcon } from '../assets/svg/venus.svg';

const ImageToggle = ({ changeImage, changeDetailsImage, toggleImage }) => {
    
    return (
        <Toggle className="image-toggle">
            <form>
                    <span className="hidden">
                    </span>
                    <div className="icons">
                        <MarsIcon className={changeImage || changeDetailsImage ? "enabled" : "disabled"} />
                        <VenusIcon className={changeImage || changeDetailsImage ? "disabled" : "enabled"} />
                    </div>
                    <input
                        name="toggle"
                        type="checkbox"
                        onClick={toggleImage} />
                </form>
        </Toggle>
    );
};

export default ImageToggle;

const Toggle = styled.label`
    position: absolute;
    bottom: 10px;
    right: 10px;
    cursor: pointer;

    .icons {
        height: 24px;

        svg {
            padding: 0 5px;

            &.disabled {
                display: none;
            }
        }
    }
    input {
        position: absolute;
        bottom: 0;
        opacity: 0;
    }
`;
