import React, { useState } from 'react';
// import from child components...
import IngredientsContainer from './IngredientsContainer.jsx';
import RecipesContainer from './RecipesContainer.jsx';


// defining context 
export const PantryContext = React.createContext();

const MainContainer = () => {
  const [pantry, setPantry] = useState([]);
  return (
    <div id='mainBox'>
      <PantryContext.Provider value = {{pantry, setPantry}}>
        <IngredientsContainer/>
        <RecipesContainer/>
      </PantryContext.Provider>
    </div>
  );
}

export default MainContainer;