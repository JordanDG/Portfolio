import React from 'react';
import styled, { keyframes }  from 'styled-components';
import { Tooltip } from '@material-ui/core';

/* Proficiency logos */
import AdobeIllustrator from '../../images/polished/ai.png';
import Brackets from '../../images/polished/brackets.png';
import css from '../../images/polished/css.png';
import figma from '../../images/polished/figma.png';
import git from '../../images/polished/git.png';
import github from '../../images/polished/github.png';
import html from '../../images/polished/html.png';
import js from '../../images/polished/js.png';
import mongo from '../../images/polished/mongo.png';
import php from '../../images/polished/php.png';
import ps from '../../images/polished/ps.png';
import python from '../../images/polished/python.png';
import react from '../../images/polished/react.png';
import sass from '../../images/polished/sass.png';
import sql from '../../images/polished/sql.png';
import tailwind from '../../images/polished/tailwind.png';
import vscode from '../../images/polished/vscode.png';
import wordpress from '../../images/polished/wordpress.png';
import xd from '../../images/polished/xd.png';

const pulse = keyframes`
    0% {
        transform: scale(1);
    }

    50% {
        transform: scale(0.85);
    }

    100% {
        transform: scale(1);
    }
`;

const ProficienciesContainer = styled.div`
    width: 90vw;
    margin-left: 5vw;
    height: 30vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin-top: 25px;
    
    & img {
        width: 70px;
        margin-bottom: 60px;
        margin-left: 15px;
        margin-right: 15px;

        @media (max-width: 1480px) {
            width: 60px;
        } 

        @media (max-width: 600px) {
            width: 50px;
        } 

        &:hover {
            animation: ${pulse} 1s infinite;
        }
    }
`;

const SectionTitle = styled.h1`
    font-weight: 500;
    color: #fff;
    margin-top: 20px;
    font-family: 'Montserrat', sans-serif;

    @media (max-width: 1480px) {
        font-size: 24px;
    } 

    &::after {
        content: "";
        display: block;
        margin-left: 20%;
        margin-top: 3px;
        width: 60%;
        height: 3px; 
        background-color: #fff;
    }
`;

const ProficienciesIconContainer = styled.div`
    width: 90%;
    height: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    margin-top: 50px;
    justify-content: space-between;

    @media (max-width: 600px) {
        width: 90%;
    } 

    & > img {
        @media (max-width: 600px) {
            margin-top: 30px;
        } 
    }
`;

function Proficiencies(props) {
    return (
        <div>
            <ProficienciesContainer>
                <SectionTitle>Proficiencies</SectionTitle>
                <ProficienciesIconContainer>
                    <Tooltip title="Adobe Illustrator" placement="top" leaveTouchDelay="100" enterTouchDelay="100" arrow>
                        <img src={AdobeIllustrator} alt="Adobe Illustrator" />
                    </Tooltip>
                    <Tooltip title="Brackets IDE" placement="top" arrow>             
                        <img src={Brackets} alt="Brackets IDE" />
                    </Tooltip>
                    <Tooltip title="CSS3" placement="top"  arrow>                  
                        <img src={css} alt="CSS3" />
                    </Tooltip>
                    <Tooltip title="Figma" placement="top" arrow> 
                        <img src={figma} alt="Figma" />
                    </Tooltip>
                    <Tooltip title="Git" placement="top" arrow>
                        <img src={git} alt="Git" />
                    </Tooltip>
                    <Tooltip title="Github" placement="top" arrow>
                        <img src={github} alt="Github" />
                    </Tooltip>
                    <Tooltip title="HTML5" placement="top" arrow>
                        <img src={html} alt="HTML5" />
                    </Tooltip>
                    <Tooltip title="Javascript / ES6" placement="top" arrow>
                        <img src={js} alt="Javascript / ES6" />
                    </Tooltip>
                    <Tooltip title="MongoDB" placement="top" arrow>
                        <img src={mongo} alt="MongoDB" />
                    </Tooltip>
                    <Tooltip title="PHP" placement="top" arrow>
                        <img src={php} alt="PHP" />
                    </Tooltip>
                    <Tooltip title="Adobe Photoshop" placement="top" arrow>
                        <img src={ps} alt="Adobe Photoshop" />
                    </Tooltip>
                    <Tooltip title="Python" placement="top" arrow>
                        <img src={python} alt="Python" />
                    </Tooltip>
                    <Tooltip title="React" placement="top" arrow>
                        <img src={react} alt="React" />
                    </Tooltip>
                    <Tooltip title="SASS" placement="top" arrow>
                        <img src={sass} alt="SASS" />
                    </Tooltip>
                    <Tooltip title="MySQL" placement="top" arrow>
                        <img src={sql} alt="MySQL" />
                    </Tooltip>
                    <Tooltip title="TailwindCSS" placement="top" arrow>
                        <img src={tailwind} alt="TailwindCSS" />
                    </Tooltip>
                    <Tooltip title="VSCode" placement="top" arrow>
                        <img src={vscode} alt="VSCode" />
                    </Tooltip>
                    <Tooltip title="Wordpress" placement="top" arrow>
                        <img src={wordpress} alt="Wordpress" />
                    </Tooltip>
                    <Tooltip title="Adobe Xd" placement="top" arrow>
                        <img src={xd} alt="Adobe Xd" />
                    </Tooltip>
                </ProficienciesIconContainer>                              
            </ProficienciesContainer>
        </div>
    );
}

export default Proficiencies;