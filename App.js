import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
import TestAffichage from './src/pages/TestAffichage';

//const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <TestAffichage />
    </NavigationContainer>
  );
}