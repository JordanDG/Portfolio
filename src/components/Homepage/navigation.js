
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

const GlobalStyle = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    text-rendering: optimizeLegibility;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    background-color: #241f21;
  }
`;

const NavigationContainer = styled.div`
    width: 90vw;
    height: 12vh;
    margin-left: 5vw;
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
        font-size: 34px;
    } 
`;

const Menu = styled.ul`
    width: 75vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;

    @media (max-width: 1410px) {
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


    &:hover {
        color: ${props => props.active ? "" : "#0063D5"};
    }
`;

/* Mobile Menu */
const MobileMenuContainer = styled.div`
    display: none;
    width: 160px;
    height: 40px;
    margin-top: -8px;

    @media (max-width: 1410px) {
        display: inline-block;
    } 
`;

const MobileMenu = styled.div`
    width: 160px;
    height: 20vh;
    transition: all 0.5s ease-in-out;
    animation: ${fadeIn} 0.5s linear;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
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
        margin-top: 15px;
    }

    &:hover {
        color: ${props => props.active ? "" : "#0063D5"};
    }
`;

const HamburgerFloater = styled.div`
    margin-left: 120px;
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
                    <li><ATag href="#link">About Me</ATag></li>
                    <li><ATag href="#link">Proficiencies</ATag></li>
                    <li><ATag href="#link">Projects</ATag></li>
                    <li><ATag href="#link">Contact Me</ATag></li>
                </Menu>
                <MobileMenuContainer>
                    <HamburgerFloater>
                        <Hamburger size={50} color={"#fff"} toggled={isOpen} toggle={setOpen} />
                    </HamburgerFloater>
                    { isOpen && (
                        <MobileMenu>
                            <ATagMobile active href="#active">Home</ATagMobile>
                            <ATagMobile href="#link">About Me</ATagMobile>
                            <ATagMobile href="#link">Proficiencies</ATagMobile>
                            <ATagMobile href="#link">Projects</ATagMobile>
                            <ATagMobile href="#link">Contact Me</ATagMobile>
                        </MobileMenu>
                    )}
                </MobileMenuContainer>
            </NavigationContainer>
        </div>
    );
}

export default NavigationBar;