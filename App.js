import React, { useState } from "react";
import { StyleSheet, View, I18nManager } from "react-native";
import { AppLoading } from "expo";
import { useFonts } from "@use-expo/font";
import WelcomeScreen from "./screens/WelcomeScreen";
import DrawerNavigator from "./navigation/Navigators";
import { createStore, combineReducers } from "redux";
import mealsReducer from "./store/reducers/meals";
import chefsReducer from "./store/reducers/chefs";
import { Provider } from "react-redux";

const rootReducer = combineReducers({
  meals: mealsReducer,
  chefs: chefsReducer,
});

const store = createStore(rootReducer);

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
    currScreen = (
      <Provider store={store}>
        <DrawerNavigator />
      </Provider>
    );
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
