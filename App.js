import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import WelcomeScreen from "./screens/WelcomeScreen";

export default function App() {
  const [isWelcomeScreen, setWelcomeScreen] = useState(true);

  const startAppPage = () => {
    setWelcomeScreen(false);
  };

  let currScreen = <WelcomeScreen onStartPress={startAppPage} />;
  if (!isWelcomeScreen) {
    currScreen = (
      <View style={styles.temp}>
        <Text>New screen!!!</Text>
      </View>
    );
  }

  return <View style={styles.screen}>{currScreen}</View>;
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  temp: {
    flex: 1,
    padding: 50,
    alignItems: "center"
  }
});
