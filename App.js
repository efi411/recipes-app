import React, { useState } from "react";
import { StyleSheet, View, I18nManager } from "react-native";
import WelcomeScreen from "./screens/WelcomeScreen";
import CategoriesScreen from "./screens/CategoriesScreen";
import { AppLoading } from "expo";
import { useFonts } from "@use-expo/font";

try {
  I18nManager.forceRTL(true);
} catch (e) {
  console.error(e);
}

export default (props) => {
  const [isWelcomeScreen, setWelcomeScreen] = useState(true);

  const startAppPage = () => {
    setWelcomeScreen(false);
  };

  let currScreen = <WelcomeScreen onStartPress={startAppPage} />;
  if (!isWelcomeScreen) {
    currScreen = <CategoriesScreen />;
  }

  let [fontsLoaded] = useFonts({
    "Assistant-Bold": require("./assets/fonts/Assistant-Bold.ttf"),
    "Assistant-Regular": require("./assets/fonts/Assistant-Regular.ttf"),
    "Assistant-Light": require("./assets/fonts/Assistant-Light.ttf"),
    "Assistant-SemiBold": require("./assets/fonts/Assistant-SemiBold.ttf"),
    "Assistant-ExtraLight": require("./assets/fonts/Assistant-ExtraLight.ttf"),
    "Assistant-ExtraBold": require("./assets/fonts/Assistant-ExtraBold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return <View style={styles.screen}>{currScreen}</View>;
  }
};

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
