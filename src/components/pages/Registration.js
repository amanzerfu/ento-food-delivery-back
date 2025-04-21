// Registration.js
import React from 'react';
import styled from 'styled-components';
import theme from '../theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

const Registration = () => {
  return (
    <RegistrationWrapper>
      <Card>
        <Header>
          <FontAwesomeIcon icon={faUserPlus} />
          <h2>Create Your Account</h2>
        </Header>

        <Form>
          <Input type="text" placeholder="Full Name" name="fullname" required />
          <Input type="email" placeholder="Email Address" name="email" required />
          <Input type="tel" placeholder="Phone Number" name="phone" required />
          <Input type="text" placeholder="Location" name="location" required />
          <SubmitButton type="submit">Register</SubmitButton>
        </Form>

        <HelpText>Need help? Contact <a href="tel:+251940223403">+251-940-223-403</a></HelpText>
      </Card>
    </RegistrationWrapper>
  );
};

const RegistrationWrapper = styled.div`
  min-height: 100vh;
  background-color: ${theme.colors.background};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;

const Card = styled.div`
  background-color: ${theme.colors.primaryTwo};
  border-radius: 16px;
  padding: 40px 30px;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 8px 20px rgba(0,0,0,0.3);
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  color: ${theme.colors.neonMahneta};
  margin-bottom: 25px;

  h2 {
    font-size: 1.8em;
    margin: 0;
  }

  svg {
    font-size: 1.5em;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid ${theme.colors.bottomColor};
  border-radius: 8px;
  background-color: ${theme.colors.whiteColor};
  font-size: 1em;
  color: ${theme.colors.bottomColor};

  ::placeholder {
    color: #999;
  }

  &:focus {
    outline: 2px solid ${theme.colors.neonMahneta};
  }
`;

const SubmitButton = styled.button`
  padding: 12px;
  background-color: ${theme.colors.neonMahneta};
  color: ${theme.colors.whiteColor};
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1em;
  transition: background 0.3s ease;

  &:hover {
    background-color: ${theme.colors.primaryOne};
  }
`;

const HelpText = styled.p`
  text-align: center;
  margin-top: 20px;
  font-size: 0.9em;
  color: ${theme.colors.bottomColor};

  a {
    color: ${theme.colors.neonMahneta};
    text-decoration: none;
    font-weight: bold;
  }
`;

export default Registration;
