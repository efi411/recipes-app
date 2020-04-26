import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CategoriesScreen from "../screens/CategoriesScreen";
import ChefMealsScreen from "../screens/ChefMealsScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";
import Color from "../constants/Colors";

const Navigator = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: Color.primaryColor,
          },
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTintColor: "white",
        }}
      >
        <Stack.Screen
          name="Categories"
          component={CategoriesScreen}
          options={{ title: "משתמשים" }}
        />
        <Stack.Screen
          name="ChefMeals"
          component={ChefMealsScreen}
          options={{ title: "" }}
        />
        <Stack.Screen
          name="MealDetails"
          component={MealDetailsScreen}
          options={{ title: "" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
