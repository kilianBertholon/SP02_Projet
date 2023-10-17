import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Cadre from '../component/Cadre'
import Graph from '../component/Graph.js'
import ButtonLancer from '../component/ButtonLancer.js'

export default function TestAffichage() {
  return (
    <View style={styles.container}>
      <Cadre title = "SPO2 Project">
      <Graph title = "SP02 Graph"></Graph>
      <Graph title = "FC Graph"></Graph>
      <ButtonLancer label = "Lancer le test"></ButtonLancer>
      <StatusBar 
              backgroundColor="#FFF" // Couleur d'arrière-plan de la barre d'état
              barStyle="light-content" // Couleur du texte (light ou dark)
              hidden={false} // Si true, la barre d'état est masquée
               />
      </Cadre>
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
