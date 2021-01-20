import React from 'react';
import styled from 'styled-components';

/* Page Components */
import NavigationBar from "./components/Homepage/navigation.js";
import HomeSplashText from './components/Homepage//splashtxt.js';

import Proficiencies from "./components/Homepage/proficiencies.js";

/* Section Styling */
const SectionOne = styled.section`
  height: 100vh;
  width: 100%;
`;

const SectionTwo = styled.section`
  height: 100vh;
  width: 100%;
  background-color: green;
`;

function App() {
  return (
    <div>
      <SectionOne>
        <NavigationBar />
        <HomeSplashText />
      </SectionOne>
      <SectionTwo>
        <Proficiencies />
      </SectionTwo>
    </div>
  );
}

export default App;
