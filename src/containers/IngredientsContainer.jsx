import React from 'react';

// // import actions from action creators file
// import * as actions from '../actions/actions';
// // import child components...
import IngredientAdder from '../components/IngredientAdder.jsx';
import IngredientsDisplay from '../components/IngredientsDisplay.jsx';


const IngredientsContainer = () => {
  return (
    <div>
      <IngredientAdder />
      <IngredientsDisplay />
    </div>
  );
  
}

export default IngredientsContainer;