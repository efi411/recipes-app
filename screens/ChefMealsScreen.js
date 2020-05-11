/******************************************
 *  Author : Gil
 *  Created On : Fri Apr 10 2020
 *******************************************/

import React from "react";
import MealsList from "../components/MealsList";
import { useSelector } from "react-redux";

const ChefMealsScreen = (props) => {
  const { navigation } = props;
  let { chefId } = props.route.params;

  const filteredMeals = useSelector((state) => state.meals.filteredMeals);
  const chefMeals = filteredMeals.filter((meal) => meal.chef == chefId);

  return <MealsList mealsData={chefMeals} navigation={navigation} />;
};

export const chefMealsScreenOptions = (navData) => {
  return {
    title: navData.route.params.chefName,
  };
};

export default ChefMealsScreen;
