import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const BoutonLancer = ({ label, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FF0000', // Couleur de fond du bouton
    padding: 10,
    margin: 0,
    borderRadius: 20, // Coins arrondis
    width: '100%',
  },
  label: {
    color: '#FFF', // Couleur du texte
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default BoutonLancer;