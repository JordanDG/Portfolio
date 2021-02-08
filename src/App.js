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
import Contact from "./components/Homepage/contact.js";

/* Footer */
import FooterMain from"./components/Homepage/footer.js";


/* Section Styling */
const SectionOne = styled.section`
  height: 100vh;
  width: 100%;
`;

const SectionTwo = styled.section`
  height: 40vh;
  width: 100%;

  @media (max-width: 1480px) {
    height: 70vh;
  }

  @media (max-width: 499px) {
    height: 125vh;
  }
`;
const SectionThree = styled.section`
  width: 100%;
  height: 40vh;

  @media (max-width: 1480px) {
    height: 70vh;
  }

`;

const SectionFive = styled.section`
  width: 100%;
  height: 50vh;
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
      <SectionFive>
        <Contact />
        <FooterMain />
      </SectionFive>
    </div>
  );
}

export default App;
