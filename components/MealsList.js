/******************************************
 *  Author : Gil
 *  Created On : Fri Apr 10 2020
 *******************************************/

import React from "react";
import {
  StyleSheet,
  View,
  FlatList,
  TouchableNativeFeedback,
} from "react-native";
import MealItem from "../components/MealItem";
import { useSelector } from "react-redux";

const MealsList = (props) => {
  let { mealsData, navigation } = props;

  const favMeals = useSelector((state) => state.meals.favoriteMeals);

  const renderMealItem = (itemData) => {
    const mealData = mealsData.find((meal) => meal.id == itemData.item.id);
    const inFav = favMeals.some((favMeal) => favMeal.id === itemData.item.id);

    return (
      <MealItem
        onPress={() =>
          navigation.navigate("MealDetailsMeals", {
            meal: mealData,
            isFav: inFav,
          })
        }
        mealName={itemData.item.title}
        mealImage={itemData.item.image}
        mealDuration={itemData.item.duration}
      />
    );
  };

  return (
    <TouchableNativeFeedback>
      <View style={styles.list}>
        <FlatList
          data={mealsData}
          renderItem={renderMealItem}
          keyExtractor={(meal) => meal.id}
          numColumns={2}
        />
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    marginTop: 50,
  },
});

export default MealsList;
