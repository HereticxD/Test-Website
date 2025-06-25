import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  flex: 1;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <Main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </Main>
      <Footer />
    </AppContainer>
  );
}

export default App; 