/******************************************
 *  Author : Rotems
 *  Created On : Wed Apr 01 2020
 *******************************************/

import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Color from "../constants/Colors";

const LineText = (props) => {
  const { textStyle, lineWeight, lineColor } = props;

  const addedLineStyle = {
    borderWidth: lineWeight ? lineWeight : 1,
    borderColor: lineColor ? lineColor : Color.secondaryColor,
    margin: textStyle && textStyle["fontSize"] ? textStyle["fontSize"] / 2 : 6,
  };

  return (
    <View style={{ ...styles.comp, ...props.style }}>
      <Text style={{ ...styles.text, ...textStyle }}>{props.children}</Text>
      <View style={{ ...styles.lineStyle, ...addedLineStyle }} />
    </View>
  );
};

const styles = StyleSheet.create({
  lineStyle: {
    width: "80%",
  },
  text: {},
  comp: {
    alignItems: "center",
    alignSelf: "flex-start",
  },
});
export default LineText;
