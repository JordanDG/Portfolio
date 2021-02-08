import React, { useState } from 'react';
import styled, { createGlobalStyle, keyframes }  from 'styled-components';
import { Link } from "react-scroll";

const Footer = styled.div`
    width: 90vw;
    margin-left: 5vw;
    height: 7vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-top: 20vh;

    @media (max-width: 499px) {
        width: 85vw;
        margin-left: 7.5vw;
        height: 100px;
    }
`;

const FooterSplashText = styled.p`
    color: #fff;
    margin-top: 1vh;
    text-align: center;
`;

const FooterNavContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direciton: row;
    align-items: center;
    justify-content: center; 
`;

const FooterNav = styled.ul`
    color: #fff;
    text-decoration: none;
    list-style-type: none;
    font-weight: 300;
    font-size: 18px;
    margin-top: 1vh;
    transition: all 0.5s ease-in-out;

    &:hover {
        text-decoration: underline;
        color: #0063D5;
    }
`;

function FooterMain(props) {
    return (
        <div>
            <Footer>
                <FooterSplashText>Copyright Jordan Da Graca, 2021, all rights reserved.</FooterSplashText>
                <FooterNavContainer>
                    <FooterNav>
                        <li><Link to="HomeID" spy={true} smooth={true} offset={50} duration={500}><p>Back to top</p></Link></li>
                    </FooterNav>
                </FooterNavContainer>
            </Footer>
        </div>
    );
}

export default FooterMain;