import { MEALS } from "../../data/dummy-data";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [MEALS[0]],
};

const mealsReducer = (state = initialState, action) => {
  return state;
};

export default mealsReducer;
