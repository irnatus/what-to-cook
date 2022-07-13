
import React, { useState, useContext } from 'react';
import { PantryContext } from '../containers/MainContainer.jsx';
/* 
  Reference Link to learning functional react 
  https://www.knowledgehut.com/blog/web-development/react-functional-components 
*/

/* Once you set up context in high level component you can access it 
   anywhere by calling useContext. You can also set components to be a stateful
   component by calling useState. In this code, we have a state to keep track 
   of the user inputted ingredient. No other component needs access to this since
   we add it to pantry after the user submits. Still need to pass in a copy of state
   with new updated value. 
*/ 

const IngredientAdder = () => {
  const context = useContext(PantryContext);
  const [ingredient, setIngredient] = useState('');

  const addIngredient = () => {
    context.setPantry([...context.pantry, ingredient]);
  }

  return (
    <div>
      <h2>Add New Ingredient to Pantry</h2>
      <label htmlFor='input'>Ingredient:</label>
      <input
        type='text'
        id='input'
        placeholder='add new ingredient'
        onChange = {event => setIngredient(event.target.value)} 
      />
      <button type='submit' onClick={addIngredient}>
        Add Ingredient
      </button>
    </div>
  );
}

// const MarketCreator = (props) => {
//   // how do we create the circuit between the store and an input field?
//   // how do we update the store from a presentation component?`
//   //Button Click

//   const addMarketClick = (e) => {
//     props.redux.addMarket();
//     // const currentMarketID = props.redux.marketList[props.redux.marketList.length - 1].MarketId; 
//     // console.log(currentMarketID);
//     // props.redux.addCard(currentMarketID);
//   };

//   const handleInputChange = ({ target }) => {
//     //dispatch marketReducer (state, {types: Set_NEW_LOCATION, payload: target.value})
//     props.redux.setNewLocation(target.value);
//   };

//   return (
//     <div>
//       <h2>Create New Market</h2>
//       <label htmlFor='input'>Location:</label>
//       <input
//         type='text'
//         id='input'
//         onChange={handleInputChange}
//         placeholder='add new market'
//       />
//       <button type='submit' onClick={addMarketClick}>
//         Add Market
//       </button>
//     </div>
//   );
// };

export default IngredientAdder;