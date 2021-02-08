import React, { useState } from 'react';
import styled, { createGlobalStyle, keyframes }  from 'styled-components';
import { Divide as Hamburger } from 'hamburger-react';
import Slide from 'react-reveal/Slide';
import Rotate from 'react-reveal/Rotate';
import { Link } from "react-scroll";

const fadeIn = keyframes`
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
`;

/* font-family: 'Istok Web', sans-serif; */

const GlobalStyle = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    text-rendering: optimizeLegibility;
    box-sizing: border-box;
    background-color: #241f21;
    font-family: 'Montserrat', sans-serif;
    scroll-behavior: smooth;
  }
`;

const NavigationContainer = styled.div`
    width: 85vw;
    height: 5vh;
    margin-left: 7.5vw;
    margin-top: 2vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const Title = styled.h1`
    color: #fff;
    font-weight: 300;
    font-size: 48px;

    @media (max-width: 1480px) {
        font-size: 38px;
    } 

    @media (max-width: 350px) {
        font-size: 32px;
    }
`;

const Menu = styled.ul`
    width: 75vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;

    @media (max-width: 1340px) {
        display: none;
    }

    & li {
        list-style-type: none;
        margin-left: 80px;
    }
`;

const ATag = styled.a`
    color: ${props => props.active ? "#0063D5" : "#fff"};
    border-bottom: ${props => props.active ? "2px solid #0063D5" : "2px solid transparent"};
    text-decoration: none;
    font-size: 24px;
    font-weight: 300;
    transition: all 0.5s ease-in-out;

    @media (max-width: 1580px) {
        font-size: 18px;
    } 


    &:hover {
        color: ${props => props.active ? "" : "#0063D5"};
    }
`;

/* Mobile Menu */
const MobileMenuContainer = styled.div`
    display: none;
    width: 50px;
    height: 50px;

    @media (max-width: 1340px) {
        display: block;
    } 
`;

const MobileMenu = styled.div`
    width: 159px;
    height: 20vh;
    margin-top: 5px;
    transition: all 0.5s ease-in-out;
    animation: ${fadeIn} 0.5s linear;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    position: relative;
    z-index: 100;
    background-color: #241f21;
`;

const ATagMobile = styled.a`
    color: ${props => props.active ? "#0063D5" : "#fff"};
    border-bottom: ${props => props.active ? "2px solid #0063D5" : "2px solid transparent"};
    font-weight: 300;
    font-size: 24px;
    margin-bottom: 15px;
    background-color: transparent;
    text-decoration: none;
    transition: all 0.5s ease-in-out;

    &:first-of-type {
        margin-top: 5px;
    }

    &:hover {
        color: ${props => props.active ? "" : "#0063D5"};
    }
`;

const HamburgerFloater = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-top: -2px;
    justify-content: flex-end;
`;

const MobileMenuAligner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    height: 45px;
    width: 50px;
`;

function NavigationBar(props) {

    const [isOpen, setOpen] = useState(false);

    return (
        <div>
            <GlobalStyle />
            <NavigationContainer>
                <Slide left>
                    <Title>JordanDG.Dev</Title>
                </Slide>
                <Menu>
                    <Rotate top right>
                        <li>
                            <ATag active href="#active">
                                <p>Home</p>
                            </ATag>
                        </li>
                        <li>
                            <ATag href="#link">
                                <Link to="AboutID" spy={true} smooth={true} offset={50} duration={500}><p>About</p></Link>
                            </ATag>
                        </li>
                        <li>
                            <ATag href="#link">
                                <Link to="ProficienciesID" spy={true} smooth={true} offset={50} duration={500}><p>Proficiencies</p></Link>
                            </ATag>
                        </li>
                        <li>
                            <ATag href="#link">
                                <Link to="ProjectID" spy={true} smooth={true} offset={50} duration={500}><p>Projects</p></Link>
                            </ATag>
                        </li>
                        <li>
                            <ATag href="#link">
                                <Link to="ContactID" spy={true} smooth={true} offset={50} duration={500}><p>Contact</p></Link>
                            </ATag>
                        </li>
                    </Rotate>
                </Menu>  
                <MobileMenuAligner>
                    <MobileMenuContainer>
                        <HamburgerFloater>
                            <Hamburger size={50} color={"#fff"} toggled={isOpen} toggle={setOpen} distance="md" />
                        </HamburgerFloater>
                    </MobileMenuContainer>
                    { isOpen && (
                        <MobileMenu>
                            <ATagMobile active href="#active">Home</ATagMobile>
                            <ATagMobile href="#link">
                                <Link to="AboutID" spy={true} smooth={true} offset={50} duration={500}><p>About</p></Link>
                            </ATagMobile>
                            <ATagMobile href="#link">
                                <Link to="ProficienciesID" spy={true} smooth={true} offset={50} duration={500}><p>Proficiencies</p></Link>
                            </ATagMobile>
                            <ATagMobile href="#link">
                                <Link to="ProjectID" spy={true} smooth={true} offset={50} duration={500}><p>Projects</p></Link>
                            </ATagMobile>
                            <ATagMobile href="#link">
                                <Link to="ContactID" spy={true} smooth={true} offset={50} duration={500}><p>Contact</p></Link>
                            </ATagMobile>
                        </MobileMenu>
                    )}
                </MobileMenuAligner>
            </NavigationContainer>
        </div>
    );
}

export default NavigationBar;