/******************************************
 *  Author : Efi
 *  Created On : Mon April 6 2020
 *******************************************/

import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableNativeFeedback,
  Animated,
} from "react-native";
import Color from "../constants/Colors";
import DefaultText from "../components/DefaultText";

const CategoryItem = (props) => {
  const [fadeAnim] = useState(new Animated.Value(0));
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
    }).start();
  }, []);

  return (
    <TouchableNativeFeedback activeOpacity={0.6} onPress={props.onPress}>
      <View style={styles.container}>
        <Animated.View
          style={{
            opacity: fadeAnim,
          }}
        >
          <Image source={props.imageUrl} />
        </Animated.View>
        <View style={styles.containerText}>
          <DefaultText style={styles.title}>{props.title}</DefaultText>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "85%",
    flexDirection: "row",
    marginVertical: 15,
    borderRadius: 5,
    backgroundColor: Color.primaryColor,
    elevation: 8,
    paddingRight: 25,
  },
  title: {
    fontSize: 22,
    color: "white",
    textShadowColor: "black",
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 0.5,
  },
  containerText: {
    flex: 1,
    flexDirection: "column",
    marginLeft: 12,
    justifyContent: "center",
  },
});

export default CategoryItem;
