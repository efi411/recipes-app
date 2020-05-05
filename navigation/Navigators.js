import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/MaterialIcons";

import CategoriesScreen from "../screens/CategoriesScreen";
import ChefMealsScreen from "../screens/ChefMealsScreen";
import MealDetailsScreen, {
  mealDetailsScreenOptions,
} from "../screens/MealDetailsScreen";
import FilterScreen from "../screens/FiltersScreen";

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

const menuIcon = (onPressFunc) => (
  <Icon.Button
    name="menu"
    size={25}
    backgroundColor={Color.primaryColor}
    onPress={() => onPressFunc()}
  />
);

const saveIcon = () => (
  <Icon.Button
    name="save"
    size={25}
    backgroundColor={Color.primaryColor}
    onPress={() => console.log("Saved!!!!!")}
  />
);

const StackNavigatorFilters = (props) => {
  const { navigation } = props;

  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={defaultOptions}>
      <Stack.Screen
        name="Filters"
        component={FilterScreen}
        options={{
          title: "פילטרים",
          headerLeft: menuIcon.bind(this, navigation.openDrawer),
          headerRight: saveIcon,
        }}
      />
    </Stack.Navigator>
  );
};

const StackNavigatorMeals = (props) => {
  const { navigation } = props;

  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={defaultOptions}>
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "משתמשים",
          headerLeft: menuIcon.bind(this, navigation.openDrawer),
        }}
      />
      <Stack.Screen
        name="ChefMeals"
        component={ChefMealsScreen}
        options={mealDetailsScreenOptions}
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
