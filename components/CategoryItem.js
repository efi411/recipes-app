/******************************************
 *  Author : Efi
 *  Created On : Mon April 6 2020
 *******************************************/

import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Animated,
} from "react-native";
import Color from "../constants/Colors";

const CategoryItem = (props) => {
  const [fadeAnim] = useState(new Animated.Value(0));
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
    }).start();
  }, []);

  return (
    <TouchableOpacity activeOpacity={0.9} onPress={() => {}}>
      <View style={styles.container}>
        <Animated.View
          style={{
            opacity: fadeAnim,
          }}
        >
          <Image source={props.image_url} />
        </Animated.View>
        <View style={styles.container_text}>
          <Text style={styles.title}>{props.title}</Text>
        </View>
      </View>
    </TouchableOpacity>
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
  container_text: {
    flex: 1,
    flexDirection: "column",
    marginLeft: 12,
    justifyContent: "center",
  },
});

export default CategoryItem;
