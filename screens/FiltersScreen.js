/******************************************
 *  Author : Efi
 *  Created On : Thu April 9 2020
 *******************************************/

import React, { useState } from "react";
import { StyleSheet, View, Switch } from "react-native";
import DefaultText from "../components/DefaultText";
import LineText from "../components//LineText";
import Color from "../constants/Colors";

const FiltersScreen = (props) => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isVegen, setIsVegen] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);
  const [isLactosIntolerance, setIsLactosIntolerance] = useState(false);
  const [isdairy, setIsdairy] = useState(false);
  const [isMeat, setIsMeat] = useState(false);
  const [isDessert, setIsDessert] = useState(false);

  const getFilterItem = (text, isOn, setSwitch) => {
    return (
      <View style={styles.filterContainer}>
        <DefaultText style={styles.text}>{text}</DefaultText>
        <Switch
          value={isOn}
          onValueChange={(newValue) => setSwitch(newValue)}
        />
      </View>
    );
  };

  return (
    <View style={styles.screen}>
      <LineText
        textStyle={styles.title}
        lineWeight={3}
        lineWidth={70}
        lineColor={Color.primaryColor}
      >
        פילטרים
      </LineText>
      {getFilterItem("נטול גלוטן", isGlutenFree, setIsGlutenFree)}
      {getFilterItem("טבעוני", isVegen, setIsVegen)}
      {getFilterItem("צמחוני", isVegetarian, setIsVegetarian)}
      {getFilterItem("נטול לקטוז", isLactosIntolerance, setIsLactosIntolerance)}
      {getFilterItem("חלבי", isdairy, setIsdairy)}
      {getFilterItem("בשרי", isMeat, setIsMeat)}
      {getFilterItem("קינוח", isDessert, setIsDessert)}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 30,
    flex: 1,
  },
  filterContainer: {
    marginVertical: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: "bold",
  },
  text: {
    fontSize: 20,
  },
});

export default FiltersScreen;
