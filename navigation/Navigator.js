import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CategoriesScreen from "../screens/CategoriesScreen";
import ChefMealsScreen from "../screens/ChefMealsScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";

const Navigator = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Categories"
          component={CategoriesScreen}
          options={{ title: "משתמשים" }}
        />
        <Stack.Screen
          name="ChefMeals"
          component={ChefMealsScreen}
          options={{ title: "מנות" }}
        />
        <Stack.Screen
          name="MealDetails"
          component={MealDetailsScreen}
          options={{ title: "מתכון" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
