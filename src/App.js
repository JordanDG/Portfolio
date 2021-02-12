import React from 'react';
import styled from 'styled-components';

/* Page Components */
/* Section 1 */
import NavigationBar from "./components/Homepage/navigation.js";
import HomeSplashText from './components/Homepage/splashtxt.js';

/* Section 2 */
import AboutMe from './components/Homepage/aboutme.js';

/* Section 3 */
import Proficiencies from "./components/Homepage/proficiencies.js";

/* Section 4 */
import Projects from "./components/Homepage/projects.js";

/* Section 5 */
import Contact from "./components/Homepage/contact.js";

/* Footer */
import FooterMain from"./components/Homepage/footer.js";

/* Vh Calc */
// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

/* Section Styling */
const SectionOne = styled.section`
  height: calc(var(--vh, 1vh) * 100);
  width: 100%;
`;

const SectionTwo = styled.section`
  height: calc(var(--vh, 1vh) * 40);
  width: 100%;

  @media (max-width: 1480px) {
    height: calc(var(--vh, 1vh) * 80);
  }

  @media (max-width: 499px) {
    height: calc(var(--vh, 1vh) * 180);
  }
`;
const SectionThree = styled.section`
  width: 100%;
  height: calc(var(--vh, 1vh) * 60);

  @media (max-width: 499px) {
    height: calc(var(--vh, 1vh) * 110);
  }
`;

const SectionFour = styled.section`
  width: 100%;
  height: calc(var(--vh, 1vh) * 90);

  @media (max-width: 500px) {
    height: calc(var(--vh, 1vh) * 100);
  }
`;

const SectionFive = styled.section`
  width: 100%;
  height: calc(var(--vh, 1vh) * 40);

  @media (max-width: 1480px) {
    height: calc(var(--vh, 1vh) * 70);
  }
`;

function App() {
  return (
    <div>
      <SectionOne>
        <NavigationBar />
        <HomeSplashText />
      </SectionOne>
      <SectionTwo>
        <AboutMe />
      </SectionTwo>
      <SectionThree>
        <Proficiencies />
      </SectionThree>
      <SectionFour>
        <Projects />
      </SectionFour>
      <SectionFive>
        <Contact />
        <FooterMain />
      </SectionFive>
    </div>
  );
}

export default App;
