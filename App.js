import React, { useState } from "react";
import { StyleSheet, View, I18nManager } from "react-native";
import WelcomeScreen from "./screens/WelcomeScreen";
import CategoriesScreen from "./screens/CategoriesScreen";

try {
  I18nManager.forceRTL(true);
} catch (e) {
  console.error(e);
}

export default function App() {
  const [isWelcomeScreen, setWelcomeScreen] = useState(true);

  const startAppPage = () => {
    setWelcomeScreen(false);
  };

  let currScreen = <WelcomeScreen onStartPress={startAppPage} />;
  if (!isWelcomeScreen) {
    currScreen = <CategoriesScreen />;
  }

  return <View style={styles.screen}>{currScreen}</View>;
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  temp: {
    flex: 1,
    padding: 50,
    alignItems: "center",
  },
});
