import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './GlobalStyles';
import { NavBar } from './components/NavBar';
import theme from './components/theme';
import Admin  from './components/pages/Admin';
import Landing  from './components/pages/Landing';
import { Footer } from './components/Footer';
import FirstPage from './components/pages/FirstPage';
import AboutUs from './components/pages/AboutUs';
function App() {
  return (
    <Router>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      <Footer/>
    </ThemeProvider>
  </Router>
  );
}

export default App;
