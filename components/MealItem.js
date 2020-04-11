/******************************************
 *  Author : Gil
 *  Created On : Fri Apr 10 2020
 *******************************************/

import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Image,
  Animated,
  TouchableNativeFeedback,
  Dimensions,
} from "react-native";
import DefaultText from "../components/DefaultText";
import Color from "../constants/Colors";
import Icon from "react-native-vector-icons/MaterialIcons";

const getSize = (dim) => {
  const imageSizeWeight = Dimensions.get("window").width / 2.4;
  if (dim === "height") {
    return { height: imageSizeWeight };
  } else if (dim === "width") {
    return { width: imageSizeWeight };
  }
};

const MealItem = (props) => {
  const [fadeAnim] = useState(new Animated.Value(0));
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
    }).start();
  }, []);

  let { mealName, mealImage, mealDuration } = props;

  return (
    <TouchableNativeFeedback activeOpacity={0.6} onPress={props.onPress}>
      <View style={{ ...styles.container }}>
        <Animated.View
          style={{
            opacity: fadeAnim,
          }}
        >
          <Image
            style={{ ...getSize("width"), ...getSize("height") }}
            source={mealImage}
          />
          <View style={getSize("width")}>
            <DefaultText type="button" style={{ fontSize: 24 }}>
              {mealName}
            </DefaultText>
          </View>
          <View style={styles.durationContainer}>
            <Icon name="av-timer" size={30} color={Color.primaryColor} />
            <DefaultText style={{ color: Color.primaryColor }}>
              {" "}
              {mealDuration} דקות
            </DefaultText>
          </View>
        </Animated.View>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    resizeMode: "contain",
    width: "50%",
    alignItems: "center",
    marginVertical: 12,
  },
  durationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  textConatainer: {
    marginVertical: 25,
  },
});

export default MealItem;
