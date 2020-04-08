/******************************************
 *  Author : Rotems
 *  Created On : Wed Apr 01 2020
 *******************************************/

import React from "react";
import { StyleSheet, View } from "react-native";
import Color from "../constants/Colors";
import DefaultText from "./DefaultText";

const MealDetailCircle = (props) => {
  return (
    <View style={styles.circle}>
      <DefaultText>{props.titleText}</DefaultText>
      <DefaultText style={styles.contentTextSyle}>
        {props.contentText}
      </DefaultText>
    </View>
  );
};

const styles = StyleSheet.create({
  circle: {
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 30,
    borderColor: Color.secondaryColor,
    padding: 17,
  },
  contentTextSyle: {},
});

export default MealDetailCircle;
