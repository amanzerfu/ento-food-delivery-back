// Footer.js
import React from 'react';
import styled from 'styled-components';
import theme from './theme';

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <CopyrightText>
          &copy; {new Date().getFullYear()} Ento Food Delivery. All rights reserved.
        </CopyrightText>
      </FooterContent>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.whiteColor};
  padding: 15px;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const CopyrightText = styled.p`
  margin: 0;
  font-size: 0.9em;
  color: ${({ theme }) => theme.colors.whiteColor};
`;
