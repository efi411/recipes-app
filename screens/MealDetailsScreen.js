/******************************************
 *  Author : Gil
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

  const IngListItem = props => {
    return (
      <View style={styles.ingListItem}>
        <View style={styles.listIcon}>
          <Icon name="brightness-1" size={10} color={Color.primaryColor} />
        </View>
        <Text>{props.children}</Text>
      </View>
    );
  };

  const StepListItem = props => {
    return (
      <View style={styles.stepListItem}>
        <Text style={styles.stepText}>{props.index}.</Text>
        <Text>{props.children}</Text>
      </View>
    );
  };

  return (
    <ScrollView>
      <View style={styles.screen}>
        <Image source={require("../assets/cfSoup.jpg")} style={styles.image} />
        <View style={styles.mealTitle}>
          <LineText
            textStyle={styles.titleText}
            lineWeight={3}
            lineColor={Color.primaryColor}
          >
            {mealName}
          </LineText>
        </View>
        <View style={styles.circles}>
          <MealDetailCircle
            titleText="זמן הכנה:"
            contentText={duration + " דקות"}
          />
          <MealDetailCircle titleText="כשרות:" contentText={kosher} />
          <MealDetailCircle titleText="מורכבות:" contentText={complexity} />
        </View>

        <View style={styles.mealTitle}>
          <LineText style={{ marginBottom: 15 }}> מרכיבים:</LineText>
        </View>
        {MEALS[0].ingredients.map(ingredient => (
          <IngListItem key={ingredient}>{ingredient}</IngListItem>
        ))}
        <View style={styles.mealTitle}>
          <LineText style={{ marginBottom: 15 }}> שלבי הכנה:</LineText>
        </View>

        <View style={styles.steps}>
          {MEALS[0].steps.map((step, index) => (
            <StepListItem key={step} index={index + 1}>
              {step}
            </StepListItem>
          ))}
        </View>

        <View style={styles.endScreeen}>
          <Icon name="local-dining" size={20} color={Color.primaryColor} />
          <Text> בתאבון!</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  image: {
    height: 200,
    width: "100%"
  },
  ingListItem: {
    marginBottom: 18,
    flexDirection: "row",
    width: "100%",
    alignItems: "center"
  },
  stepListItem: {
    marginBottom: 18,
    flexDirection: "row",
    width: "100%"
  },
  listIcon: {
    marginLeft: 5,
    marginRight: 5
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
    marginVertical: 20,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: Color.accentColor,
    padding: 10
  },
  steps: {
    width: "80%"
  },
  endScreeen: {
    alignItems: "center",
    marginTop: 50
  },
  stepText: {
    color: Color.primaryColor,
    marginLeft: 4,
    marginRight: 2
  }
});

export default MealDetailsScreen;