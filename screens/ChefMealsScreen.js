/******************************************
 *  Author : Gil
 *  Created On : Fri Apr 10 2020
 *******************************************/

import React from "react";
import { MEALS } from "../data/dummy-data";
import MealsList from "../components/MealsList";

const ChefMealsScreen = (props) => {
  const { navigation } = props;
  let { chefId } = props.route.params;

  const chefMeals = MEALS.filter((meal) => meal.chef == chefId);

  return <MealsList navigation={navigation} mealsData={chefMeals} />;
};

export const chefMealsScreenOptions = (navData) => {
  return {
    title: navData.route.params.chefName,
  };
};

export default ChefMealsScreen;
