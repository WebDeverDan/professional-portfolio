import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import ProfComponent from "./components/Banner/ProfComponent";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
import Services from "./components/Service/Services";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const images = Array.from(document.images);
    const promises = images.map(img =>
      img.complete ? Promise.resolve() :
      new Promise(resolve => {
        img.onload = img.onerror = resolve;
      })
    );
    Promise.all(promises).then(() => setTimeout(() => setIsLoaded(true), 100));
  }, []);

  return (
    <Container $isLoaded={isLoaded}>
      <Banner>
        <ProfComponent />
      </Banner>
      <Services />
      <LightColor>
        <Projects />
      </LightColor>
      <Skills />
      <LightColor>
        <Footer />
      </LightColor>
    </Container>
  );
}

export default App;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const Container = styled.div`
  opacity: ${props => props.$isLoaded ? 1 : 0};
  animation: ${props => props.$isLoaded ? fadeIn : 'none'} 0.8s ease-in;
`;

const Banner = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
  height: 50vh;
  @media (max-width: 640px) {
    height: 100%;
    padding-bottom: 2rem;
  }
`;

const LightColor = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
`;
