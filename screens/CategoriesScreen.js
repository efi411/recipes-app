/******************************************
 *  Author : Efi
 *  Created On : Mon April 6 2020
 *******************************************/

import React from "react";
import { StyleSheet, View, FlatList, ImageBackground } from "react-native";
import { CHEFS } from "../data/dummy-data";
import CategoryItem from "../components/CategoryItem";

const CategoriesScreen = (props) => {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/categories-bkg.png")}
        style={styles.image}
      >
        <FlatList
          data={CHEFS}
          renderItem={(itemData) => (
            <CategoryItem
              onPress={() =>
                navigation.navigate("ChefMeals", {
                  chefId: itemData.item.id,
                  chefName: itemData.item.name,
                })
              }
              title={itemData.item.name}
              imageUrl={itemData.item.image}
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
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});

export default CategoriesScreen;
