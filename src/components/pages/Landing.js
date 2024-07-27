// Landing.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import theme from '../theme';
import { Form } from 'react-router-dom';

export const Landing = () => {
  return (
    <MainPage>
      <LandingItems>
        <BrandingItems>
          <Slogan>
            <p>Find, compare, order, eat, repeat</p>
          </Slogan>
          <Poster>
            <p>HUNGRY RIGHT NOW?</p>
            <p>ORDER YOUR FOOD</p>
          </Poster>
          <PhonePart>
            <FontAwesomeIcon icon={faPhoneAlt} color={theme.colors.neonMahneta} />
            <Tel>
              <p>24/7 support</p>
              <p>+251 - 940-223-403</p>
            </Tel>
          </PhonePart>
        </BrandingItems>
        <OrderFoodForm>
          <FormTitle>Order Here</FormTitle>
          <InputField type="text" name="fullname" placeholder="Full Name" />
          <InputField type="text" name="phone" placeholder="Phone Number" />
          <InputField type="text" name="location" placeholder="Physical Location" />
          <RegisterButton>Register</RegisterButton>
          <HelpText>If you need any help, contact support</HelpText>
        </OrderFoodForm>
      </LandingItems>
    </MainPage>
  );
};

const MainPage = styled.div`
  color: ${({ theme }) => theme.colors.yellowColor};
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LandingItems = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const BrandingItems = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;

  @media (max-width: 768px) {
    text-align: center;
    align-items: center;
  }
`;

const Slogan = styled.div`
  color: ${({ theme }) => theme.colors.neonMahneta};
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-size: 1.2em;
  margin-bottom: 20px;
`;

const Poster = styled.div`
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 2.5em;
  color: ${({ theme }) => theme.colors.whiteColor};
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`;

const PhonePart = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.neonMahneta};
  font-size: 1.2em;
  margin-top: 20px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Tel = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1em;
  padding-left: 10px;

  p {
    margin: 0;
  }
`;

const OrderFoodForm = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 300px;
  padding: 20px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.neonMahneta};
  color: ${({ theme }) => theme.colors.whiteColor};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    position: static;
    width: 80%;
    margin-top: 30px;
  }
`;

const FormTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 1.5em;
  color: ${({ theme }) => theme.colors.whiteColor};
`;

const InputField = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-radius: 5px;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.whiteColor};
  border: 1px solid ${({ theme }) => theme.colors.whiteColor};
  outline: none;

  ::placeholder {
    color: ${({ theme }) => theme.colors.whiteColor};
  }
`;

const RegisterButton = styled.button`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.whiteColor};
  color: ${({ theme }) => theme.colors.neonMahneta};
  cursor: pointer;
  font-size: 1em;

  &:hover {
    background-color: ${({ theme }) => theme.colors.background};
  }
`;

const HelpText = styled.small`
  color: ${({ theme }) => theme.colors.whiteColor};
  margin-top: 10px;
`;
