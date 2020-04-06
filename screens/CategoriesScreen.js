/******************************************
 *  Author : Efi
 *  Created On : Mon April 6 2020
 *******************************************/

import React from "react";
import { StyleSheet, View, FlatList, ImageBackground } from "react-native";
import { CHEFS } from "../data/dummy-data";
import CategoryItem from "../components/CategoryItem";

const MealDetailsScreen = (props) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/categories-background.png")}
        style={styles.image}
      >
        <FlatList
          data={CHEFS}
          renderItem={(itemData) => (
            <CategoryItem
              title={itemData.item.name}
              image_url={itemData.item.image}
            />
          )}
          keyExtractor={(chef) => chef.name}
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});

export default MealDetailsScreen;
