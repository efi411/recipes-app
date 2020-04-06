/******************************************
 *  Author : Rotems
 *  Created On : Wed Apr 01 2020
 *******************************************/

import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Color from "../constants/Colors";

const MealDetailCircle = props => {
  return (
    <View style={styles.circle}>
      <Text>{props.titleText}</Text>
      <Text style={styles.contentTextSyle}>{props.contentText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  circle: {
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 30,
    borderColor: Color.secondaryColor,
    padding: 17
  },
  contentTextSyle: {}
});

export default MealDetailCircle;
