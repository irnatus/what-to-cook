import React, { useContext } from 'react';
import { PantryContext } from '../containers/MainContainer.jsx';
/* 
  Tried using an Ingredient component to represent each individual ingredient, but
  I couldn't create a paragraph element nested inside my ingredient component. Maybe
  the ingredient component is unnecessary...?
*/
//import Ingredient from './Ingredient.jsx';

/* 
  Nesting a lot of div that don't seem to have a use, but deleting them 
  returns an error. Why? 
*/

const IngredientsDisplay = () => {
  const context = useContext(PantryContext);
  console.log(context.pantry);
  return (
   <div className='ingredientsDisplayBox'>
     <h4>Pantry</h4>
     <div className='ingredientsContainer'>
       {context.pantry.map((ingredient) => (
        <div className='ingredient'>
          <p>{ingredient}</p>
        </div>
      ))}
     </div>
   </div>
 )
}


export default IngredientsDisplay;
