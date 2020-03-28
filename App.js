import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Color from './constants/Colors'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Ninunim App!</Text>
      <Icon name="favorite-border" size={30} color= {Color.primaryColor} />
      <Icon name="desktop-windows" size={30} color= {Color.accentColor} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
