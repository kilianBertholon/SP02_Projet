import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TestAffichage from './pages/TestAffichage';
import Identification from './pages/Identification'
import PresentationProjet from './pages/PresentationProjet'

const Stack = createNativeStackNavigator();


function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='PresentationProjet'>
        <Stack.Screen name="TestAffichage" component={TestAffichage} />
        <Stack.Screen name="Identification" component={Identification} />
        <Stack.Screen name="PresentationProjet" component={PresentationProjet} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default  App;
