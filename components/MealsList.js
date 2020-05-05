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
import { MEALS } from "../data/dummy-data";

const MealsList = (props) => {
  let { mealsData, navigation } = props;

  const renderMealItem = (itemData) => {
    const mealData = MEALS.find((meal) => meal.id == itemData.item.id);

    return (
      <MealItem
        onPress={() =>
          navigation.navigate("MealDetails", {
            meal: mealData,
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
