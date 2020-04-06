import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Color from "../constants/Colors";
import DefaultText from "./DefaultText";

const DefaultButton = (props) => {
  return (
    <TouchableOpacity
      style={{ ...styles.button, ...props.style }}
      onPress={props.onPress}
      activeOpacity={0.5}
    >
      <DefaultText style={styles.text}>{props.title}</DefaultText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Color.primaryColor,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
  },
  text: {
    fontSize: 20,
    color: "white",
  },
});

export default DefaultButton;
