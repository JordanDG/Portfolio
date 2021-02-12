import React, { useState } from 'react';
import styled from 'styled-components';
import axios from "axios";

const ContactContainer = styled.div`
    width: 90vw;
    height: 55vh;
    margin-left: 5vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    @media (max-width: 499px) {
        height: 120vh;
        width: 85vw;
        margin-left: 7.5vw;
    }

    & form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;

        @media (max-width: 500px) {
            width: 400px;
        }
    }
`;

const SectionTitle = styled.h1`
    font-weight: 500;
    color: #fff;
    font-family: 'Montserrat', sans-serif;
    background-color: transparent;
    font-size: 32px;
    word-spacing: 15px;
    letter-spacing: 1px;

    &::after {
        content: "";
        display: block;
        margin-left: 10%;
        margin-top: 6px;
        width: 80%;
        height: 3px; 
        background-color: #0063D5;
    }
`;

const ContactSplashText =styled.p`
    color: #fff;
    margin-top: 20px;
    font-size: 24px;
    font-weight: 300;
    letter-spacing: .25px;
    word-spacing: 5px;
    text-align: center;
`;

/* Contact Form Fields */
const ContactName = styled.input`
    width: 500px;
    height: 40px;
    margin-top: 50px;
    border: 0;
    border-bottom: 5px solid #0063D5;
    color: #fff;
    font-size: 18px;
    padding-left: 10px;
    transition: all 0.25s ease-in-out;

    @media (max-width: 500px) {
        width: 400px;
        height: 60px;
    }

    &::placeholder {
        color: #fff;
        font-size: 18px;
        padding-left: 0px;
    }

    &:focus {
        outline: 0;
        background-color: #1d191a;

        &::placeholder {
            color: #b3b3b3;
            transition: all 0.25s ease-in-out;
        }
    }
`;

const ContactEmail = styled.input`
    width: 500px;
    height: 40px;
    margin-top: 50px;
    border: 0;
    border-bottom: 5px solid #0063D5;
    color: #fff;
    font-size: 18px;
    padding-left: 10px;
    transition: all 0.25s ease-in-out;

    @media (max-width: 500px) {
        width: 400px;
        height: 60px;
    }

    &::placeholder {
        color: #fff;
        font-size: 18px;
        padding-left: 0px;
    }

    &:focus {
        outline: 0;
        background-color: #1d191a;

        &::placeholder {
            color: #b3b3b3;
            transition: all 0.25s ease-in-out;
        }
    }
`;

const ContactTextfield = styled.textarea`
    width: 500px;
    height: 200px;
    margin-top: 50px;
    border: 0;
    resize: none;
    border-bottom: 5px solid #0063D5;
    color: #fff;
    padding-left: 10px;
    padding-top: 10px;
    font-size: 18px;
    transition: all 0.25s ease-in-out;

    @media (max-width: 500px) {
        width: 400px;
    }

    &::placeholder {
        color: #fff;
        font-size: 18px;
    }

    &:focus {
        outline: 0;
        background-color: #1d191a;

        &::placeholder {
            color: #b3b3b3;
            transition: all 0.25s ease-in-out;
        }
    }
`;

const ContactSubmitButton = styled.button`
    margin-top: 25px;
    width: 150px;
    height: 50px;
    color: #fff;
    border: 0;
    outline: 0;
    color: #fff;
    border: 3px solid #0063D5;
    border-radius: 25px;
    font-size: 24px;
    font-weight: 300;
    transition: all 0.5s ease-in-out;
    margin-bottom: 20px;

    &:hover {
        background-color: #0063D5;
        cursor: pointer;
    }

    @media (max-width: 500px) {
        height: 80px;
    }
`;

const SubmissionSuccessMessageContainer = styled.div`
    width: 100%;
    height: 150px;
    background-color: #0063D5;
    text-align: center;
    color: #fff;
    font-size: 32px;
    font-weight: 300;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    flex-direction: column;
`;

const SubmissionSuccessMessage = styled.p`
    background-color: #0063D5;
`;

const SubmissionSuccessMessage2 = styled.p`
    font-size: 18px;
    background-color: #0063D5;
`;

const SubmissionSuccessWindowClose = styled.p`
    font-size: 12px;
    background-color: #0063D5;
    margin-top: 20px;
    transition: all 0.5s ease-in-out;

    &:hover {
        text-decoration: underline;
    }
`;

function Contact() {

    const [serverState, setServerState] = useState({
        submitting: false,
        status: null
      });
      const handleServerResponse = (ok, msg, form) => {
        setServerState({
          submitting: false,
          status: { ok, msg }
        });
        if (ok) {
          form.reset();
        }
      };
      const handleOnSubmit = e => {
        e.preventDefault();
        const form = e.target;
        setServerState({ submitting: true });
        axios({
          method: "post",
          url: "https://formspree.io/f/mjvpzldd",
          data: new FormData(form)
        })
          .then(r => {
            handleServerResponse(true, "Success! I hope to get back to you soon!", form);
          })
          .catch(r => {
            handleServerResponse(false, r.response.data.error, form);
          });
      };
        return (
        <div id="ContactID">
            <ContactContainer>
                <SectionTitle>Contact Me!</SectionTitle>
                <ContactSplashText>Feel free to contact me using the form below! I can't wait to hear from you!</ContactSplashText>
                <form onSubmit={handleOnSubmit}>
                    <ContactName placeholder="Name" type="text" name="Name" required></ContactName>
                    <ContactEmail placeholder="Email" type="email" name="Email" required></ContactEmail>
                    <ContactEmail placeholder="Subject" type="text" name="Subject"></ContactEmail>
                    <ContactTextfield placeholder="Message" id="message" name="Message" required></ContactTextfield>
                    <ContactSubmitButton type="submit" value="Submit" id="submit-form" disabled={serverState.submitting}>Submit</ContactSubmitButton>

                    {serverState.status && (
                        <SubmissionSuccessMessageContainer>
                            <SubmissionSuccessMessage>Success!</SubmissionSuccessMessage>
                            <SubmissionSuccessMessage2>I will try to get back to you as quickly as I can!</SubmissionSuccessMessage2>
                            <SubmissionSuccessWindowClose onClick={() => setServerState({ status: null })}>Dismiss</SubmissionSuccessWindowClose>
                        </SubmissionSuccessMessageContainer>
                    )}
                </form>
            </ContactContainer>
        </div>
        );
    }
    
export default Contact;