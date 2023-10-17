import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Cadre from './src/component/Cadre.js'
import Graph from './src/component/Graph.js'
import ButtonLancer from './src/component/ButtonLancer.js'

export default function App() {
  return (
    <View style={styles.container}>
      <Cadre title = "SPO2 Project"></Cadre>
      <Graph title = "SP02 Graph"></Graph>
      <Graph title = "FC Graph"></Graph>
      <ButtonLancer label = "Lancer le test"></ButtonLancer>
      <StatusBar 
              backgroundColor="#FFF" // Couleur d'arrière-plan de la barre d'état
              barStyle="light-content" // Couleur du texte (light ou dark)
              hidden={false} // Si true, la barre d'état est masquée
               />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 40,
  },
});
