/******************************************
 *  Author : Gil
 *  Created On : Fri Apr 10 2020
 *******************************************/

import React, { useEffect } from "react";
import { MEALS, CHEFS } from "../data/dummy-data";
import MealsList from "../components/MealsList";

const ChefMealsScreen = (props) => {
  const { navigation } = props;
  let { chefId } = props.route.params;

  const chefMeals = MEALS.filter((meal) => meal.chef == chefId);
  const chef = CHEFS.find((chef) => chef.id == chefId);

  useEffect(() => {
    navigation.setOptions({ title: chef.name });
  }, []);

  return <MealsList navigation={navigation} mealsData={chefMeals} />;
};

export default ChefMealsScreen;
