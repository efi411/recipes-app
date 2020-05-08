/******************************************
 *  Author : Efi
 *  Created On : Tue May 05 2020
 *******************************************/

import React from "react";
import { MEALS } from "../data/dummy-data";
import MealsList from "../components/MealsList";
import { menuIcon } from "../components/Icons";
import Color from "../constants/Colors";

const FavoritsScreen = (props) => {
  const favMeals = MEALS.filter(
    (meal) => meal.id == "m1" || meal.id == "m5" || meal.id == "m6"
  );

  return <MealsList navigation={props.navigation} mealsData={favMeals} />;
};

export const favoritsScreenOptions = (navData) => {
  return {
    title: "מועדפים",
    headerLeft: menuIcon.bind(this, "menu", navData.navigation.openDrawer),
    tabBarColor: Color.primaryColor,
  };
};

export default FavoritsScreen;
