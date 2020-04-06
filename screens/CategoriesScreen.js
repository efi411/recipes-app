/******************************************
 *  Author : Efi
 *  Created On : Tue April 6 2020
 *******************************************/

import React from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import { CHEFS } from "../data/dummy-data";
import CategoryItem from "../components/CategoryItem";

const renderListItem = (itemData) => {
  return (
    <CategoryItem title={itemData.item.name} image_url={itemData.item.image} />
  );
};

const MealDetailsScreen = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={CHEFS}
        renderItem={renderListItem.bind(this)}
        keyExtractor={(chef) => chef.name}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
  },
});

export default MealDetailsScreen;
