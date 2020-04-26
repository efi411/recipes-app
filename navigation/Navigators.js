import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CategoriesScreen from "../screens/CategoriesScreen";
import ChefMealsScreen from "../screens/ChefMealsScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";
import FilterScreen from "../screens/FiltersScreen";
import Color from "../constants/Colors";

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Meals"
          options={{ title: "משתמשים" }}
          component={StackNavigatorMeals}
        />
        <Drawer.Screen
          name="Filters"
          options={{ title: "פילטרים" }}
          component={StackNavigatorFilters}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const StackNavigatorFilters = () => {
  const Stack = createStackNavigator();
  return (
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
        name="Filters"
        component={FilterScreen}
        options={{ title: "פילטרים" }}
      />
    </Stack.Navigator>
  );
};

const StackNavigatorMeals = () => {
  const Stack = createStackNavigator();
  return (
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
  );
};

export default DrawerNavigator;
