import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Parser from 'html-react-parser';
import { Redirect, Link } from 'react-router-dom';
import { ReactComponent as MarsIcon } from '../assets/svg/mars.svg';
import { ReactComponent as VenusIcon } from '../assets/svg/venus.svg';

const Details = ({
    location: {
        pathname,
        state: {
            item,
            changeImage
        }
    },
    match: {
        params: {id}
    }
}) => {
    const [changeDetailsImage, setChangeDetailsImage] = useState(changeImage);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    const toggleState = () => {
        setChangeDetailsImage((prevState) => !prevState);
    };

    return (
        (item && id === pathname.split("/")[1]) ? (
            <>
                <CardImgContainer>
                    <img src={changeDetailsImage ? item.female.image : item.male.image} alt={item.name} />
                </CardImgContainer>
                <Toggle>
                    <form>
                            <span className="hidden">
                            </span>
                            <div className="icons">
                                <MarsIcon className={changeDetailsImage ? "enabled" : "disabled"} />
                                <VenusIcon className={changeDetailsImage ? "disabled" : "enabled"} />
                            </div>
                            <input
                                name="toggle"
                                type="checkbox"
                                onClick={toggleState} />
                        </form>
                </Toggle>
                <CardTextContent>
                    <CardH1>{item.name}</CardH1>
                    <TagsContainer>
                        {
                            item.bodyAreas.map((bodyArea, key) => (
                                <TagLink to={`/?filter=${bodyArea}`} key={key}>{bodyArea}</TagLink>
                            ))
                        }
                    </TagsContainer>
                    <CardTranscript>{Parser(item.transcript)}</CardTranscript>
                </CardTextContent>
            </>
        ) : <Redirect to="/404" />
    );
};

export default Details;

const CardImgContainer = styled.div`
    position: relative;
    height: calc(100vh - 80px);

    :before {
        content: "";
        opacity: .5;
        background-color: var(--black);
        position: absolute;
        width: 100%;
        height: calc(100vh - 80px);

        @media screen and (min-width: 769px) {
            border-top-right-radius: 10px;
        }
    }

    img {
        width: 100%;
        height: 60vh;
        object-fit: cover;
        object-position: top;

        @media screen and (min-width: 769px) {
            height: 100%;
            border-top-right-radius: 10px;
        }
    }

    @media screen and (min-width: 769px) {
        width: 50%;
    }
`;

const CardTextContent = styled.div`
    position: absolute;
    top: 40vh;
    min-height: 60vh;
    width: 100%;
    border-radius: 30px 30px 0 0;
    background-color: var(--background);
    padding: 30px;

    @media screen and (min-width: 481px) {
        top: 60vh;
    }

    @media screen and (min-width: 769px) {
        width: 50%;
        right: 0;
        top: 80px;
    }
`;

const CardTranscript = styled.div`
    ol {
        padding-left: 30px;
        margin-bottom: 30px;
    }
    li {
        margin-bottom: 20px;
    }
    p {
        font-style: italic;
        font-size: 14px;
    }
`;

const CardH1 = styled.h1`
    margin-bottom: 30px;
`;

const TagsContainer = styled.div`
    display: flex;
    margin-bottom: 30px;
`;

const TagLink = styled(Link)`
    text-transform: uppercase;
    background-color: #383838;
    color: var(--white);
    margin-right: 10px;
    padding: 5px 10px;
    border-radius: 3px;
    font-weight: 600;
`;

const Toggle = styled.label`
    position: absolute;
    top: calc(40vh - (24px + 10px));
    right: 10px;
    border-radius: 40px;
    cursor: pointer;

    @media screen and (min-width: 481px) {
        top: calc(60vh - (24px + 10px));
    }

    @media screen and (min-width: 769px) {
        top: calc(80px + 10px);
        left: 10px;
    }

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
        opacity: 0;
    }
`;
