import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import Color from "../constants/Colors";

export const headerIcon = (iconName, onPressFunc) => (
  <Icon.Button
    name={iconName}
    size={25}
    backgroundColor={Color.primaryColor}
    onPress={() => onPressFunc()}
  />
);
export const menuIcon = (iconName, onPressFunc) => (
  <Icon.Button
    name={iconName}
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
