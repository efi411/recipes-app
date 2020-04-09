/******************************************
 *  Author : Rotems
 *  Created On : Wed Apr 01 2020
 *******************************************/

import React from "react";
import { StyleSheet, View } from "react-native";
import Color from "../constants/Colors";
import DefaultText from "./DefaultText";

const LineText = (props) => {
  const { textStyle, lineWeight, lineColor, lineWidth } = props;

  const addedLineStyle = {
    width: lineWidth ? lineWidth : "80%",
    borderWidth: lineWeight ? lineWeight : 1,
    borderColor: lineColor ? lineColor : Color.secondaryColor,
    margin: textStyle && textStyle["fontSize"] ? textStyle["fontSize"] / 2 : 6,
  };

  return (
    <View style={{ ...styles.comp, ...props.style }}>
      <DefaultText style={{ ...textStyle }}>{props.children}</DefaultText>
      <View style={{ ...styles.lineStyle, ...addedLineStyle }} />
    </View>
  );
};

const styles = StyleSheet.create({
  lineStyle: {
    width: "80%",
  },
  comp: {
    alignItems: "center",
    alignSelf: "flex-start",
  },
});
export default LineText;
