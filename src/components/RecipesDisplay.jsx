 import React from 'react';
 import Recipe from './Recipe.jsx';
 
const RecipesDisplay = () => {
  return (
    <div className='recipesDisplayBox'>
      <h4>Here are some recipes you can make!</h4>
      <div className='recipesContainer'>
        <Recipe>
          <p>This is a recipe.</p>
        </Recipe>
      </div>
    </div>
  )
}
 

 export default RecipesDisplay;
 