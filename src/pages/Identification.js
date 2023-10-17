import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Cadre from '../component/Cadre'
import ButtonLancer from '../component/ButtonLancer.js'
import InfoUtilisateur from '../component/InfoUtilisateur';

export default function TestAffichage() {
  return (
    <View style={styles.container}>
      <Cadre title = "Identification">
      <InfoUtilisateur></InfoUtilisateur>
      <ButtonLancer label = "Connexion"></ButtonLancer>
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
