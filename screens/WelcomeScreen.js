import React from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import DefaultButton from "../components/DefaultButton";

const WelcomePage = props => {
  return (
    <View style={styles.welcomeContainer}>
      <ImageBackground
        source={require("../assets/gratin.jpg")}
        style={styles.BackgroundImage}
      >
        <DefaultButton title="קדימה למתכונים" onPress={props.onStartPress} />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  welcomeContainer: {
    flex: 1
  },
  BackgroundImage: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "15%"
  }
});

export default WelcomePage;
