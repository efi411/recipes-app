import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import Color from "../constants/Colors";

export const menuIcon = (onPressFunc) => (
  <Icon.Button
    name="menu"
    size={25}
    backgroundColor={Color.primaryColor}
    onPress={() => onPressFunc()}
  />
);

export const saveIcon = () => (
  <Icon.Button
    name="save"
    size={25}
    backgroundColor={Color.primaryColor}
    onPress={() => console.log("Saved!!!!!")}
  />
);
