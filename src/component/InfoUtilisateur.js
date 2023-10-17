import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const InfoUtilisateur = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Ici, tu peux ajouter la logique pour gérer la connexion de l'utilisateur.
    // Par exemple, tu peux vérifier les informations d'identification avec un service d'authentification.

    console.log('Adresse e-mail :', email);
    console.log('Mot de passe :', password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Connexion</Text>
      <TextInput
        style={[styles.input, {color: 'white'}]}
        placeholder="Adresse e-mail"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={[styles.input, {color: 'white'}]}
        placeholder="Mot de passe"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Se connecter" onPress={handleSignIn} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: '10%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
  },
});

export default InfoUtilisateur;




