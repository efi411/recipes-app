/******************************************
 *  Author : Rotems
 *  Created On : Wed Apr 01 2020
 *******************************************/

import React from "react";
import { StyleSheet, View, Text } from "react-native";

const MealDetailCircle = props => {
  return (
    <View style={styles.circle}>
      <Text>{props.titleText}</Text>
      <Text>{props.contentText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  circle: {}
});

export default MealDetailCircle;
