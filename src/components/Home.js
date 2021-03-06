import React, { useState, useEffect } from 'react';
import { animateScroll } from 'react-scroll';
import styled from 'styled-components';
import Landing from './Landing';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';
import ImageToggle from './ImageToggle';

const Home = () => {
    const limitCount = 6;
    const { currentUser } = useAuth(),
        [allExercises, setAllExercises] = useState([]),
        [filteredExercises, setFilteredExercises] = useState([]),
        [limit, setLimit] = useState(limitCount),
        [allBodyAreas, setAllBodyAreas] = useState([]),
        [changeImage, setChangeImage] = useState(false),
        [loading, setLoading] = useState(true);

    const setBodyAreas = exercises => {
        const uniqueArray = [];

        exercises.forEach(exercise => {
            exercise.bodyAreas?.forEach(bodyArea => {
                if (!uniqueArray.includes(bodyArea)) {
                    uniqueArray.push(bodyArea);
                }
            });
        });

        setAllBodyAreas(uniqueArray);
    };

    useEffect(() => {
        const fetchData = async () => {
            await fetch('https://private-922d75-recruitmenttechnicaltest.apiary-mock.com/customexercises/')
                .then((res) => res.json())
                .then((data) => {
                    setLoading(false);
                    setAllExercises(data.exercises);
                    setFilteredExercises(data.exercises);
                    setBodyAreas(data.exercises);
                });
        };
        fetchData();
    },[]);

    const loadMoreExercises = (e) => {
        setLoading(true);
        setLimit(limit + limitCount);
        animateScroll.scrollToBottom();
        setLoading(false);
    };

    const toggleImage = () => {
        setChangeImage((prevState) => !prevState);
    };

    const setActiveTagClass = (e) => {
        e.target.parentElement?.querySelectorAll('li')?.forEach(tag => {
            tag.classList.remove('active');
        })
        e.target.classList.add('active');
    }

    const filterExercises = (e, selectedBodyArea) => {
        const filteredExercises = [];

        setLimit(limitCount);

        allExercises.forEach(exercise => {
            exercise.bodyAreas?.forEach(bodyArea => {
                if (bodyArea === selectedBodyArea) {
                    filteredExercises.push(exercise);
                    setFilteredExercises(filteredExercises);
                }
            });
        });

        setActiveTagClass(e);
    };

    const resetFilters = (e) => {
        setFilteredExercises(allExercises);
        setLimit(limitCount);
        setActiveTagClass(e);
    };

    return (
        <>
            {!currentUser ? <Landing /> : (
                <HomeContainer className="scroll-container">
                    <HomeH1>EXERCISES</HomeH1>
                    <FilterContainer>
                        <li className="active" onClick={resetFilters}>ALL</li>
                        {allBodyAreas.map((bodyArea, key) => (
                            <li
                                key={key}
                                onClick={(event) => filterExercises(event, bodyArea)}>
                                {bodyArea}
                            </li>
                        ))}
                    </FilterContainer>
                    <CardsContainer>
                        {filteredExercises.slice(0, limit).map((item, key) => {
                            const loadMoreBtn = document.querySelector('.load-more');

                            if ((key + 1) === filteredExercises.length) {
                                loadMoreBtn && (loadMoreBtn.disabled = true);
                            } else {
                                loadMoreBtn && (loadMoreBtn.disabled = false);
                            }

                            // fixing wrong female image URL for first object in fetched data
                            if (key === 0 && item.female.image) {
                                item.female.image = "https://cdni.gs.lightning-e.com/media/5c0e6814ee0147fd16ef61d2-femalepullupthumbnail.jpg";
                            }
                            return (
                                <CardContainer key={key}>
                                    <Card 
                                        to={{
                                            pathname: `/${item.name?.replace(/\s+/g, '-').toLowerCase()}`,
                                            state: {
                                                item,
                                                changeImage
                                            }
                                        }}>
                                        <CardImg src={changeImage ? item.female?.image : item.male?.image} alt={item.name} />
                                        <CardTitle>{item.name}</CardTitle>
                                    </Card>
                                    <ImageToggle changeImage={changeImage} toggleImage={toggleImage} />
                                </CardContainer>
                            )
                        })}
                    </CardsContainer>
                    {loading && <div>Loading...</div>}
                    {filteredExercises.length > limitCount && 
                        <LoadMoreContainer>
                            <LoadMore className="load-more" onClick={(event) => !!filteredExercises.length && loadMoreExercises(event)}>LOAD MORE</LoadMore>
                        </LoadMoreContainer>
                    }
                </HomeContainer>
            )}
        </>
    );
};

export default Home;

const HomeContainer = styled.div`
    margin: 0 30px;
    height: calc(${window.innerHeight + 'px'} - 80px);

    @media screen and (max-width: 768px) {
        margin: 0 30px;
    }
`;

const HomeH1 = styled.h1`
    font-size: 30px;
    margin-bottom: 20px;
`;

const FilterContainer = styled.ul`
    display: flex;
    overflow-x: scroll;
    list-style: none;
    margin: 0 -30px 30px 0;
    
    li {
        cursor: pointer;
        text-transform: uppercase;
        background-color: #C4C4C4;
        color: var(--white);
        margin-right: 5px;
        padding: 5px 10px;
        border-radius: 3px;
        font-weight: 600;

        &:last-child {
            margin-right: 30px;
        }

        &.active {
            background-color: #383838;
        }
    }
`;

const CardsContainer = styled.div`
    @media screen and (min-width: 769px) {
        display: grid;
        grid-template-columns: auto auto auto;
        grid-gap: 20px;
        margin-bottom: 20px;
    }
`;

const CardContainer = styled.div`
    cursor: pointer;
    position: relative;
    height: 200px;

    @media screen and (max-width: 768px) {
        margin-bottom: 20px;
    }
`;

const Card = styled(Link)`
    display: inline-block;
    text-align: center;
    height: 100%;
    width: 100%;
    border-radius: 10px;

    :before {
        content: "";
        opacity: .5;
        background-color: var(--black);
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 10px;
    }

    :hover:before { 
        opacity: .2;
    }

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

const CardImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 10px;
`;

const CardTitle = styled.h2`
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    text-transform: uppercase;
    font-size: 20px;
    color: var(--white);
    padding: 0 15px;
    white-space: normal;
    width: 100%;
`;

const LoadMoreContainer = styled.div`
    padding-bottom: 30px;
`;

const LoadMore = styled.button`
    font-weight: bold;
    padding: 10px 15px;
    border-radius: 3px;
    font-size: 16px;
    display: block;
    margin: 0 auto;

    &:not(:disabled) {
        background-color: var(--foreground);
        color: var(--background);
    }

    :disabled {
        cursor: unset;
    }

    @media screen and (max-width: 768px) {
        width: 100%;
        padding: 20px;
    }
`;
