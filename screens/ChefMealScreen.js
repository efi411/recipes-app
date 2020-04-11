/******************************************
 *  Author : Gil
 *  Created On : Fri Apr 10 2020
 *******************************************/

import React from "react";
import { MEALS } from "../data/dummy-data";
import MealsList from "../components/MealsList";

const ChefMealScreen = (props) => {
  let { chefName } = props;

  const chefMeals = MEALS.filter((meal) => meal.chef == chefName);
  return <MealsList mealsData={chefMeals} />;
};

export default ChefMealScreen;
