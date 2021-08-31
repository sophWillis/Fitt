import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Parser from 'html-react-parser';
import { Redirect, Link } from 'react-router-dom';
import ImageToggle from './ImageToggle';

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


    const toggleImage = () => {
        setChangeDetailsImage((prevState) => !prevState);
    };

    return (
        (item && id === pathname.split("/")[1]) ? (
            <>
                <CardImgContainer>
                    <img src={changeDetailsImage ? item.female.image : item.male.image} alt={item.name} />
                    <ImageToggleContainer>
                        <ImageToggle changeDetailsImage={changeDetailsImage} toggleImage={toggleImage} />
                    </ImageToggleContainer>
                </CardImgContainer>
                <CardTextContent>
                    <CardH1>{item.name}</CardH1>
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

const ImageToggleContainer = styled.div`
    .image-toggle {
        @media screen and (max-width: 768px) {
            bottom: unset;
            top: calc(40vh + 30px);
        }

        @media screen and (max-width: 480px) {
            bottom: unset;
            top: calc(40vh - 110px);
        }
    }
`;

const CardTextContent = styled.div`
    position: absolute;
    top: 40vh;
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
        background-color: transparent;
        height: calc(100vh - 80px);
        overflow-y: scroll;
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
