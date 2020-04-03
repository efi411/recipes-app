/******************************************
 *  Author : Rotems
 *  Created On : Wed Apr 01 2020
 *******************************************/

import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Color from "../constants/Colors";

const LineHeader = props => {
  return (
    <View>
      <Text style={{ ...styles.text, ...props.style }}>{props.children}</Text>
      <View style={styles.lineStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  lineStyle: {
    borderWidth: 3,
    borderColor: Color.primaryColor,
    margin: 10
  },
  text: {}
});
export default LineHeader;
