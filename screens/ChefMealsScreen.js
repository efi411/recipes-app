/******************************************
 *  Author : Gil
 *  Created On : Fri Apr 10 2020
 *******************************************/

import React, { useEffect } from "react";
import { MEALS } from "../data/dummy-data";
import MealsList from "../components/MealsList";

const ChefMealsScreen = (props) => {
  const { navigation } = props;
  let { chefId, chefName } = props.route.params;

  const chefMeals = MEALS.filter((meal) => meal.chef == chefId);

  useEffect(() => {
    navigation.setOptions({ title: chefName });
  }, []);

  return <MealsList navigation={navigation} mealsData={chefMeals} />;
};

export default ChefMealsScreen;
