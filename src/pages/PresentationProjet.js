import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Cadre from '../component/Cadre';
import GalleryCaptor from '../component/GalleryCaptor';

export default function PresentationProjet() {
  return (
    <View style={styles.container}>
      <Cadre title = "SP02 Project Résumé">
        <Text style={{color: '#FFF', fontSize: 15, marginTop:'10%'}}>
          Ce projet s'articule autour de l'utilisation de nos connaissances pour la production d'un capteur SP02 sub-aquatiques
        </Text>
        <GalleryCaptor></GalleryCaptor>
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
