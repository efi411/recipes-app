import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Color from "../constants/Colors";

const DefaultButton = props => {
  return (
    <TouchableOpacity
      style={{ ...styles.button, ...props.style }}
      onPress={props.onPress}
      activeOpacity={0.5}
    >
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Color.primaryColor,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    padding: 15
  },
  text: {
    fontSize: 20
  }
});

export default DefaultButton;
