import React from 'react';
import styled from 'styled-components';

/* Profile Picture */
import ProfilePicture from '../../images/ProfilePicture/ProfilePictureMain.jpg'; 

const AboutMeContainer = styled.div`
    display: flex;
    width: 85vw;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 30vh;
    margin-left: 7.5vw;

    @media (max-width: 1480px) {
        display: flex;
        flex-direction: column;
        height: 70vh;
    }

    & img {
        border-radius: 50%;
        width: 300px;
        height: 300px;
        margin-right: 100px;
        margin-left: 100px;

        @media (max-width: 1480px) {
            margin-bottom: 25px;
        }
    }
`;

const AboutMeParagraphContainer = styled.div`
    color: #fff;
    height: 30vh;
    width: 40vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 1480px) {
        align-items: center;
        width: 85vw;
        height: 70vh;
        justify-content: flex-start;
    }
`;

const AboutMeTitle = styled.h1`
    font-weight: 500;
    color: #fff;
    text-align: center;
    font-family: 'Montserrat', sans-serif;

    &::after {
        content: "";
        display: block;
        margin-left: 15%;
        margin-top: 3px;
        width: 70%;
        height: 3px; 
        background-color: #fff;
    }
`;

const AboutMeText = styled.p`
    text-align: left;
    font-weight: 300;
    font-size: 18px;
    margin-top: 1vh;
    width: 40vw;
    line-height: 35px;
    word-spacing: 5px;
    letter-spacing: 0.5px;
    text-align: center;

    @media (max-width: 1480px) {
        width: 85vw;
    }
`;

function AboutMe(props) {
    return (
        <div id="AboutID">
            <AboutMeContainer>
                <img src={ProfilePicture} alt="Profile" />
                <AboutMeParagraphContainer>
                    <AboutMeTitle>About Me</AboutMeTitle>
                    <AboutMeText>My names Jordan DaGraca, I am currently undertaking a three-year course at Solent University in digital design and web development. I am a self-taught developer of 4 years’ experience, during which I taught myself the basics of web development, enhancing these skills through online courses and practice. My eventual aim is to progress on & become a full-stack developer, whereby I can manage both the front & back-end of a development project. On this page I detail my proficiencies, display examples of my work, and provide the means through which I can be contacted. </AboutMeText>
                </AboutMeParagraphContainer>
            </AboutMeContainer>
        </div>
    );
}

export default AboutMe;