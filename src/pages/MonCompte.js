import { StyleSheet, Text, View } from 'react-native';
import Cadre from '../component/Cadre'

export default function MonCompte({navigation}) {
  return (
    <View style={styles.container}>
        <Text style={styles.Titre}>Mon compte</Text>
            <Text style={styles.email}> 
                test
            </Text>
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
    Titre: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000000',
        textAlign: 'center', // Centre le texte horizontalement
        justifyContent: 'center', // Centre le texte verticalement
    },
    email: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000000',
        textAlign: 'center', // Centre le texte horizontalement
        justifyContent: 'center', // Centre le texte verticalement
    },
});
