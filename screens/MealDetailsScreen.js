/******************************************
 *  Author : Rotems
 *  Created On : Tue Mar 31 2020
 *******************************************/

import React from "react";
import { StyleSheet, View, Text, ScrollView, Image } from "react-native";
import { MEALS } from "../data/dummy-data";
import Icon from "react-native-vector-icons/MaterialIcons";
import Color from "../constants/Colors";
import LineText from "../components/LineText";
import MealDetailCircle from "../components/MealDetailCircle";

const MealDetailsScreen = props => {
  const mealName = MEALS[0].title;
  const complexity = MEALS[0].complexity;
  const duration = MEALS[0].duration;
  const isDairy = MEALS[0].filters.isDairy;
  const isMeat = MEALS[0].filters.isMeat;

  let kosher = "פרווה";
  if (isDairy) {
    kosher = "חלבי";
  } else if (isMeat) {
    kosher = "בשרי";
  }

  const ListItem = props => {
    return (
      <View style={styles.listItem}>
        <View style={styles.listIcon}>
          <Icon name="brightness-1" size={12} color={Color.primaryColor} />
        </View>
        <Text>{props.children}</Text>
      </View>
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <Image source={require("../assets/cfSoup.jpg")} style={styles.image} />
      <View style={styles.mealTitle}>
        <LineText style={styles.titleText}>{mealName}</LineText>
      </View>
      <View style={styles.circles}>
        <MealDetailCircle titleText="זמן הכנה:" contentText={duration} />
        <MealDetailCircle titleText="כשרות:" contentText={kosher} />
        <MealDetailCircle titleText="מורכבות:" contentText={kosher} />
      </View>
      {MEALS[0].ingredients.map(ingredient => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center"
  },
  image: {
    height: "40%",
    width: "100%"
  },
  listItem: {
    marginVertical: 8,
    flexDirection: "row-reverse",
    width: "100%",
    alignItems: "center"
  },
  listIcon: {
    marginLeft: 8
  },
  mealTitle: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20
  },
  titleText: {
    fontSize: 20
  },
  circles: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginVertical: 20
  }
});

export default MealDetailsScreen;
