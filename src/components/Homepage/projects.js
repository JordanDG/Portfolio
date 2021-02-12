import React, { useState } from 'react';
import styled from 'styled-components';

const ProjectsContainer = styled.div`
    width: 90vw;
    margin-left: 5vw;
    height: 85vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;

const ProjectsSlideContainer = styled.div`
    width: 100%;
    height: 15%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const ProjectsContentChoice = styled.div`
    height: 100%;
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-bottom: ${props => props.active ? "10px solid #0063D5" : "10px solid transparent"};
    transition: all 0.5s ease-in-out;

    &:hover {
        border-bottom: ${props => props.active ? "10px solid #0063D5" : "10px solid #0063D5"};
        cursor:  ${props => props.active ? "" : "pointer"};
    }

    @media (max-width: 1480px) {
        width: 35%;
    }

    @media (max-width: 500px) {
        width: 50%;
    }
`;

const ProjectSplashText = styled.p`
    color: #fff;
    font-size: 32px;
    font-weight: 500;
`;

const ProjectsFeatureRows = styled.div`
    width: 100%;
    height: 33%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    overflow: hidden;

    @media (max-width: 500px) {
        width: 100%;
        height: 40%;
        margin-top: 5%;
    }
`;

const ProjectFeature = styled.div`
    height: 70%;
    width: 20vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: #fff;
    background-color: red;

    @media (max-width: 1480px) {
        width: 300px;
    }

    @media (max-width: 500px) {
        height: 50%;
        width: 80%;
        margin-bottom: 5%;
    }
`;

function Projects(props) {

    const [pageState, setPageState] = useState("Mockups");

    const handleClickProjects = () => {
        setPageState("Projects");
    }

    const handleClickMockups = () => {
        setPageState("Mockups");
    }

    const ContentMockup = "Mockups";
    const ContentProjects = "Projects"; 

    return (
        <div>
            <ProjectsContainer>
                {pageState === "Mockups" && (
                <>
                <ProjectsSlideContainer>
                    <ProjectsContentChoice active>
                        <ProjectSplashText>Mockups</ProjectSplashText>
                    </ProjectsContentChoice>
                    <ProjectsContentChoice onClick={handleClickProjects}>
                        <ProjectSplashText>Projects</ProjectSplashText>
                    </ProjectsContentChoice>
                </ProjectsSlideContainer>
                <ProjectsFeatureRows>
                    <ProjectFeature>
                        <h1>{ContentMockup}</h1>
                    </ProjectFeature>
                    <ProjectFeature>
                        <h1>{ContentMockup}</h1>
                    </ProjectFeature>
                    <ProjectFeature>
                        <h1>{ContentMockup}</h1>
                    </ProjectFeature>
                    <ProjectFeature>
                        <h1>{ContentMockup}</h1>
                    </ProjectFeature>
                </ProjectsFeatureRows>
                <ProjectsFeatureRows>
                    <ProjectFeature>
                        <h1>{ContentMockup}</h1>
                    </ProjectFeature>
                    <ProjectFeature>
                        <h1>{ContentMockup}</h1>
                    </ProjectFeature>
                    <ProjectFeature>
                        <h1>{ContentMockup}</h1>
                    </ProjectFeature>
                    <ProjectFeature>
                        <h1>{ContentMockup}</h1>
                    </ProjectFeature>
                </ProjectsFeatureRows>
                <ProjectsFeatureRows>
                    <ProjectFeature>
                        <h1>{ContentMockup}</h1>
                    </ProjectFeature>
                    <ProjectFeature>
                        <h1>{ContentMockup}</h1>
                    </ProjectFeature>
                    <ProjectFeature>
                        <h1>{ContentMockup}</h1>
                    </ProjectFeature>
                    <ProjectFeature>
                        <h1>{ContentMockup}</h1>
                    </ProjectFeature>
                </ProjectsFeatureRows>
                </>
                )}
                {pageState === "Projects" && (
                <>
                <ProjectsSlideContainer>
                    <ProjectsContentChoice onClick={handleClickMockups}>
                        <ProjectSplashText>Mockups</ProjectSplashText>
                    </ProjectsContentChoice>
                    <ProjectsContentChoice active>
                        <ProjectSplashText>Projects</ProjectSplashText>
                    </ProjectsContentChoice>
                </ProjectsSlideContainer>
                <ProjectsFeatureRows>
                    <ProjectFeature>
                        <h1>{ContentProjects}</h1>
                    </ProjectFeature>
                    <ProjectFeature>
                        <h1>{ContentProjects}</h1>
                    </ProjectFeature>
                    <ProjectFeature>
                        <h1>{ContentProjects}</h1>
                    </ProjectFeature>
                    <ProjectFeature>
                        <h1>{ContentProjects}</h1>
                    </ProjectFeature>
                </ProjectsFeatureRows>
                <ProjectsFeatureRows>
                    <ProjectFeature>
                        <h1>{ContentProjects}</h1>
                    </ProjectFeature>
                    <ProjectFeature>
                        <h1>{ContentProjects}</h1>
                    </ProjectFeature>
                    <ProjectFeature>
                        <h1>{ContentProjects}</h1>
                    </ProjectFeature>
                    <ProjectFeature>
                        <h1>{ContentProjects}</h1>
                    </ProjectFeature>
                </ProjectsFeatureRows>
                <ProjectsFeatureRows>
                    <ProjectFeature>
                        <h1>{ContentProjects}</h1>
                    </ProjectFeature>
                    <ProjectFeature>
                        <h1>{ContentProjects}</h1>
                    </ProjectFeature>
                    <ProjectFeature>
                        <h1>{ContentProjects}</h1>
                    </ProjectFeature>
                    <ProjectFeature>
                        <h1>{ContentProjects}</h1>
                    </ProjectFeature>
                </ProjectsFeatureRows>
                </>
                )}
            </ProjectsContainer>
        </div>
    );
}

export default Projects;