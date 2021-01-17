import React from 'react';

/* Page Components */
import NavigationBar from "./components/Homepage/navigation.js";

import Proficiencies from "./components/Homepage/proficiencies.js";

function App() {
  return (
    <div>
      <NavigationBar />
      <Proficiencies />
    </div>
  );
}

export default App;
