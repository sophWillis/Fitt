import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Landing from './Landing';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';
import { ReactComponent as MarsIcon } from '../assets/svg/mars.svg';
import { ReactComponent as VenusIcon } from '../assets/svg/venus.svg';

const Home = () => {
    const limitCount = 8;
    const { currentUser } = useAuth(),
        [allExercises, setAllExercises] = useState([]),
        [filteredExercises, setFilteredExercises] = useState([]),
        [limit, setLimit] = useState(limitCount),
        [allBodyAreas, setAllBodyAreas] = useState([]),
        [changeImage, setChangeImage] = useState(false);

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

    const fetchData = async () => {
        await fetch('https://private-922d75-recruitmenttechnicaltest.apiary-mock.com/customexercises/')
            .then((res) => res.json())
            .then((data) => {
                setAllExercises(data.exercises);
                setFilteredExercises(data.exercises);
                setBodyAreas(data.exercises);
            });
    };

    useEffect(() => {
        fetchData();
    },[]);

    const loadMoreExercises = () => {
        setLimit(limit + limitCount);
    };

    const toggleState = () => {
        setChangeImage((prevState) => !prevState);
    };

    const filterExercises = (selectedBodyArea) => {
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
    };

    const resetFilters = () => {
        setFilteredExercises(allExercises);
        setLimit(limitCount);
    }

    return (
        <>
            {!currentUser ? <Landing /> : (
                <Dashboard>
                    <DashboardH1>EXERCISES</DashboardH1>
                    <FilterContainer>
                        <li className="active" onClick={resetFilters}>ALL</li>
                        {allBodyAreas.map((bodyArea, key) => (
                            <li
                                key={key}
                                onClick={() => filterExercises(bodyArea)}>
                                {bodyArea}
                            </li>
                        ))}
                    </FilterContainer>
                    <CardsContainer>
                        {filteredExercises.slice(0, limit).map((item, key) => {
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
                                    <Toggle>
                                        <form>
                                                <span className="hidden">
                                                </span>
                                                <div className="icons">
                                                    <MarsIcon className={changeImage ? "enabled" : "disabled"} />
                                                    <VenusIcon className={changeImage ? "disabled" : "enabled"} />
                                                </div>
                                                <input
                                                    name="toggle"
                                                    type="checkbox"
                                                    onClick={toggleState} />
                                            </form>
                                    </Toggle>
                                </CardContainer>
                            )
                        })}
                    </CardsContainer>
                    {filteredExercises.length >= limitCount && 
                        <LoadMoreContainer>
                            <LoadMore onClick={() => !!filteredExercises.length && loadMoreExercises()}>LOAD MORE</LoadMore>
                        </LoadMoreContainer>
                    }
                </Dashboard>
            )}
        </>
    );
};

export default Home;

const Dashboard = styled.div`
    margin: 0 30px;
    height: calc(100vh - 80px);

    @media screen and (max-width: 768px) {
        margin: 0 30px;
    }
`;

const DashboardH1 = styled.h1`
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
        grid-template-columns: auto auto auto auto;
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
    object-position: top;
    border-radius: 10px;
`;

const CardTitle = styled.h2`
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    text-transform: uppercase;
    font-size: 24px;
    color: var(--white);
    padding: 0 15px;
    white-space: normal;
    width: 100%;
`;

const LoadMoreContainer = styled.div`
    padding-bottom: 30px;
`;

const LoadMore = styled.button`
    background-color: var(--foreground);
    color: var(--background);
    font-weight: bold;
    padding: 10px 15px;
    border-radius: 3px;
    font-size: 16px;
    display: block;
    margin: 0 auto;

    @media screen and (max-width: 768px) {
        width: 100%;
        padding: 20px;
    }
`;

const Toggle = styled.label`
    position: absolute;
    bottom: 10px;
    right: 10px;
    border-radius: 40px;
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
        opacity: 0;
    }
`;
