import React from "react";
import { Text } from "react-native";

const DefaultText = (props) => {
  const fontFamily = (context) => {
    let family;
    switch (context) {
      case "title":
        family = "Assistant-ExtraBold";
        break;
      case "button":
        family = "Assistant-Bold";
        break;
      default:
        family = "Assistant-Regular";
    }

    return { fontFamily: family };
  };

  return (
    <Text style={{ ...props.style, ...fontFamily(props.type) }}>
      {props.children}
    </Text>
  );
};

export default DefaultText;
