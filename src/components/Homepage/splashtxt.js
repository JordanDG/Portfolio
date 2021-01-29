import React from 'react';
import styled, { keyframes }  from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Fade from 'react-reveal/Fade';

/* Icons */
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const LevitateAnimation = keyframes`
    0% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(10px);
    }

    100% {
        transform: translateY(0px);
    }
`;

const HomeSplashTextContainer = styled.div`
    width: 90vw;
    margin-left: 5vw;
    height: 85vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 1080px) {
        height: 70vh;
    }
`;

const HomeSplashTextHeading = styled.h1`
    font-weight: 700;
    font-size: 72px;
    color: #fff;
    word-spacing: 10px;
    letter-spacing: 0.5px;
    width: 50vw;
    text-align: center;

    @media (max-width: 1480px) {
        font-size: 56px;
        width: 60vw;
    }

    @media (max-width: 1080px) {
        font-size: 48px;
        width: 80vw;
    }
`;

const HomeSplashButtons = styled.div`
    width: 400px;
    height: 10vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;

/* Buttons */
const HomeSplashButtonLeft = styled.button`
    width: 150px;
    height: 50px;
    color: #fff;
    border: 3px solid #0063D5;
    border-radius: 25px;
    font-size: 24px;
    font-weight: 300;
    transition: all 0.5s ease-in-out;

    &:hover {
        color: #0063D5;
        cursor: pointer;
    }
`;

const HomeSplashButtonRight = styled.button`
    width: 150px;
    height: 50px;
    color: #fff;
    border: 3px solid #0063D5;
    border-radius: 25px;
    background-color: #0063D5;
    font-size: 24px;
    font-weight: 300;
    transition: all 0.5s ease-in-out;

    &:hover {
        color: #241f21;
        cursor: pointer;
    }
`;

const HomeSplashContinuePromptContainer = styled.div`
    width: 90vw;
    margin-left: 5vw;
    height: 5vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const HomeSplashContinuePrompt = styled.p`
    color: #fff;
    font-size: 22px;
    text-align: center;
`;

const HomeSplashContinuePromptArrowContainer = styled.div`
    width: 50px;
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 44px;
    animation: ${LevitateAnimation} 1s infinite;

    @media (max-width: 1080px) {
        margin-top: 20px;
    }
    
    &:hover {
        cursor: pointer;
    }
`;

function HomeSplashText(props) {
    return (
        <div>
            <HomeSplashTextContainer>
                <Fade top>
                    <HomeSplashTextHeading>Hi, I'm Jordan. I design and develop websites!</HomeSplashTextHeading>
                </Fade>
                <HomeSplashButtons>
                    <Fade bottom>
                        <HomeSplashButtonLeft>Projects</HomeSplashButtonLeft>
                        <HomeSplashButtonRight>Contact</HomeSplashButtonRight>
                    </Fade>
                </HomeSplashButtons>
            </HomeSplashTextContainer>
            <HomeSplashContinuePromptContainer>
                <HomeSplashContinuePrompt>Wanna see what I can do?</HomeSplashContinuePrompt>
                <HomeSplashContinuePromptArrowContainer>
                    <FontAwesomeIcon icon={faChevronDown}/>
                </HomeSplashContinuePromptArrowContainer>
            </HomeSplashContinuePromptContainer>
        </div>
    );
}

export default HomeSplashText;