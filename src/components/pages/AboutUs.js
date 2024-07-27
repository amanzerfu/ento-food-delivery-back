import React from 'react';
import styled from 'styled-components';
import { keyframes } from 'styled-components';

const AboutUs = () => {
  return (
    <AboutContainer>
      <Title>About Enebla Food Delivery</Title>
      <Description>
        Enebla Food is a modern online ordering platform that simplifies the food delivery experience. Featuring a user-friendly interface, it allows customers to browse menus, place orders, and track deliveries with ease. Enjoy your favorite dishes from local restaurants delivered right to your doorstep with just a few clicks.
      </Description>
    </AboutContainer>
  );
};

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.lightBackground};
  min-height: 100vh;
  animation: ${fadeIn} 1s ease-out;
`;

const Title = styled.h1`
  font-size: 2.5em;
  color: ${({ theme }) => theme.colors.yelloColor};
  margin-bottom: 20px;
  font-family: 'Arial', sans-serif;
`;

const Description = styled.p`
  font-size: 1.2em;
  color: ${({ theme }) => theme.colors.whiteColor};
  max-width: 800px;
  line-height: 1.6;
  font-family: 'Verdana', sans-serif;
`;

export default AboutUs;
