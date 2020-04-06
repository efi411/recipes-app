import React from "react";
import { StyleSheet, Text } from "react-native";
import Fonts from "../constants/Fonts";

const DefaultText = (props) => {
  return (
    <Text style={{ ...styles.text, ...props.style }}>{props.children}</Text>
  );
};

const styles = StyleSheet.create({
  text: {},
});

export default DefaultText;
