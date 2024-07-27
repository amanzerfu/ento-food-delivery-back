import React, { useState, useEffect, useCallback } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Landing from './Landing';
import Admin from './Admin';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    overflow-x: hidden;
    font-family: Arial, sans-serif;
  }
`;

const FirstPage = () => {
  const [pageIndex, setPageIndex] = useState(0);

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    const viewportHeight = window.innerHeight;
    if (scrollPosition >= viewportHeight * 0.5) {  // Adjust threshold as needed
      setPageIndex(2);
    } else {
      setPageIndex(0);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <>
      <GlobalStyle />
      <MainContainer pageIndex={pageIndex}>
        <Landing />
        <Admin />
        {/* Add more pages here if needed */}
      </MainContainer>
    </>
  );
};

const MainContainer = styled.div`
  transition: transform 1s ease-in-out;
  transform: ${({ pageIndex }) => (pageIndex === 1 ? 'translateY(-100vh)' : 'translateY(0)')};
  overflow: hidden;
      margin: 0;
    overflow-x: hidden;
    font-family: Arial, sans-serif;
`;

export default FirstPage;
