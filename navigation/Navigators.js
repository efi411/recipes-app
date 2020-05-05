import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import CategoriesScreen, {
  categoriesScreenOptions,
} from "../screens/CategoriesScreen";
import ChefMealsScreen, {
  chefMealsScreenOptions,
} from "../screens/ChefMealsScreen";
import MealDetailsScreen, {
  mealDetailsScreenOptions,
} from "../screens/MealDetailsScreen";
import FilterScreen, { filtersScreenOptions } from "../screens/FiltersScreen";

import Color from "../constants/Colors";

const defaultOptions = {
  headerStyle: {
    backgroundColor: Color.primaryColor,
  },
  headerTitleAlign: "center",
  headerTitleStyle: {
    fontWeight: "bold",
  },
  headerTintColor: "white",
};

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
    <Stack.Navigator screenOptions={defaultOptions}>
      <Stack.Screen
        name="Filters"
        component={FilterScreen}
        options={filtersScreenOptions}
      />
    </Stack.Navigator>
  );
};

const StackNavigatorMeals = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={defaultOptions}>
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={categoriesScreenOptions}
      />
      <Stack.Screen
        name="ChefMeals"
        component={ChefMealsScreen}
        options={chefMealsScreenOptions}
      />
      <Stack.Screen
        name="MealDetails"
        component={MealDetailsScreen}
        options={mealDetailsScreenOptions}
      />
    </Stack.Navigator>
  );
};

export default DrawerNavigator;
