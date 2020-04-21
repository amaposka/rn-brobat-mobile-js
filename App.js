import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, StyleSheet, StatusBar } from 'react-native';

import Constants from 'expo-constants';
import StackNavigatorScreen from './src/navigation/StackNavigatorScreen';

import './assets/locales/i18n';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <NavigationContainer>
        <StackNavigatorScreen />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ECF0F1',
    padding: 8,
  },
  buttonContainer: {
    padding: 10,
  },
  textStyle: {
    textAlign: 'center',
  },
});
