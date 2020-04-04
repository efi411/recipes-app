/******************************************
 *  Author : Rotems
 *  Created On : Wed Apr 01 2020
 *******************************************/

import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Color from "../constants/Colors";

const LineText = props => {
  const { textStyle, lineWeight, lineColor } = props;

  let addedLineProps = {};
  if (lineWeight) {
    addedLineProps["borderWidth"] = lineWeight;
  }
  if (lineColor) {
    addedLineProps["borderColor"] = lineColor;
  }
  return (
    <View style={{ ...styles.comp, ...props.style }}>
      <Text style={{ ...styles.text, ...textStyle }}>{props.children}</Text>
      <View style={{ ...styles.lineStyle, ...addedLineProps }} />
    </View>
  );
};

const styles = StyleSheet.create({
  lineStyle: {
    borderWidth: 1,
    borderColor: Color.secondaryColor,
    margin: 10,
    width: "80%"
  },
  text: {},
  comp: {
    alignItems: "center",
    alignSelf: "flex-start"
  }
});
export default LineText;
