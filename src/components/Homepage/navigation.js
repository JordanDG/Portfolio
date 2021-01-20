import React, { useState } from 'react';
import styled, { createGlobalStyle, keyframes }  from 'styled-components';
import { Divide as Hamburger } from 'hamburger-react'

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

    @media (max-width: 1080px) {
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

    @media (max-width: 1480px) {
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

    @media (max-width: 1080px) {
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

    const [isOpen, setOpen] = useState(false)

    return (
        <div>
            <GlobalStyle />
            <NavigationContainer>
                <Title>JordanDG.Dev</Title>
                <Menu>
                    <li><ATag active href="#active">Home</ATag></li>
                    <li><ATag href="#link">About</ATag></li>
                    <li><ATag href="#link">Proficiencies</ATag></li>
                    <li><ATag href="#link">Projects</ATag></li>
                    <li><ATag href="#link">Contact</ATag></li>
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
                            <ATagMobile href="#link">About</ATagMobile>
                            <ATagMobile href="#link">Proficiencies</ATagMobile>
                            <ATagMobile href="#link">Projects</ATagMobile>
                            <ATagMobile href="#link">Contact</ATagMobile>
                        </MobileMenu>
                    )}
                </MobileMenuAligner>
            </NavigationContainer>
        </div>
    );
}

export default NavigationBar;