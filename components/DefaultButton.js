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
      <DefaultText type="button" style={styles.text}>
        {props.title}
      </DefaultText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 15,
    backgroundColor: Color.primaryColor,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    elevation: 8,
    padding: 15,
  },
  text: {
    fontSize: 22,
    color: "white",
    textShadowColor: "black",
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 0.5,
  },
});

export default DefaultButton;
