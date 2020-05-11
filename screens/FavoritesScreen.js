/******************************************
 *  Author : Efi
 *  Created On : Tue May 05 2020
 *******************************************/

import React from "react";
import MealsList from "../components/MealsList";
import { menuIcon } from "../components/Icons";
import Color from "../constants/Colors";
import { useSelector } from "react-redux";

const FavoritsScreen = (props) => {
  const { navigation } = props;
  const favMeals = useSelector((state) => state.meals.favoriteMeals);

  return (
    <MealsList
      onPress={(mealData) =>
        navigation.navigate("MealDetailsFav", {
          meal: mealData,
        })
      }
      mealsData={favMeals}
    />
  );
};

export const favoritsScreenOptions = (navData) => {
  return {
    title: "מועדפים",
    headerLeft: menuIcon.bind(this, "menu", navData.navigation.openDrawer),
    tabBarColor: Color.primaryColor,
  };
};

export default FavoritsScreen;
